"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      // Muestro navbar cuando se desplaza hacia arriba o está totalmente arriba
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 0);

      // reviso si está en el top (umbral de 10px)
      setIsAtTop(currentScrollY <= 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
        sticky  top-0  z-50 
        transition-all duration-300 ease-in-out px-6
       
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${isAtTop ? "bg-main-100 backdrop-blur-none" : "bg-white  "}
      `}
    >
      <div className="lg:container mx-auto flex justify-between items-center  py-4">
        <Link className="flex" href={"/"}>
          <h2 className="text-base lg:text-lg xl:text-2xl">
            Hai
            <span className="font-bold text-primary">Doc</span>
          </h2>
          <Image
            className="object-contain pb-3"
            src="/icons/iconPlus.svg"
            alt="Hai Doc icon plus"
            width={16}
            height={16}
          />
        </Link>
        <Button text="Register" gradient="derecha" rounded="full" />
      </div>
    </nav>
  );
}
