import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({currentPage,totalPages,setCurrentPage, pagesPerGroup = 5,}) {
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);

  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  return (
    <div className="flex justify-center items-center gap-x-1 p-4">
      {/* Previous */}
      <button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        className={`flex items-center gap-x-1 px-3 py-2 text-xs font-medium border rounded-lg
        ${
          currentPage === 1
            ? "text-slate-500 bg-slate-100/50 border-slate-300 cursor-not-allowed"
            : "bg-slate-100/50 text-slate-600 border-slate-300 hover:bg-[hsl(var(--accent))] hover:text-white"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        previous
      </button>

      {/* Pages */}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const pageNumber = startPage + i;

        return (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium border
            ${
              currentPage === pageNumber
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-slate-100/50 text-black border-slate-300 hover:bg-[hsl(var(--accent))] hover:text-white"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
        className={`flex items-center gap-x-1 px-3 py-2 text-xs font-medium border rounded-lg
        ${
          currentPage === totalPages
            ? "text-slate-500 bg-slate-100/50 border-slate-300 cursor-not-allowed"
            : "bg-slate-100/50 text-slate-600 border-slate-300 hover:bg-[hsl(var(--accent))] hover:text-white"
        }`}
      >
        next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}