import Link from "next/link";

interface PriceSection {
  id: number;
  paket: string;
  kalangan: string;
  price: string;
  title: string;
  stack: string;
  descriptions: string[];
  limit: string;
}

const Price = () => {
  const priceSection: PriceSection[] = [
    {
      id: 1,
      paket: "Pemula",
      kalangan: "Pelajar / Umum",
      price: "20K",
      title: "Basic Web / Fullstack Fundamental",
      stack: "HTML, CSS, JavaScript",
      descriptions: [
        "Pengenalan dasar web development",
        "Struktur HTML & semantic",
        "Styling dengan CSS",
        "Dasar JavaScript (Logic, DOM, & API)",
        "Mini project website statis",
      ],
      limit: "Lifetime access",
    },
    {
      id: 2,
      paket: "Sepuh",
      kalangan: "Pelajar / Umum",
      price: "50K",
      title: "Fullstack MERN",
      stack: "MariaDB, Express.js, React.js, Node.js",
      descriptions: [
        "Backend dengan Node.js & Express",
        "REST API & JWT Authentication",
        "MariaDB + Prisma",
        "Frontend React (Hooks & State)",
        "Fullstack real project",
      ],
      limit: "Lifetime access",
    },
    {
      id: 3,
      paket: "Jago",
      kalangan: "Pelajar / Umum",
      price: "50K",
      title: "PHP Fullstack (Laravel)",
      stack: "Laravel, MariaDB / PostgreSQL, Tailwind CSS",
      descriptions: [
        "Dasar PHP & MVC",
        "Laravel routing & controller",
        "CRUD Database",
        "Auth & Role User",
        "Final project aplikasi web",
      ],
      limit: "Lifetime access",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-amber-600 sm:text-5xl">
            Paket Pelatihan
          </h1>
          <div className="mt-3 h-1 w-32 rounded bg-amber-500" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {priceSection.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-amber-500">
                {item.paket}
              </h3>
              <p className="mb-4 text-gray-600">{item.kalangan}</p>

              <div className="mb-4">
                <span className="text-5xl font-bold text-gray-900">
                  {item.price}
                </span>
                <span className="ml-2 text-gray-600">/ {item.limit}</span>
              </div>

              <p className="mb-4 text-sm text-gray-500">
                <b>Stack:</b> {item.stack}
              </p>

              <ul className="mb-8 space-y-3">
                {item.descriptions.map((desc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {desc}
                  </li>
                ))}
              </ul>

              <Link
                href={`/daftar?paket=${item.paket}`}
                className="block w-full rounded-lg bg-amber-600 py-3 text-center font-semibold text-white transition hover:bg-amber-700"
              >
                Daftar Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
