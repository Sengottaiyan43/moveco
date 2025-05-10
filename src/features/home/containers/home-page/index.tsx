import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/shadcn/ui/accordion";
import { ImageWithTextCard } from "@/shared/components/ImageWithTextCard";
import { MainBanner } from "@/shared/components/MainBanner";
import { QuoteForm } from "@/shared/components/QuoteForm";
import PackagingBox from "@/shared/assets/packaging.webp";
import Service from "@/shared/assets/service3.webp";
import Client1 from "@/shared/assets/client1.webp";
import YTLogo from "@/shared/assets/yt-logo.svg";
import Truck from "@/shared/assets/truck2.webp";
import YT1 from "@/shared/assets/yt1.webp";
import YT2 from "@/shared/assets/yt2.webp";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* --- Main Banner and Quote Form --- */}
      <section className="lg:flex lg:justify-between gap-6 px-8">
        <div className="lg:w-[70%]">
          <MainBanner />
        </div>
        <div className="lg:w-[30%] pt-6 pb-6 lg:pt-0">
          <QuoteForm />
        </div>
      </section>

      {/* --- Our Services --- */}
      <section className="bg-white w-full px-8 py-12 lg:py-18 rounded-t-3xl">
        <div className="flex justify-between items-center">
          <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
            Our Services
          </div>
          <div className="text-primary border-1 border-primary px-8 py-2 w-fit rounded-full text-xl cursor-pointer hover:bg-primary hover:text-white text-center">
            View all
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 font-normal mt-8">
          <h1 className="text-3xl lg:text-6xl text-center lg:text-start lg:w-[40%]">
            Things That Will Be Taken{" "}
            <span className="text-primary">Care Of</span>
          </h1>
          <p className="text-lg lg:text-2xl text-center lg:text-end lg:w-[40%]">
            Let us take care of packing and unpacking of your household goods,
            while keep your entire moving plan hassle free.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-6 mt-8">
          <ImageWithTextCard
            imgUrl={Truck}
            altText="truck2"
            heading="Professional Transport Service"
            content="Transport your households to desired destination"
          />
          <ImageWithTextCard
            imgUrl={PackagingBox}
            altText="PackagingBox"
            heading="Packing & Unpacking Services"
            content="Pack & unpack your home items safe & professionally"
          />
          <ImageWithTextCard
            imgUrl={Service}
            altText="Service"
            heading="Professional Transport Service"
            content="Transport your households to desired destination"
          />
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="w-full px-8 py-12 lg:py-18">
        <div className="flex justify-between items-center">
          <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
            Testimonials
          </div>
          <div className="text-primary border-1 border-primary px-8 py-2 w-fit rounded-full text-xl cursor-pointer hover:bg-primary hover:text-white text-center">
            View all
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 font-normal mt-8">
          <h1 className="text-3xl lg:text-6xl text-center lg:text-start lg:w-[40%]">
            What <span className="text-primary">Our Clients</span> Think About
            Us?
          </h1>
          <p className="text-lg lg:text-2xl text-center lg:text-end lg:w-[40%]">
            Read testimonials from satisfied clients, sharing their experiences
            and successes with our services.
          </p>
        </div>
        <div className="mt-8">
          <div className="grid lg:grid-cols-2 gap-6 h-[500px] lg:h-[450px]">
            <div
              className="flex items-center justify-center bg-cover bg-no-repeat bg-center rounded-2xl"
              style={{ backgroundImage: `url(${YT1})` }}
            >
              <img
                src={YTLogo}
                alt="Logo for Youtube"
                className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]"
              />
            </div>
            <div
              className="flex items-center justify-center bg-cover bg-no-repeat bg-center rounded-2xl"
              style={{ backgroundImage: `url(${YT2})` }}
            >
              <img
                src={YTLogo}
                alt="Logo for Youtube"
                className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src={Client1}
                  alt="Client1"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="text-2xl font-medium">Shreya Goshal</h1>
                  <p className="text-lg text-gray-500">New York</p>
                </div>
              </div>
              <p className="mt-4">
                We've used MOVECO.net multiple times, both our home moves & our
                office move. I Highly recommend them!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src={Client1}
                  alt="Client1"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="text-2xl font-medium">Shreya Goshal</h1>
                  <p className="text-lg text-gray-500">New York</p>
                </div>
              </div>
              <p className="mt-4">
                We've used MOVECO.net multiple times, both our home moves & our
                office move. I Highly recommend them!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src={Client1}
                  alt="Client1"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="text-2xl font-medium">Shreya Goshal</h1>
                  <p className="text-lg text-gray-500">New York</p>
                </div>
              </div>
              <p className="mt-4">
                We've used MOVECO.net multiple times, both our home moves & our
                office move. I Highly recommend them!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="bg-black">
        <div className="bg-white w-full px-8 py-12 lg:py-18 rounded-b-3xl">
          <div className="flex justify-center lg:justify-start items-center">
            <div className="bg-primary text-white px-8 py-2 w-fit rounded-full text-xl text-center">
              FAQs
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 font-normal mt-8">
            <h1 className="text-3xl lg:text-6xl text-center lg:text-start lg:w-[40%]">
              <span className="text-primary">Having Doubts? </span>
              <br />
              We got you covered!
            </h1>
            <p className="text-lg lg:text-2xl text-center lg:text-end lg:w-[40%]">
              Here are the list of some frequently asked questions from people,
              to help you understand more about our service
            </p>
          </div>
          <Accordion type="multiple" className="w-full mt-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg lg:text-2xl">
                How do I get a quote for my move?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                Get a free quote by filling out our online form or calling us
                today!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg lg:text-2xl">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                We proudly serve all over UK and surrounding areas—contact us to
                see if we cover your location!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg lg:text-2xl">
                Are you licensed and insured?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                Yes, we are fully licensed and insured for your peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg lg:text-2xl">
                Do you provide packing services?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                Yes, we offer professional packing services to make your move
                easier.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg lg:text-2xl">
                Can I pack my own belongings?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                Yes, you're welcome to pack your own belongings if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-6 text-xl font-medium">
            Still have more questions? Contact our{" "}
            <span className="underline text-primary cursor-pointer">
              help center.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
