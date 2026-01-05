import Link from "next/link";

const FooterLink = () => {
  const footLink = [
    { name: "Dashboard", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Contact", path: "/contact" },
  ];

  const footPp = [
    { name: "Privacy", path: "/" },
    { name: "Policy", path: "/course" },
    { name: "Service", path: "/contact" },
  ];

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-1 items-center">
        <p className="font-bold">Pages</p>
        {footLink.map((link) => (
          <Link key={link.name} href={link.path} className="font-medium">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="font-bold">Terms</p>
        {footPp.map((link) => (
          <Link key={link.name} href={link.path} className="font-medium">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
