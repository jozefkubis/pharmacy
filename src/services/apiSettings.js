import supabase from "./supabase"

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*")

  if (error) {
    console.error(error)
    throw new Error("Settings could not be loaded")
  }
  return data
}
