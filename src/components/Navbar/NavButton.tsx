import Link from "next/link";

const NavButton = () => {
    return (
        <div>
            <Link
                href="/login"
                className="font-bold border-2 border-gray-700 py-2 px-4 rounded shadow-2xl"
            >
                Login
            </Link>
        </div>
    );
};

export default NavButton;
