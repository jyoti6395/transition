import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const DEMO_VIDEO_SRC = "/videos/demo.mp4";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoDialog = (open: boolean) => {
    setIsVideoOpen(open);
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-24"
      style={{
        background: "#3D0642",
        backgroundImage: "url('/Images/hero-image.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#3D0642_0%,rgba(61,6,66,0.95)_20%,rgba(61,6,66,0.5)_50%,rgba(0,0,0,0)_75%)]"></div>

      <div className="relative z-10 w-full px-6 py-20 md:px-[84px] md:py-24">
        <div className="max-w-[760px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-[540px] font-ui text-[50px] md:text-[72px] font-medium tracking-[0px] text-white leading-[1.235] md:leading-[88.93px] mb-8"
          >
            Living Healthy,<br />
            Powered By AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-[758px] font-ui text-[28px] md:text-[32px] text-white mb-10 leading-[1.5] md:leading-[48px] font-normal"
          >
            Track meals, set smart goals, and get real-time<br />
            guidance from your AI assistant. All in one<br />
            seamless experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Dialog open={isVideoOpen} onOpenChange={handleVideoDialog}>
              <DialogTrigger asChild>
                <Button 
                  className="font-ui relative h-[172.8px] w-[295.2px] overflow-hidden rounded-[14px] border-[3px] border-[#D9D9D9] bg-white/40 text-white shadow-[0_0_4px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-white/45"
                >
                  <div className="absolute left-1/2 top-0 h-[48px] w-[72px] -translate-x-1/2 overflow-hidden rounded-b-[6px] opacity-85">
                    <img src="/Images/hero-image.jpg" alt="" className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-3 pt-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/10">
                      <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                    </div>
                    <span className="text-[40px] md:text-[42px] font-medium leading-none">View Demo</span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-5xl border-none bg-black p-0 [&>button]:text-white [&>button]:opacity-90">
                <video ref={videoRef} className="aspect-video w-full" controls autoPlay playsInline>
                  <source src={DEMO_VIDEO_SRC} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </DialogContent>
            </Dialog>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
