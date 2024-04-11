import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { footCompany, footContact, footMeet } from "../data/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row md:items-center justify-between gap-10 my-10 bg-white border-t pt-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" height={30} width={30} alt="" />
          <h1 className="font-bold">Travlog</h1>
        </div>
        <p className="text-neutral-500 font-medium text-sm max-w-[40rem] leading-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-6">
          <Link href="/" className="p-2 bg-theme text-white rounded-full">
            <FaFacebook />
          </Link>
          <Link href="/" className="p-2 bg-theme text-white rounded-full">
            <FaTwitter />
          </Link>
          <Link href="/" className="p-2 bg-theme text-white rounded-full">
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-[7rem]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Company</h1>
          {footCompany.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Contact</h1>
          {footContact.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Meet Us</h1>
          {footMeet.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
