import Link from "next/link";

interface FooterLinkProps {
  title: string;
  links: Array<{ name: string; path: string }>;
}

const FooterLinkSection = ({ title, links }: FooterLinkProps) => {
  return (
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      <ul className="mt-6 space-y-4 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="text-gray-700 transition hover:opacity-75"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterLink = () => {
  const footerSections = [
    {
      title: "Materi",
      links: [
        { name: "Pemula", path: "/services/coaching" },
        { name: "Menengah", path: "/services/company-review" },
        { name: "Mahir", path: "/services/accounts-review" },
        { name: "Mobile Developer", path: "/services/seo" },
        { name: "Fullstack Developer", path: "/services/hr-consulting" },
      ],
    },
    {
      title: "Masukan",
      links: [
        { name: "Kontak", path: "/kontak" },
        // { name: "Hubungi", path: "/faqs" },
        // { name: "Live Chat", path: "/chat" },
      ],
    },
    {
      title: "Souce Code",
      links: [
        { name: "PHP", path: "/legal/accessibility" },
        { name: "Laravel", path: "/legal/returns" },
        { name: "MERN", path: "/legal/refund" },
        { name: "Next JS", path: "/legal/hiring" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
      {footerSections.map((section) => (
        <FooterLinkSection
          key={section.title}
          title={section.title}
          links={section.links}
        />
      ))}
    </div>
  );
};

export default FooterLink;
