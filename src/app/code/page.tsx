import Kode from "./code";

const Page = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Jual Source Code Siap Pakai
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Pengen Ngoding
            </span>
          </h1>

          <p className="mt-6 text-base text-gray-600 sm:text-lg">
            Hemat waktu coding dari nol 🚀 Dapatkan source code{" "}
            <strong>rapi, reusable, dan scalable </strong>
            untuk kebutuhan belajar, tugas, maupun project real.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#kelas"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-amber-700 hover:scale-105"
            >
              🔥 Lihat Source Code
            </a>

            <a
              href="https://wa.me/6285179947809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:scale-105"
            >
              💬 Konsultasi Gratis
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
            <span>✅ Clean Code</span>
            <span>✅ Full Dokumentasi</span>
            <span>✅ Support Revisi</span>
          </div>
        </div>
      </div>

      {/* Section daftar source code */}
      <Kode />
    </section>
  );
};

export default Page;
