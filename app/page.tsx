import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const destinations = [
    {
      imageUrl: "/image6.jpg",
      mainText: "Paradise Beach, Bantayan Island",
      price: "$550.16",
      place: "Rome, Italy",
      stars: "4.8",
    },
    {
      imageUrl: "/image6.jpg",
      mainText: "Ocean with full of Colors",
      price: "$20.99",
      place: "Maldives",
      stars: "4.5",
    },
    {
      imageUrl: "/image6.jpg",
      mainText: "Mountain View, Above the cloud",
      price: "$150.99",
      place: "United Arab Emirates",
      stars: "5.0",
    },
  ];

  return (
    <>
      <main>
        <section className="min-h-screen flex flex-col mt-[2rem]">
          <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
            <div>
              <h1 className="md:text-6xl font-bold max-w-[30rem] leading-[4rem] text-center md:text-start text-5xl">
                Travel <span className="bg-clip-text text-transparent bg-gradient-to-t from-pink-400 to-pink-700"> top destination </span>{" "}
                of the world
              </h1>
              <p className="mt-10 text-neutral-500 text-center">
                We always make our customer happy by providing as many choices
                as possible
              </p>
              <div className="flex flex-col md:flex-row gap-6 mt-10 text-sm justify-center lg:justify-normal">
                <button className="px-6 py-4 rounded-3xl shadow-lg bg-theme text-white font-bold hover:scale-95 hover:shadow-none transition">
                  Get Started
                </button>
                <button className="px-6 py-4 border rounded-3xl shadow-lg font-semibold flex gap-4 items-center justify-center hover:shadow-none hover:scale-95 transition">
                  <span className="text-lg">
                    <FaCirclePlay />
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/heroImage.png"
                height={500}
                width={500}
                alt="Hero Image"
              />
            </div>
          </div>
          <div className="flex flex-wrap px-2 gap-10 items-center justify-center md:justify-between mt-10 lg:mt-[9rem]">
            <Image src="/icon1.png" height={100} width={100} alt="" />
            <Image src="/icon2.png" height={100} width={100} alt="" />
            <Image src="/icon3.png" height={100} width={100} alt="" />
            <Image src="/icon4.png" height={100} width={100} alt="" />
            <Image src="/icon5.png" height={100} width={100} alt="" />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between my-10 flex-col md:flex-row text-center md:text-start">
            <div className="mb-8">
              <h2 className="text-pink-500 font-semibold tracking-widest">
                TOP DESTINATION
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold mt-3">
                Explore top destination
              </h1>
            </div>
            <div className="flex justify-between md:justify-start gap-8">
              <button
                title="arrow"
                className="p-8 border rounded-full hover:bg-theme hover:text-white text-xl transition"
              >
                <IoIosArrowRoundBack />
              </button>
              <button
                title="arrow"
                className="p-8 border rounded-full hover:bg-theme hover:text-white text-xl transition"
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {destinations.map((item) => (
              <Link
                key={item.mainText}
                href=""
                className="rounded-3xl overflow-hidden shadow-lg relative group"
              >
                <Image
                  src={item.imageUrl}
                  height={300}
                  width={300}
                  alt="image1"
                />
                <div className="absolute bottom-0 w-full bg-white py-6 px-4 group-hover:translate-y-full transition duration-500">
                  <div className="flex justify-between font-bold gap-4">
                    <h2>{item.mainText}</h2>
                    <p>{item.price}</p>
                  </div>
                  <p className="my-3 font-medium">{item.place}</p>
                  <div className="flex gap-3 items-center font-bold text-orange-500">
                    <p>{item.stars}</p>
                    <span>
                      <FaStar />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
