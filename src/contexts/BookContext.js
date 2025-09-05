import { createContext, useContext } from "react";

// Tạo context
export const BookContext = createContext();

// Custom hook cho tiện dùng
export function useBookContext() {
  return useContext(BookContext);
}