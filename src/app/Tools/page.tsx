import Image from "next/image";
import Link from "next/link";
import { toolsSections } from "./tools";
import Marquee from "./marquee";

const Tools = () => {
  return (
    <div>
        {/* 1.Ke kiri */}
      <Marquee repeat={3} pauseOnHover duration={60} className="w-full">
        <div className="flex items-center gap-6">
          {toolsSections.map((t) => (
            <Link
              key={t.name}
              href={t.kelasURL}
              className="inline-flex min-w-40 flex-col items-center gap-2 rounded-md border border-gray-200 p-3 shadow-sm bg-white"
            >
              <Image
                src={t.iconURL}
                alt={t.name}
                width={48}
                height={48}
                className="rounded"
              />
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
      {/* 2. ke kanan */}
      <Marquee repeat={3} pauseOnHover reverse duration={60} className="w-full">
        <div className="flex items-center gap-6 mt-4">
          {toolsSections.map((t) => (
            <Link
              key={t.name}
              href={t.kelasURL}
              className="inline-flex min-w-40 flex-col items-center gap-2 rounded-md border border-gray-200 p-3 shadow-sm bg-white"
            >
              <Image
                src={t.iconURL}
                alt={t.name}
                width={48}
                height={48}
                className="rounded"
              />
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
      {/* 3. kiri */}
      <Marquee repeat={3} pauseOnHover duration={60} className="w-full">
        <div className="flex items-center gap-6 mt-4">
          {toolsSections.map((t) => (
            <Link
              key={t.name}
              href={t.kelasURL}
              className="inline-flex min-w-40 flex-col items-center gap-2 rounded-md border border-gray-200 p-3 shadow-sm bg-white"
            >
              <Image
                src={t.iconURL}
                alt={t.name}
                width={48}
                height={48}
                className="rounded"
              />
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Tools;
