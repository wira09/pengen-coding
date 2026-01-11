const Filter = () => {
  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Cari kelas..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pl-10 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      {/* Ketersediaan Kelas Filter */}
      <details className="group relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-3 text-slate-700 transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium">Ketersediaan</span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="divide-y divide-slate-300 border-t border-slate-300 bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-slate-700">0 Dipilih</span>
            <button
              type="button"
              className="text-sm text-slate-700 underline transition-colors hover:text-slate-900"
            >
              Reset
            </button>
          </div>

          <fieldset className="p-3">
            <legend className="sr-only">Opsi Ketersediaan</legend>
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="gratis"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="gratis"
                />
                <span className="text-sm font-medium text-slate-700">
                  Gratis
                </span>
              </label>

              <label
                htmlFor="berbayar"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="berbayar"
                />
                <span className="text-sm font-medium text-slate-700">
                  Berbayar
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </details>

      {/* Harga Filter */}
      <details className="group relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-3 text-slate-700 transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium">Harga</span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="divide-y divide-slate-300 border-t border-slate-300 bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-slate-700">Harga maksimal Rp 300.000</span>
            <button
              type="button"
              className="text-sm text-slate-700 underline transition-colors hover:text-slate-900"
            >
              Reset
            </button>
          </div>

          <div className="flex items-center gap-3 p-3">
            <label htmlFor="MinPrice" className="flex-1">
              <span className="text-sm text-slate-700">Min</span>
              <input
                type="number"
                id="MinPrice"
                min="0"
                max="300000"
                defaultValue="0"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </label>

            <label htmlFor="MaxPrice" className="flex-1">
              <span className="text-sm text-slate-700">Max</span>
              <input
                type="number"
                id="MaxPrice"
                min="0"
                max="300000"
                defaultValue="300000"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </label>
          </div>
        </div>
      </details>

      {/* Kategori Filter */}
      <details className="group relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-3 text-slate-700 transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium">Kategori</span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="divide-y divide-slate-300 border-t border-slate-300 bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-slate-700">0 Dipilih</span>
            <button
              type="button"
              className="text-sm text-slate-700 underline transition-colors hover:text-slate-900"
            >
              Reset
            </button>
          </div>

          <fieldset className="p-3">
            <legend className="sr-only">Kategori Kelas</legend>
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="html"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="html"
                />
                <span className="text-sm font-medium text-slate-700">
                  HTML Dasar
                </span>
              </label>

              <label
                htmlFor="css"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="css"
                />
                <span className="text-sm font-medium text-slate-700">
                  CSS Fundamental
                </span>
              </label>

              <label
                htmlFor="javascript"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="javascript"
                />
                <span className="text-sm font-medium text-slate-700">
                  JavaScript Dasar
                </span>
              </label>

              <label
                htmlFor="typescript"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="typescript"
                />
                <span className="text-sm font-medium text-slate-700">
                  TypeScript
                </span>
              </label>

              <label
                htmlFor="react"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="react"
                />
                <span className="text-sm font-medium text-slate-700">
                  React.js
                </span>
              </label>

              <label
                htmlFor="nextjs"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="nextjs"
                />
                <span className="text-sm font-medium text-slate-700">
                  Next.js
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </details>

      {/* Level Filter */}
      <details className="group relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-3 text-slate-700 transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium">Level</span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="divide-y divide-slate-300 border-t border-slate-300 bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-slate-700">0 Dipilih</span>
            <button
              type="button"
              className="text-sm text-slate-700 underline transition-colors hover:text-slate-900"
            >
              Reset
            </button>
          </div>

          <fieldset className="p-3">
            <legend className="sr-only">Level Kelas</legend>
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="pemula"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="pemula"
                />
                <span className="text-sm font-medium text-slate-700">
                  Pemula
                </span>
              </label>

              <label
                htmlFor="menengah"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="menengah"
                />
                <span className="text-sm font-medium text-slate-700">
                  Menengah
                </span>
              </label>

              <label
                htmlFor="lanjutan"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded border-slate-300 bg-white shadow-sm"
                  id="lanjutan"
                />
                <span className="text-sm font-medium text-slate-700">
                  Lanjutan
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </details>
    </div>
  );
};

export default Filter;
