'use client';
 import Image from "next/image";
 import { useRouter }  from "next/router";

 const Logo = () => {
    const router = useRouter();
    
    return (
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="50"
            width="50"
            src="/Untitled_Artwork.png"
        />
        )
}

export default Logo;