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
