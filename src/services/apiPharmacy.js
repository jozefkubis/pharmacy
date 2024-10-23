import supabase, { supabaseUrl } from "./supabase"

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
export async function insertPharmacyItem(newMedication, id) {
  let imagePath = newMedication.image

  if (newMedication.image instanceof File) {
    const imageName = `${Math.random()}-${newMedication.image.name}`.replaceAll(
      "/",
      ""
    )

    imagePath = `${supabaseUrl}/storage/v1/object/public/medications/${imageName}`

    const { error: storageError } = await supabase.storage
      .from("medications")
      .upload(imageName, newMedication.image)

    if (storageError) {
      console.error(storageError)
      throw new Error("Image could not be uploaded!")
    }
  }

  let query = supabase.from("pharmacy")

  if (!id) {
    query = query.insert([{ ...newMedication, image: imagePath }])
  }

  if (id) {
    query = query.update({ ...newMedication, image: imagePath }).eq("id", id)
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error("Store could not be saved!")
  }

  // const { data, error } = await supabase
  //   .from("pharmacy")
  //   .insert([{ ...newMedication, image: imagePath }])
  //   .select()

  // if (error) {
  //   console.error(error)
  //   throw new Error("Store could not be created")
  // }

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
