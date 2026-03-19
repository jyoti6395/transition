import { motion } from "framer-motion";

const features = [
  {
    title: "Data Bank",
    description:
      "Store your medical history in an encrypted vault and share it with doctors or labs only when you choose. Privacy and security, guaranteed.",
  },
  {
    title: "Ask me",
    description:
      "Ask Me provides 24/7 tailored advice powered by AI that knows your health data, plus access to on-call doctors when needed.",
  },
  {
    title: "Calendar",
    description:
      "Our smart calendar organizes your health tasks, appointments, and sends reminders so you never miss an important step.",
  },
  {
    title: "Reports",
    description:
      "Understand lab results, spot trends, and make informed decisions with AI-powered graphs and insights tailored to your health journey.",
  },
  {
    title: "Workouts & Events",
    description:
      "Get personalized fitness plans, fun challenges, and expert guidance to help transform your body and lifestyle.",
  },
  {
    title: "Insights",
    description:
      "Explore expert-backed tips, articles, and AI-driven recommendations tailored specifically to your needs.",
  },
];

const SuperAppSection = () => (
  <section className="bg-white py-20 px-4 md:px-8">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-body text-[59px] leading-[71px] font-medium text-[#090909] max-w-4xl mx-auto">
          The ALL-IN-ONE APP that helps to manage your Daily Health.
        </h2>
        <p className="mt-5 font-body text-base md:text-2xl text-[#2a2a2a]">
          Your partner in health - easy, safe, and always there when you need it.
        </p>
      </motion.div>

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto h-[680px] w-full max-w-[560px]"
        >

          <img
            src="/Images/iPhone 16 Pro.jpg"
            alt="DeHealth App Preview"
            className="absolute left-1/2 top-[120px] w-[420px] h-auto -translate-x-1/2 drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)] rounded-r-[30px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-base md:text-lg text-[#1f1f1f]"
        >
          <div className="rounded-[24px] bg-[#d8cadb] p-6 mb-5">
            <h3 className="text-xl md:text-2xl font-semibold text-[#151515]">Global Health ID</h3>
            <p className="mt-2 leading-relaxed">
              Keep all your medical records in one app, accessible anytime. Perfect for managing your health across clinics or while traveling.
            </p>
          </div>

          <div className="space-y-3 leading-relaxed">
            {features.map((feature) => (
              <div key={feature.title}>
                <h4 className="text-lg md:text-2xl font-semibold text-[#111111]">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SuperAppSection;
