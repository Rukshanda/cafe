import { CgNotes } from "react-icons/cg";
import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}

 
export async function getProductsByIds(ids) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data;
}
 

export async function getMerchs() {
  try {
    const { data, error } = await supabase.from("merch").select("*");
    if (error) throw error;
    console.log("Merch data:", data); // This should log the data being fetched
    return data;
  } catch (error) {
    console.error("Error fetching merch:", error);
    return []; // Return an empty array in case of an error
  }
}

// Fetch merch products by category from the "merch" table
export async function getMerchByCategory(category) {
  const { data, error } = await supabase
    .from("merch")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error('Error fetching merch:', error);
    throw error;
  }

  return data;
}

export async function getProductsByCategory(category) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data;
}

 