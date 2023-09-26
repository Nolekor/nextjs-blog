import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.jpg";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
                <Image
                    src={profileImg}
                    alt="Nicola Pellegrino"
                    className="w-full h-auto rounded-full"
                />
            </div>
            <span className="text-xl font-bold ">Nolekor</span>
        </Link>
    );
};
