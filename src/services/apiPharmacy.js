import supabase from "./supabase"

export async function getPharmacy() {
  const { data, error } = await supabase.from("pharmacy").select("*")

  if (error) {
    console.error(error)
    throw new Error("Medications could not be loaded!")
  }

  return data
}

export async function deletePharmacyItem(id) {
  const { data, error } = await supabase.from("pharmacy").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Store could not be deleted")
  }

  return data
}
