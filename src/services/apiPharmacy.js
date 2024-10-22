import supabase from "./supabase"

// MARK: ziskanie vsetkych dat z databazy
export async function getPharmacy() {
  const { data, error } = await supabase.from("pharmacy").select("*")

  if (error) {
    console.error(error)
    throw new Error("Medications could not be loaded!")
  }

  return data
}

// MARK: pridanie novej polozky do databazy
export async function insertPharmacyItem(newMedication) {
  const { data, error } = await supabase
    .from("pharmacy")
    .insert([newMedication])
    .select()

  if (error) {
    console.error(error)
    throw new Error("Store could not be created")
  }

  return data
}

// MARK: vymazanie jednej polozky podla id ("row")
export async function deletePharmacyItem(id) {
  const { data, error } = await supabase.from("pharmacy").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Store could not be deleted")
  }

  return data
}
