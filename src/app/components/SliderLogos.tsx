import Image from "next/image";
import { motion } from "framer-motion";

export default function SliderLogos() {
  const logos = [
    "/images/sliderLogo1.svg",
    "/images/sliderLogo2.svg",
    "/images/sliderLogo3.svg",
    "/images/sliderLogo4.svg",
    "/images/sliderLogo5.svg",
    "/images/sliderLogo1.svg",
    "/images/sliderLogo2.svg",
    "/images/sliderLogo3.svg",
    "/images/sliderLogo4.svg",
    "/images/sliderLogo5.svg",
    "/images/sliderLogo1.svg",
    "/images/sliderLogo2.svg",
    "/images/sliderLogo3.svg",
    "/images/sliderLogo4.svg",
    "/images/sliderLogo5.svg",
    "/images/sliderLogo1.svg",
    "/images/sliderLogo2.svg",
    "/images/sliderLogo3.svg",
    "/images/sliderLogo4.svg",
    "/images/sliderLogo5.svg",
    "/images/sliderLogo1.svg",
    "/images/sliderLogo2.svg",
    "/images/sliderLogo3.svg",
    "/images/sliderLogo4.svg",
    "/images/sliderLogo5.svg",
  ];

  return (
    <section className="md:px-6  my-24">
      <section className=" overflow-x-hidden flex gap-6 lg:container mx-auto">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex shrink-0  gap-6"
        >
          {logos.map((logo, index) => {
            return (
              <Image
                key={index}
                className="object-contain max-w-96 h-8 "
                src={logo}
                alt={`Logo ${index + 1}`}
                width={100}
                height={500}
              />
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex shrink-0 gap-6"
        >
          {logos.map((logo, index) => {
            return (
              <Image
                key={index}
                className="object-contain max-w-96 h-8 "
                src={logo}
                alt={`Logo ${index + 1}`}
                width={100}
                height={500}
              />
            );
          })}
        </motion.div>
      </section>
    </section>
  );
}
