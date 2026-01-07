import Image from "next/image";
import Link from "next/link";

interface CodeSection {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  isGratis: boolean;
  level: string;
  kelasUrl: string;
}

/* ===== DATA SOURCE CODE ===== */
const codeSections: CodeSection[] = [
  // ===== GRATIS =====
  {
    id: 1,
    name: "HTML Dasar",
    description: "Source code HTML5 siap pakai, rapi & mudah dipahami.",
    image: "/kelas/html.png",
    price: 0,
    isGratis: true,
    level: "Pemula",
    kelasUrl: "/source/html",
  },
  {
    id: 2,
    name: "CSS Fundamental",
    description: "Template CSS modern dengan struktur clean code.",
    image: "/kelas/css.png",
    price: 0,
    isGratis: true,
    level: "Pemula",
    kelasUrl: "/source/css",
  },
  {
    id: 3,
    name: "JavaScript Dasar",
    description: "Source JS untuk logic dasar website interaktif.",
    image: "/kelas/javascript.png",
    price: 0,
    isGratis: true,
    level: "Pemula",
    kelasUrl: "/source/javascript",
  },

  // ===== PREMIUM =====
  {
    id: 9,
    name: "React.js Starter",
    description: "Source code React.js siap dikembangkan untuk project.",
    image: "/kelas/react.png",
    price: 150000,
    isGratis: false,
    level: "Menengah",
    kelasUrl: "/source/react",
  },
  {
    id: 10,
    name: "Next.js Full App",
    description: "Next.js App Router + struktur production-ready.",
    image: "/kelas/nextjs.png",
    price: 200000,
    isGratis: false,
    level: "Menengah",
    kelasUrl: "/source/nextjs",
  },
  {
    id: 11,
    name: "MERN Stack",
    description: "Fullstack MERN lengkap (Auth, CRUD, API).",
    image: "/kelas/mern.png",
    price: 300000,
    isGratis: false,
    level: "Lanjutan",
    kelasUrl: "/source/mern",
  },
  {
    id: 12,
    name: "Laravel Backend",
    description: "Backend Laravel clean architecture + auth.",
    image: "/kelas/laravel.png",
    price: 250000,
    isGratis: false,
    level: "Menengah",
    kelasUrl: "/source/laravel",
  },
];

/* ===== COMPONENT ===== */
const MenuCode = () => {
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
          {codeSections.map((item) => (
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

export default MenuCode;
