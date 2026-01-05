import Image from "next/image";
import FooterLink from "@/components/Footer/FooterLink";

const Footer = () => {
    return (
        <div className="p-5 bg-gray-800 flex gap-5 justify-between ">
            <div className="flex flex-col gap-3">
                <Image
                    src="/pengen-coding.png"
                    alt="Pengen Coding"
                    width={120}
                    height={120}
                    className="object-cover object-center"
                />
                <div className="flex flex-col">
                    <p className="font-extrabold">
                        Berhenti Bermimpi, Mulai Membangun. Pengen Coding
                        membantu Anda menciptakan standar baru di dunia
                        digital.
                    </p>
                    <p className="font-normal">
                        Butuh bantuan atau ingin menyampaikan keluhan? Masukkan
                        email Anda di bawah, tim kami akan segera merespons
                        secara langsung.
                    </p>
                </div>
                <div className="flex gap-5 mt-3">
                    <input
                        type="email"
                        placeholder="Send Your Email"
                        required
                        className="bg-gray-600 text-white border border-gray-700 rounded p-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="bg-gray-600 rounded py-1 px-3 font-bold">
                        Send
                    </button>
                </div>
            </div>
            <FooterLink />
        </div>
    );
};

export default Footer;
