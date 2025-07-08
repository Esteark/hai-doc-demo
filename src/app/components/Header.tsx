import Button from "./Button";
import { motion, Variants } from "framer-motion";

export default function Header() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const bounceItem: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const fadeDown: Variants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <header className="flex justify-between items-center p-6 bg-main-100">
      <section className="lg:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-4 mt-12">
          <article className="flex flex-col gap-4">
            <motion.article
              className="flex flex-col gap-3 font-bold text-3xl md:text-5xl items-center lg:items-start"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h2 variants={item} className="text-primary-100">
                We Are Ready to
              </motion.h2>
              <motion.h2
                variants={item}
                className="text-transparent bg-clip-text bg-gradient-azul-derecha"
              >
                Help Your Health
              </motion.h2>
              <motion.h2 variants={item} className="text-primary-100">
                Problems
              </motion.h2>
            </motion.article>
            <motion.p
              className="text-gris-100 text-sm md:text-base leading-7 md:leading-9 text-center lg:text-start"
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              custom={0}
            >
              In times like today, your health is very important, especially
              since the number of COVID-19 cases is increasing day by day, so we
              are ready to help you with your health consultation
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start"
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              custom={1}
            >
              <Button
                text="Try Free Consultation"
                gradient="derecha"
                rounded="full"
              />
            </motion.div>

            <motion.section
              className="w-full flex flex-wrap gap-12 mt-8 justify-center lg:justify-start"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  number: "200",
                  label: "Active Doctor",
                },
                {
                  number: "15K",
                  label: "Active User",
                },
                {
                  number: "50",
                  label: "Active Pharmacy",
                },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  variants={bounceItem}
                  className="flex flex-col gap-2"
                >
                  <h3 className="font-bold text-3xl md:text-4xl flex gap-1 text-primary-100">
                    {item.number}
                    <span className="text-primary-50 text-2xl md:text-3xl">
                      +
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-gris-100">
                    {item.label.split(" ")[0]} <br />
                    {item.label.split(" ")[1]}
                  </p>
                </motion.article>
              ))}
            </motion.section>
          </article>
        </section>
        <section className="relative flex justify-center items-center">
          <motion.img
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="absolute top-0 right-0 w-full max-w-xl object-cover hidden lg:block"
            src="/images/headerback-1.png"
            alt="Doctor image"
            width={500}
            height={200}
          />

          <div className="flex justify-center items-end">
            <motion.img
              initial="hidden"
              animate="show"
              variants={fadeDown}
              className="max-w-64 md:max-w-96 h-auto z-10 xl:translate-y-20 xl:translate-x-12"
              src="/images/headerback-2.png"
              alt="Background image"
              width={500}
              height={500}
            />
          </div>
        </section>
      </section>
    </header>
  );
}
