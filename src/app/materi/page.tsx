import Kelas from "./kelas";

const Page = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Ayo Belajar di
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Pengen Ngoding
            </span>
          </h1>

          <p className="mt-6 text-base text-gray-600 sm:text-lg">
            Tingkatkan skill programming kamu dengan materi terbaru, praktik
            nyata, dan mentor berpengalaman.
            <span className="font-medium text-gray-800">
              {" "}
              Upgrade skill-mu sekarang!
            </span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#kelas"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-amber-700 hover:scale-105"
            >
              🚀 Lihat Kelas
            </a>

            <a
              href="https://wa.me/6285179947809"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:scale-105"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      <Kelas />
    </section>
  );
};

export default Page;
