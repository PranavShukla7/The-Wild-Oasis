import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Check if image is a File object or a string path
  const imageName = hasImagePath
    ? null
    : `${Math.random()}-${newCabin.image?.name || "cabin-image"}`.replaceAll(
        "/",
        ""
      );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Convert string values to numbers for numeric fields
  const cabinData = {
    ...newCabin,
    image: imagePath,
    maxCapacity: Number(newCabin.maxCapacity),
    regularPrice: Number(newCabin.regularPrice),
    discount: Number(newCabin.discount),
  };

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([cabinData]);

  // B) EDIT
  if (id) query = query.update(cabinData).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created: " + error.message);
  }

  // 2. Upload image
  if (hasImagePath) return data;

  // Only try to upload if we have a valid image file
  if (newCabin.image && typeof newCabin.image !== "string") {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uploading image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
    }

    return data;
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
