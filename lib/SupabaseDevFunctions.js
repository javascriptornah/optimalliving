import supabase from "./SupabaseClient";

export const pushUser = async (userData) => {
  try {
    const { data: country_id, error } = await supabase
      .from("directory_countries")
      .select("id")
      .eq("name", userData.country)
      .maybeSingle();

    if (error) throw error;
    if (country_id == null) {
      const { data: country_id, error: error2 } = await supabase
        .from("directory_countries")
        .insert({ name: userData.country })
        .select("id");
    }
    return country_id;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const pushState = async (userData) => {
  try {
    const { data: country_id, error } = await supabase
      .from("directory_countries")
      .select("id")
      .eq("name", userData.country)
      .maybeSingle();

    if (error) throw error;
    if (country_id != null) {
      const { data: country_idx, error: error2 } = await supabase
        .from("directory_states")
        .insert({ name: userData.state, country_id: country_id.id })
        .select("id");
      console.log("error2");
      console.log(error2);
    }
    return country_id;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addUser = async (userData) => {
  try {
    const { data: country, error: error } = await supabase
      .from("directory_countries")
      .select("id")
      .eq("name", userData.country)
      .maybeSingle();

    const { data: state, error: error1 } = await supabase
      .from("directory_states")
      .select("id")
      .eq("name", userData.state)
      .maybeSingle();

    const { data: user, error: error3 } = await supabase
      .from("directory_users")
      .insert({
        name: userData.name,
        contact: userData.contact,
        country_id: country.id,
        state_id: state.id,
        city: userData.city,
      })
      .select("*");
    if (error3) throw error3;
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
