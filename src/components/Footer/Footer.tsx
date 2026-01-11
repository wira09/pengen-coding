import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-amber-600">
              <Image
                src="/pengen-coding.png"
                alt="Pengen Coding"
                width={120}
                height={120}
              />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 text-justify">
              Butuh bantuan atau ingin menyampaikan keluhan? Masukkan email Anda
              di kontak, tim kami akan segera merespons secara langsung.
            </p>
          </div>

          <FooterLink />
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}. Company Pengen Coding. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
