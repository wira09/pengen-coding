import Image from "next/image";
import NavMenu from "@/components/Navbar/NavMenu";
import NavButton from "@/components/Navbar/NavButton";

const Navbar = () => {
    return (
        <div className="bg-gray-800 w-full flex justify-between py-3 px-5 items-center">
            <div className="">
                <Image
                    src="/pengen-coding.png"
                    alt="Pengen Coding"
                    height={80}
                    width={80}
                    className="object-cover object-center"
                />
            </div>
            <NavMenu />
            <NavButton />
        </div>
    );
};

export default Navbar;
