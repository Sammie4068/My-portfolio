import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

const contactPage = () => {
    // const { toast } = useToast();
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Mail className="h-5 w-5" />
        Contact
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>
        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper y={0} scale={0.8}>

        <ContactForm />
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default contactPage;
