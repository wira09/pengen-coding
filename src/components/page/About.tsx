import Image from "next/image";
import Link from "next/link";

interface AboutSection {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  profileUrl: string;
}

const About = () => {
  const aboutSections: AboutSection[] = [
    {
      id: 1,
      name: "Mohamad Zaelani Wira Kusuma",
      role: "Founder",
      description:
        "Seorang mahasiswa yang menguasai pengembangan Web dan Android, terbiasa membangun aplikasi fungsional dengan tampilan responsif dan user-friendly.",
      image: "/foto/wira.jpeg",
      profileUrl: "https://portofolio-wira.vercel.app/",
    },
    {
      id: 2,
      name: "Farhan Kertadiwangsa",
      role: "Supporter",
      description:
        "Berpengalaman dalam pengembangan Web, Artificial Intelligence (AI), dan Python, fokus pada solusi Prompt AI dan otomatisasi sistem.",
      image: "/foto/farhan.jpeg",
      profileUrl: "https://www.farhankertadiwangsa.biz.id/",
    },
    {
      id: 3,
      name: "Ilham",
      role: "Promoter",
      description:
        "Memiliki keahlian di bidang pengembangan Web, berfokus pada pembuatan website yang efisien, modern, dan mudah digunakan.",
      image: "/foto/ilham.jpeg",
      profileUrl: "https://hamzzz.my.id",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
        {/* Title */}
        <div className="max-w-xl mb-12">
          <h1 className="text-4xl font-bold text-amber-600 sm:text-5xl">
            Tentang Kami
          </h1>
          <div className="ml-1 mt-3 h-1 w-32 rounded bg-amber-500" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutSections.map((item) => (
            <div key={item.id} className="h-full">
              <div
                key={item.name}
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 text-center">
                  <h4 className="text-xl font-semibold text-slate-800">
                    {item.name}
                  </h4>

                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <p className="px-3 py-1 text-sm font-medium rounded-full bg-amber-500 text-white">
                      {item.role}
                    </p>
                  </div>

                  <p className="mt-4 text-base text-slate-600 font-light">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={item.profileUrl}
                      target="_blank"
                      className="inline-block rounded-md bg-slate-800 px-6 py-2 text-sm font-medium text-white shadow transition hover:bg-slate-700"
                    >
                      Lihat Profil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
