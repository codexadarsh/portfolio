"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogTimelinePaginationProps {
  rows: any[];
  pageSize?: number;
}

export function BlogPagination({
  rows,
  pageSize = 5,
}: BlogTimelinePaginationProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(rows.length / pageSize);

  const paginatedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return rows.slice(start, end);
  }, [rows, page, pageSize]);

  return (
    <div className="mx-auto max-w-3xl">
      {rows.length === 0 ? (
        <div className="py-20 text-center">
          <h1 className="text-xl font-semibold text-gray-500">
            No Blogs Found
          </h1>
        </div>
      ) : (
        <>
          {/* Timeline */}
          <div className="relative min-h-[30vh] pl-6 border-l border-gray-200 dark:border-slate-800">
            <div className="py-4 text-sm text-gray-500"></div>

            {paginatedRows.map((row: any) => {
              const date = new Date(row.createdAt * 1000);
              const format = new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(date);

              return (
                <Link
                  href={`/blog/${row.id}`}
                  key={row.id}
                  className="group relative block md:py-3 py-2"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[32px] top-6 h-4 w-4 rounded-full bg-white dark:bg-slate-900 border-2 border-chart-2" />

                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-chart-2 tracking-wide">
                      {format}
                    </span>

                    <h1 className="text-gray-700 dark:text-slate-200 md:text-lg text-md font-medium group-hover:text-chart-2 transition-colors">
                      {row.title}
                    </h1>

                    <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-chart-2 transition-all">
                      <span>Read article</span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 hover:bg-chart-2 hover:text-white transition"
              >
                ← Previous
              </button>

              <span className="text-sm text-gray-500">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 hover:bg-chart-2 hover:text-white transition"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
