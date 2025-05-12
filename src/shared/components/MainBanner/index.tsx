import { Star } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import Customer1 from "@/shared/assets/client1.webp";
import Customer2 from "@/shared/assets/customer2.webp";
import Customer3 from "@/shared/assets/Customer3.jpg";
import Customer4 from "@/shared/assets/Customer4.webp";
import Customer5 from "@/shared/assets/Customer5.webp";

const MainBanner = () => {
  return (
    <>
      <div className="hidden lg:block bg-cover bg-center bg-no-repeat min-h-[82vh] rounded-xl bg-[url('@/shared/assets/main-banner-bg.png')]">
        <div className="flex flex-col justify-center items-end w-full min-h-[82vh] text-white p-4">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-2xl lg:text-3xl xl:text-5xl font-medium">
              Your{" "}
              <span
                className="bg-no-repeat"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #22c55ebe 75%, transparent 0)",
                  backgroundSize: "100% 75%",
                  backgroundPosition: "bottom",
                }}
              >
                Authentic
              </span>
              <br />
              Local & Distant
              <br /> Logistics Partner
            </h1>
            <p className="pt-4 opacity-75">
              Let us take care of packing & unpacking of your household goods,
              make your shifting smooth
            </p>
            <Button
              size="lg"
              className="bg-[#ffd70a] text-black hover:bg-[#ffd70a] mt-8"
            >
              Learn More
            </Button>
            <div className="flex flex-col xl:flex-row items-center justify-between flex-wrap gap-4 mt-8 xl:mt-12 p-4 bg-[#fff3] rounded-xl w-[85%]">
              <div className="flex flex-col items-center gap-2.5">
                <h2 className="text-xl lg:text-3xl font-extrabold">5000+</h2>
                <div className="flex -space-x-2">
                  <img
                    src={Customer1}
                    alt="Customer1"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <img
                    src={Customer2}
                    alt="Customer2"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <img
                    src={Customer3}
                    alt="Customer3"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <img
                    src={Customer4}
                    alt="Customer4"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <img
                    src={Customer5}
                    alt="Customer5"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      fill="#ffd70a"
                      stroke="#ffd70a"
                      size={22}
                    />
                  ))}
                </div>
                <p>Valuable Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-cover bg-center bg-no-repeat rounded-xl bg-[url('@/shared/assets/main-banner-mobile.jpg')] text-white px-8 py-12 flex place-content-center h-fit">
        <div>
          <h1 className="text-2xl lg:text-3xl xl:text-5xl font-medium">
            Your Authentic Local & Distant Logistics Partner
          </h1>
          <p className="pt-4 opacity-75">
            Let us take care of packing & unpacking of your household goods,
            make your shifting smooth
          </p>
          <Button
            size="lg"
            className="bg-[#ffd70a] text-black hover:bg-[#ffd70a] mt-8 self-start"
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export { MainBanner };
