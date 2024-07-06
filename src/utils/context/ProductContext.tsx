"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../../types/global";
import fetchProducts from "../../api/product/products";

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  updateProducts: (supplier: string, last: number, search: string) => void;
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: true,
  error: null,
  updateProducts: () => {}, // Initial placeholder function
});

interface ProductProviderProps {
  children: ReactNode; // Ensure children prop is defined as ReactNode
}

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData("FragranceX", 50, ""); // Fetch initial data on mount
  }, []);

  const fetchData = async (supplier: string, last: number, search: string) => {
    try {
      setLoading(true);
      const data = await fetchProducts(supplier, last, search);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

  const updateProducts = (supplier: string, last: number, search: string) => {
    fetchData(supplier, last, search);
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, error, updateProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
