import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const links = ["About", "Articles", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 px-4">
        <a href="#" className="flex items-center">
          <img 
            src="/Images/Frame 1116606590.png" 
            alt="The Transition Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </a>

        <div className="hidden md:flex items-center justify-center gap-10 justify-self-center">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-ui text-[15px] lg:text-[17px] font-medium text-white hover:text-gray-200 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex justify-self-end">
          <Button
            variant="hero"
            className="font-ui h-14 rounded-full bg-[#3D0642] px-10 text-[16px] font-medium text-white hover:bg-[#3D0642]/90"
          >
            Get the App <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <button className="justify-self-end text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#3D0642] backdrop-blur-md border-t border-white/10 p-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-ui block py-2 text-base font-medium text-white hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button variant="hero" className="font-ui h-14 w-full rounded-full bg-[#3D0642] text-lg font-medium text-white hover:bg-[#3D0642]/90">
            Get the App
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
