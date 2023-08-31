import supabase from "./SupabaseClient";

// used in contact page to send form to database
export const sendContactForm = async (name, email, message) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert({ name, email, message, date_sent: new Date().toISOString() });

    if (error) throw error;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const sendConsultationForm = async (
  name,
  email,
  instagram,
  money,
  health_goals,
  health_issues,
  age,
  booked_date,
  time_of_day
) => {
  try {
    const { data, error } = await supabase.from("consultations").insert({
      name,
      email,
      instagram,
      money,
      health_goals,
      health_issues,
      age,
      booked_date,
      time_of_day,
      submitted_date: new Date().toISOString(),
    });

    if (error) throw error;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const createUserLink = async (user_id, name, link, icon) => {
  try {
    const { data: about, error: aboutError } = await supabase
      .from("about")
      .select("id")
      .eq("user_id", user_id)
      .maybeSingle();

    const { data, error } = await supabase
      .from("links")
      .insert({ name, link, icon, about_id: about.id })
      .select()
      .maybeSingle();

    if (error) throw error;
    return { state: true, data };
  } catch (error) {
    return { state: false, error };
  }
};

// Used to create user on directory page. It defaults to not public and Scott can approve them for now
// The function fetches the country and state ids to link to the user
export const createUser = async (
  name,
  social_site,
  public_contact,
  country,
  state,
  city
) => {
  try {
    const { data: countryId, error: countryError } = await supabase
      .from("directory_countries")
      .select("id")
      .eq("name", country)
      .maybeSingle();

    if (countryError) {
      throw countryError;
    }

    const { data: stateId, error: stateError } = await supabase
      .from("directory_states")
      .select("id")
      .eq("name", state)
      .maybeSingle();

    if (stateError) {
      throw stateError;
    }

    const { data, error } = await supabase.from("directory_users").insert({
      name,
      social_site,
      public_contact,
      country_id: countryId.id,
      state_id: stateId.id,
      city,
      published: false,
    });

    if (error) throw error;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
