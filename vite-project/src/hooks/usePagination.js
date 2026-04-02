import { useState } from "react";

export default function usePagination(data, itemsPerPage = 5) {
    //data is a list
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentData = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return {
    firstIndex,
    lastIndex,
    currentPage,
    setCurrentPage,
    currentData,
    totalPages,
    
  };
}