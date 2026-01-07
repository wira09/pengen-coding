import Image from "next/image";
import Link from "next/link";

interface KelasSection {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  isGratis: boolean;
  level: string;
  kelasUrl: string;
}

const menukelas = () => {
  const kelasSections: KelasSection[] = [
    // ===== GRATIS =====
    {
      id: 1,
      name: "HTML Dasar",
      description: "Belajar struktur dasar website menggunakan HTML5.",
      image: "/kelas/html.png",
      price: 0,
      isGratis: true,
      level: "Pemula",
      kelasUrl: "/kelas/html-dasar",
    },
    {
      id: 2,
      name: "CSS Fundamental",
      description: "Mendesain tampilan website modern dengan CSS.",
      image: "/kelas/css.png",
      price: 0,
      isGratis: true,
      level: "Pemula",
      kelasUrl: "/kelas/css-fundamental",
    },
    {
      id: 3,
      name: "JavaScript Dasar",
      description:
        "Memahami logika dan interaksi website menggunakan JavaScript.",
      image: "/kelas/javascript.png",
      price: 0,
      isGratis: true,
      level: "Pemula",
      kelasUrl: "/kelas/javascript-dasar",
    },
    {
      id: 4,
      name: "TypeScript Dasar",
      description: "Menulis JavaScript yang lebih aman dan terstruktur.",
      image: "/kelas/typescript.png",
      price: 0,
      isGratis: true,
      level: "Menengah",
      kelasUrl: "/kelas/typescript-dasar",
    },
    {
      id: 5,
      name: "MySQL Database",
      description: "Belajar mengelola database relasional dengan MySQL.",
      image: "/kelas/mysql.png",
      price: 0,
      isGratis: true,
      level: "Pemula",
      kelasUrl: "/kelas/mysql",
    },
    {
      id: 6,
      name: "Go Language Dasar",
      description: "Mengenal bahasa Go untuk backend yang cepat dan efisien.",
      image: "/kelas/go.png",
      price: 0,
      isGratis: true,
      level: "Menengah",
      kelasUrl: "/kelas/go-dasar",
    },
    {
      id: 7,
      name: "Bun Runtime",
      description: "Runtime JavaScript modern sebagai alternatif Node.js.",
      image: "/kelas/bun.png",
      price: 0,
      isGratis: true,
      level: "Menengah",
      kelasUrl: "/kelas/bun",
    },
    {
      id: 8,
      name: "PHP Dasar",
      description: "Belajar backend web menggunakan PHP.",
      image: "/kelas/php.png",
      price: 0,
      isGratis: true,
      level: "Pemula",
      kelasUrl: "/kelas/php-dasar",
    },

    // ===== BERBAYAR =====
    {
      id: 9,
      name: "React.js",
      description: "Membangun UI modern dengan React.js.",
      image: "/kelas/react.png",
      price: 150000,
      isGratis: false,
      level: "Menengah",
      kelasUrl: "/kelas/react",
    },
    {
      id: 10,
      name: "Next.js",
      description: "Framework React untuk aplikasi web production-ready.",
      image: "/kelas/nextjs.png",
      price: 200000,
      isGratis: false,
      level: "Menengah",
      kelasUrl: "/kelas/nextjs",
    },
    {
      id: 11,
      name: "MERN Stack",
      description: "Fullstack MongoDB, Express, React, dan Node.js.",
      image: "/kelas/mern.png",
      price: 300000,
      isGratis: false,
      level: "Lanjutan",
      kelasUrl: "/kelas/mern",
    },
    {
      id: 12,
      name: "Laravel",
      description: "Framework PHP modern untuk backend profesional.",
      image: "/kelas/laravel.png",
      price: 250000,
      isGratis: false,
      level: "Menengah",
      kelasUrl: "/kelas/laravel",
    },
    {
      id: 13,
      name: "Gin Framework (Go)",
      description: "Framework Go cepat untuk REST API.",
      image: "/kelas/gin.png",
      price: 200000,
      isGratis: false,
      level: "Lanjutan",
      kelasUrl: "/kelas/gin",
    },
  ];
  return (
    <section className="bg-white py-16" id="kelas">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Source Code Siap Pakai
          </h2>
          <p className="mt-3 text-slate-600">
            Hemat waktu development dengan source code rapi & reusable 🚀
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {kelasSections.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-800">
                  {item.name}
                </h3>

                <span className="mt-1 text-sm text-slate-500">
                  Level: {item.level}
                </span>

                <p className="mt-4 flex-grow text-sm text-slate-600">
                  {item.description}
                </p>

                {/* Price */}
                <div className="mt-4">
                  {item.isGratis ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      GRATIS
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={item.kelasUrl}
                  className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-white transition ${
                    item.isGratis
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-amber-600 hover:bg-amber-700"
                  }`}
                >
                  {item.isGratis ? "Download Source" : "Beli Source"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default menukelas;
