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
      role: "Web Developer & Mentor",
      description: "Berpengalaman dalam pengembangan aplikasi web...",
      image: "/foto/wira.jpeg",
      profileUrl: "/profile/wira",
    },
    {
      id: 2,
      name: "Mohamad Zaelani Wira Kusuma",
      role: "Web Developer & Mentor",
      description: "Berpengalaman dalam pengembangan aplikasi web...",
      image: "/foto/wira.jpeg",
      profileUrl: "/profile/wira",
    },
    {
      id: 3,
      name: "Mohamad Zaelani Wira Kusuma",
      role: "Web Developer & Mentor",
      description: "Berpengalaman dalam pengembangan aplikasi web...",
      image: "/foto/wira.jpeg",
      profileUrl: "/profile/wira",
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
            <div key={item.id}>
              <div
                key={item.name}
                className="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
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
                  <div className="flex flex-wrap gap-2 justify-center">
                    <p className="px-3 py-1 text-sm font-medium rounded-full bg-amber-500 text-white">
                      {item.role}
                    </p>
                  </div>

                  <p className="mt-4 text-base text-slate-600 font-light">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-6">
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
