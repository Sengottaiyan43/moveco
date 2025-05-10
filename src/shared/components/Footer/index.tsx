import Instagram from "@/shared/assets/instagram.svg";
import Facebook from "@/shared/assets/facebook.svg";
import Youtube from "@/shared/assets/youtube.svg";
import Twitter from "@/shared/assets/twitter.svg";
import MoveCo from "@/shared/assets/moveco.webp";

const Footer = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[50%] flex flex-col items-center lg:items-start">
          <img src={MoveCo} alt="MoveCo" className="lg:hidden" />
          <h1 className="text-3xl">MoveCo.Net</h1>
          <p className="mt-4 text-lg text-center lg:text-start">
            21439 Crescent Ave Lewisville TX 75057 <br />
            (972) 250-1100 (817) 380-5398 <br />
            Toll Free: (800) 590-0928
          </p>
          <div className="mt-8 lg:mt-12 grid grid-cols-4 gap-4">
            <div
              className="p-2 border-1 border-white rounded-full cursor-pointer"
              title="Instagram"
            >
              <img src={Instagram} alt="Instagram" width={20} height={20} />
            </div>
            <div
              className="p-2 border-1 border-white rounded-full cursor-pointer"
              title="YouTube"
            >
              <img src={Youtube} alt="Youtube" width={20} height={20} />
            </div>
            <div
              className="p-2 border-1 border-white rounded-full cursor-pointer"
              title="X"
            >
              <img src={Twitter} alt="X" width={20} height={20} />
            </div>
            <div
              className="p-2 border-1 border-white rounded-full cursor-pointer"
              title="Facebook"
            >
              <img src={Facebook} alt="Facebook" width={20} height={20} />
            </div>
          </div>
        </div>
        <div>
          <img src={MoveCo} alt="MoveCo" className="hidden lg:block" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mt-8">
          <p>&copy; 2025 MoveCo. All rights reserved.</p>
        </div>
        <div className="hidden lg:flex gap-4 mt-8">
          <p className="px-2 cursor-pointer">Terms of service</p>
          <div className="border-r-1 border-white h-6"></div>
          <p className="cursor-pointer">Privacy Policy</p>
          <div className="border-r-1 border-white h-6"></div>
          <p className="cursor-pointer">Cookies Policy</p>
          <div className="border-r-1 border-white h-6"></div>
          <p className="cursor-pointer">Compliance</p>
          <div className="border-r-1 border-white h-6"></div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
