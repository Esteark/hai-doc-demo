import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-main-100">
      <section className="lg:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-4 mt-12">
          <article className="flex flex-col gap-4">
            <article className="flex flex-col gap-3 font-bold text-3xl md:text-5xl items-center lg:items-start ">
              <h2 className="text-primary-100 "> We Are Ready to</h2>
              <h2 className="text-transparent bg-clip-text bg-gradient-azul-derecha">
                Help Your Health
              </h2>
              <h2 className="text-primary-100"> Problems</h2>
            </article>
            <p className="text-gris-100 text-sm md:text-base leading-7 md:leading-9 text-center lg:text-start">
              In times like today, your health is very important, especially
              since the number of COVID-19 cases is increasing day by day, so we
              are ready to help you with your health consultation
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                text="Try Free Consultation"
                gradient="derecha"
                rounded="full"
              />
            </div>

            <section className="w-full flex flex-wrap gap-12 mt-8 justify-center lg:justify-start">
              <article className="flex flex-col gap-2">
                <h3 className=" font-bold text-3xl md:text-4xl flex gap-1 text-primary-100">
                  200
                  <span className=" text-primary-50 text-2xl md:text-3xl ">
                    +
                  </span>
                </h3>
                <p className="text-sm md:text-base text-gris-100">
                  Active <br />
                  Doctor
                </p>
              </article>
              <article className="flex flex-col gap-2">
                <h3 className=" font-bold text-3xl md:text-4xl flex gap-1 text-primary-100">
                  15K
                  <span className=" text-primary-50 text-2xl md:text-3xl ">
                    +
                  </span>
                </h3>
                <p className="text-sm md:text-base text-gris-100">
                  Active <br />
                  User
                </p>
              </article>
              <article className="flex flex-col gap-2 justify-center md:justify-start">
                <h3 className=" font-bold text-3xl md:text-4xl flex gap-1 text-primary-100">
                  50
                  <span className=" text-primary-50 text-2xl md:text-3xl ">
                    +
                  </span>
                </h3>
                <p className="text-sm md:text-base text-gris-100">
                  Active <br />
                  Pharmacy
                </p>
              </article>
            </section>
          </article>
        </section>
        <section className="relative flex justify-center items-center">
          <Image
            className="absolute top-0 right-0 w-full max-w-2xl  object-cover hidden    lg:block"
            src="/images/headerback-1.png"
            alt="Doctor image"
            width={500}
            height={200}
          />
          <Image
            className=" max-w-64 md:max-w-xl lg:max-w-2xl h-auto z-10"
            src="/images/headerback-2.png"
            alt="Background image"
            width={500}
            height={500}
          />
        </section>
      </section>
    </header>
  );
}
