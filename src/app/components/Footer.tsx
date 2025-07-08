"use client";
import Image from "next/image";
import { ChevronRight } from "@deemlol/next-icons";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  id: string;
  title: string;
  items: { label: string; href: string }[];
}
export default function Footer() {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const dropdownData: DropdownItem[] = [
    {
      id: "find-teacher",
      title: "Find Teacher",
      items: [
        { label: "English Teachers", href: "/" },
        { label: "Chinese Teachers", href: "/" },
        { label: "French Teachers", href: "/" },
        { label: "Spanish Teachers", href: "/" },
        { label: "Other Teachers", href: "/" },
      ],
    },
    {
      id: "lessons",
      title: "Lessons",
      items: [
        { label: "Learn English", href: "/" },
        { label: "Learn Chinese", href: "/" },
        { label: "Learn French", href: "/" },
        { label: "Learn Spanish", href: "/" },
        { label: "Learn More Languages", href: "/" },
      ],
    },
    {
      id: "company",
      title: "Company",
      items: [
        { label: "About", href: "/" },
        { label: "How it Works", href: "/" },
        { label: "Term", href: "/terms" },
        { label: "Privacy Policy", href: "/" },
      ],
    },
    {
      id: "more",
      title: "More",
      items: [
        { label: "Documentation", href: "/" },
        { label: "License", href: "/" },
      ],
    },
  ];

  const toggleDropdown = (id: string): void => {
    const newOpenDropdowns = new Set(openDropdowns);
    if (newOpenDropdowns.has(id)) {
      newOpenDropdowns.delete(id);
    } else {
      newOpenDropdowns.add(id);
    }
    setOpenDropdowns(newOpenDropdowns);
  };

  const isOpen = (id: string): boolean => openDropdowns.has(id);

  return (
    <footer className="bg-main-100 p-6 py-12 text-primary-100 flex flex-col gap-12">
      <section className="max-w-full lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8">
        <article className="flex flex-col gap-6 lg:col-span-2  ">
          <h3 className=" font-semibold text-base   ">Tutorify</h3>

          <p className="text-sm font-normal leading-8">
            Learn more than just <br /> a language
          </p>

          <div className="flex gap-3 flex-wrap justify-start">
            <figure className="bg-[#dcf0f5] flex items-center justify-center rounded-full p-3">
              <Image
                className="object-cover w-4 h-4"
                src="/icons/iconGoogle.svg"
                alt="Facebook icon"
                width={24}
                height={24}
              />
            </figure>
            <figure className="bg-[#dcf0f5] flex items-center justify-center rounded-full p-3">
              <Image
                className="object-cover w-4 h-4"
                src="/icons/iconX.svg"
                alt="Facebook icon"
                width={24}
                height={24}
              />
            </figure>
            <figure className="bg-[#dcf0f5] flex items-center justify-center rounded-full p-3">
              <Image
                className="object-cover w-4 h-4"
                src="/icons/iconInsta.svg"
                alt="Facebook icon"
                width={24}
                height={24}
              />
            </figure>
            <figure className="bg-[#dcf0f5] flex items-center justify-center rounded-full p-3">
              <Image
                className="object-cover w-4 h-4"
                src="/icons/iconLinkedin.svg"
                alt="Facebook icon"
                width={24}
                height={24}
              />
            </figure>
          </div>
        </article>
        {dropdownData.map((dropdown) => (
          <ul key={dropdown.id} className="flex flex-col gap-6">
            <li
              className="font-semibold flex items-center gap-2 cursor-pointer text-base lg:cursor-auto"
              onClick={() => toggleDropdown(dropdown.id)}
            >
              {dropdown.title}
              <ChevronRight
                size={24}
                className={`text-primary-100 transition-transform lg:hidden ${
                  isOpen(dropdown.id) ? "rotate-90" : ""
                }`}
              />
            </li>

            <div
              className={`${
                isOpen(dropdown.id) ? "max-h-96" : "max-h-0"
              } lg:max-h-full flex flex-col gap-6 overflow-hidden transition-all duration-300 ease-in-out`}
            >
              {dropdown.items.map((item) => (
                <li key={item.href} className="text-sm font-normal">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </div>
          </ul>
        ))}
      </section>

      <p className="text-sm text-center font-semibold">
        Copyright © 2021. Created with love.
      </p>
    </footer>
  );
}
