import QuoteFormImage from "../../assets/quote-form-image.webp";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";
import { RadioGroup, RadioGroupItem } from "../shadcn/ui/radio-group";

const QuoteForm = () => {
  return (
    <div>
      <img
        src={QuoteFormImage}
        alt="Image for Quote Form"
        className="rounded-2xl w-full"
      />
      <div className="flex flex-col gap-2 p-6 bg-white mt-4 rounded-2xl">
        <h1 className="text-xl text-center font-medium">
          Get a Moving <span className="text-primary">Quote</span>
        </h1>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <Input id="full-name" className="mt-2" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <Input id="date" className="mt-2" />
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <Input id="phone-number" className="mt-2" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" className="mt-2" autoComplete="email" />
        </div>
        <div className="flex flex-col items-center mt-2">
          <RadioGroup defaultValue="1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="r1" />
              <label htmlFor="r1">Instant Online Estimate</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="r2" />
              <label htmlFor="r2">In-Home Move Estimate</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="r3" />
              <label htmlFor="r3">Request a call back</label>
            </div>
          </RadioGroup>
        </div>
        <Button className="mt-4">Proceed</Button>
      </div>
    </div>
  );
};

export { QuoteForm };
