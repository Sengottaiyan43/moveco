import Service1 from "@/shared/assets/service1.webp";
import Service2 from "@/shared/assets/service2.webp";
import CardItem1 from "@/shared/assets/card-item-1.webp";
import CardItem2 from "@/shared/assets/card-item-2.webp";
import CardItem3 from "@/shared/assets/card-item-3.webp";
import CardItem4 from "@/shared/assets/card-item-4.webp";
import Image1 from "@/shared/assets/img1.webp";
import Image2 from "@/shared/assets/img2.webp";
import Image3 from "@/shared/assets/img3.webp";
import Image6 from "@/shared/assets/img6.webp";
import {
  DollarSign,
  HousePlus,
  NotebookText,
  Package,
  PackageOpen,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (window.innerWidth < 768 && contentRef.current && active !== 0) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  const handleClick = (idx: number) => {
    if (idx === active) {
      // If same item is clicked, manually scroll
      if (window.innerWidth < 768 && contentRef.current) {
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      setActive(idx);
    }
  };

  const services = [
    {
      title: "Online real-time quote",
      image: Image1,
      content:
        "Our advanced real-time move quotation software allows you to create binding quotations just by specifying the inventory you want to move and their locations. It is that simple — in minutes you get your quotation number along with all binding documents, sent directly to your inbox.",
    },
    {
      title: "Schedule a free In-Home Estimate",
      image: Image2,
      content:
        "You can easily schedule a free In-Home Estimate for your upcoming move. Our moving specialists will visit your home, conduct a thorough walk-through, address any questions or concerns, assess your inventory, and calculate an on-the-spot quote before leaving.",
    },
    {
      title: "Moving Supplies",
      image: Image3,
      content:
        "When you plan a move, you certainly want to keep your possessions safe and organized. Boxes, packing material, moving safety material & all the rest of moving supplies are also sold here in our online shop.",
    },
    {
      title: "Storage Services",
      image: Service2,
      content:
        "We provide short-term and long-term storage options in climate-controlled facilities. Whether you need storage while transitioning or for long-term security, our solutions are flexible and safe.",
    },
    {
      title: "Professional Packing",
      image: Image6,
      content:
        "Our trained professionals ensure your belongings are packed with utmost care using high-quality materials. This reduces the risk of damage during transport and makes your move easier.",
    },
  ];

  return (
    <div className="w-full h-full">
      <section className="px-8 h-[60vh]">
        <div className="bg-cover bg-center bg-no-repeat rounded-xl h-full bg-[url('@/shared/assets/about-us-banner.webp')]">
          <div className="flex items-center justify-center w-full h-full text-2xl lg:text-5xl text-white text-center">
            <h1>
              Wanna Know More <span className="text-yellow-400">About Us?</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="bg-[#f2f2f2] w-full px-8 py-12 lg:py-18 rounded-b-3xl">
          <div className="flex justify-center lg:justify-between items-center">
            <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
              About Us
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 font-normal mt-8">
            <h1 className="text-3xl lg:text-6xl text-center lg:text-start lg:w-[40%]">
              What Do We Do In <span className="text-primary">MoveCo?</span>
            </h1>
            <p className="text-lg lg:text-2xl text-center lg:text-end lg:w-[40%]">
              For more than 100 years experience, We move coast to coast under
              our own authority.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-4 lg:mt-8">
            <img src={Service1} alt="Service1" className="rounded-xl" />
            <div className="flex flex-col lg:block items-center">
              <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
                Our Mission
              </div>
              <p className="text-xl lg:text-3xl mt-4 text-center lg:text-start">
                We aim to impress you with our service so much that you'll share
                our business cards with your friends and colleagues, post your
                text and video testimonials on our website, and choose us for
                your next move.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-6 lg:mt-8">
            <div className="flex flex-col lg:block items-center">
              <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
                Licenses
              </div>
              <p className="text-xl lg:text-3xl mt-4">
                What does BBB and SMA membership mean for you? It ensures MoveCo
                follows strict ethical standards and gives you access to
                arbitration or mediation if you're ever dissatisfied, protecting
                your rights as a customer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="px-6 py-10 bg-white flex flex-col justify-between items-center gap-16 rounded-xl">
                <h4 className="underline text-primary text-xl text-center">
                  Licensed With
                </h4>
                <img src={CardItem1} alt="CardItem1" width={260} height={260} />
                <img src={CardItem2} alt="CardItem2" width={140} height={140} />
              </div>
              <div className="px-6 py-10 bg-white flex flex-col justify-between items-center gap-16 rounded-xl">
                <h4 className="underline text-primary text-xl text-center">
                  Membership with
                </h4>
                <img src={CardItem3} alt="CardItem3" width={180} height={180} />
                <img src={CardItem4} alt="CardItem4" width={120} height={120} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-6 lg:mt-8">
            <img src={Service2} alt="Service1" className="rounded-xl" />
            <div className="flex flex-col lg:block items-center">
              <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
                Testimonials
              </div>
              <p className="text-xl lg:text-3xl mt-4 text-center lg:text-start">
                Our online testimonial board goes a step further. You can post
                your moving experience for our future customers to see, you can
                also go to our website & see over 10 years of customer reviews.
                Our crews make the difference. We conduct background checks and
                random drug tests.
              </p>
              <div className="text-primary border-1 border-primary px-8 py-2 w-fit rounded-full text-xl cursor-pointer hover:bg-primary hover:text-white text-center mt-6">
                View all
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-center lg:justify-between items-center">
              <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
                Features
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 font-normal mt-8">
              <h1 className="text-3xl lg:text-6xl text-center lg:text-start lg:w-[45%]">
                What Do You Get When You{" "}
                <span className="text-primary">Choose Us?</span>
              </h1>
              <p className="text-lg lg:text-2xl text-center lg:text-end lg:w-[40%]">
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <Package color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  Moving the furniture where you want it in each room
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <DollarSign color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  All man power, fuel, truck, trailer, pad and equipment costs
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <HousePlus color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  House policy to repair or replace items damage in the move
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <PackageOpen color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  $40,000 Standard cargo insurance
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <Settings color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  Your consumer rights with the BBB & SMA
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <ShieldCheck color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  2 Million General liability insurance
                </p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <NotebookText color="white" size={60} />
                </div>
                <p className="text-center text-2xl">Bond worth of $50,000</p>
              </div>

              <div className="px-12 py-10 flex flex-col gap-6 items-center bg-white border-1 border-gray-400 rounded-2xl">
                <div className="p-8 bg-primary w-fit rounded-full">
                  <Wrench color="white" size={60} />
                </div>
                <p className="text-center text-2xl">
                  Free disassembly and reassembly of your house items
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="lg:col-span-1 rounded-2xl divide-y">
                {services.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleClick(idx)}
                    className={`w-full border-b-0 text-left p-4 text-lg font-medium transition-all duration-200 hover:bg-gray-50 ${
                      active === idx
                        ? "border-l-4  border-green-700 bg-gray-50 text-green-700"
                        : "pl-6"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              <div ref={contentRef} className="transition-opacity duration-300">
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="rounded-2xl w-full"
                />
                <h3 className="text-xl font-semibold text-green-700 mt-4">
                  {services[active].title}
                </h3>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {services[active].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { AboutUs };
