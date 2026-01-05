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
      title: "Services",
      links: [
        { name: "1on1 Coaching", path: "/services/coaching" },
        { name: "Company Review", path: "/services/company-review" },
        { name: "Accounts Review", path: "/services/accounts-review" },
        { name: "HR Consulting", path: "/services/hr-consulting" },
        { name: "SEO Optimisation", path: "/services/seo" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Meet the Team", path: "/team" },
        { name: "Accounts Review", path: "/accounts" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
        { name: "Live Chat", path: "/chat" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Accessibility", path: "/legal/accessibility" },
        { name: "Returns Policy", path: "/legal/returns" },
        { name: "Refund Policy", path: "/legal/refund" },
        { name: "Hiring-3 Statistics", path: "/legal/hiring" },
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
