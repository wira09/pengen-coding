import Image from "next/image";
import Link from "next/link";
import TextType from "@/animation/TextType";

interface DashboardLinkProps {
  title: string;
  links: Array<{ name: string; path: string }>;
}

const Dashboard = ({ title, links }: DashboardLinkProps) => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
            <TextType
              text={["Coding", "Jago", "Sepuh"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-amber-600 ml-3"
            />
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Berhenti Bermimpi, Mulai Membangun. Pengen Coding membantu Anda
            menciptakan standar baru di dunia digital.
          </p>

          <div className="mt-6 flex gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`inline-block rounded px-5 py-3 font-medium shadow-sm transition-colors ${
                  link.name === "Mulai Belajar"
                    ? "border border-amber-600 bg-amber-600 text-white hover:bg-white hover:text-amber-600"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/page.svg"
            alt="Pengen Coding"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
