import { headLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 md:py-10">
      <div>
        <Link href='/' className="flex items-center gap-3">
          <Image src="/logo.png" height={30} width={30} alt="" />
          <h1 className="font-bold">Travlog</h1>
        </Link>
      </div>
      <div className="md:flex hidden gap-8 text-sm text-neutral-500 font-medium">
        {headLinks.map((item, index) => (
          <Link
            key={item.label}
            href={item.url}
            className={`hover:text-black transition ${
              index === 0 ? "font-bold text-black" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:flex hidden gap-4 text-sm">
        <button className="font-medium">Login</button>
        <button className="bg-theme text-white px-6 py-2 rounded-3xl font-semibold">
          Sign Up
        </button>
      </div>
      <div className="block md:hidden">
        <button title="Menu" className="border p-2 bg-neutral-800 rounded-lg">
          <GiHamburgerMenu className="text-white text-xl"/>
        </button>
      </div>
    </header>
  );
}
