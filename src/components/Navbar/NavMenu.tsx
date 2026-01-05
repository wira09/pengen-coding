import Link from "next/link";

const NavMenu = () => {
    const navLink = [
        { name: "Home", path: "/" },
        { name: "Course", path: "/course" },
        { name: "Pricing", path: "/pricing" },
        {name: "Dashboard", path: "/dashboard"},
        {name: "Contact", path: "/contact"}
    ];

    return (
        <div className="flex gap-4">
            {navLink.map(link => (
                <Link
                    key={link.name}
                    href={link.path}
                    className="font-bold bg-gray-900 py-2 px-4 rounded shadow-2xl"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default NavMenu;
