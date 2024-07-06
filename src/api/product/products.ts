import axios from "axios";
import { Product } from "../../types/global";

export const BASE_URL = "http://3.88.1.181:8000/products/public/catalog";

const fetchProducts = async (
  supplier: string,
  last: number,
  search: string
): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      `${BASE_URL}?supplier=${supplier}&first=0&last=${last}&search=${search}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
