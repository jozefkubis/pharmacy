import supabase from "./supabase"

export async function getPharmacy() {
  const { data, error } = await supabase.from("pharmacy").select("*")

  if (error) {
    console.error(error)
    throw new Error("Medications could not be loaded!")
  }

  return data
}
