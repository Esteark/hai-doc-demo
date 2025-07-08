import Image from "next/image";
import Button from "./Button";
import DoctorSlider from "./DoctorSlider";

export default function OurDoctors() {
  return (
    <section className="px-6 bg-main-100 ">
      <section className="lg:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
        <article className="flex justify-center items-center w-full">
          <article className="flex flex-col gap-3">
            <h3 className="text-sm text-mainDark-100 font-semibold text-center lg:text-start">
              Our Doctors
            </h3>
            <h2 className="font-bold text-2xl md:text-3xl items-center lg:items-start text-transparent bg-clip-text bg-gradient-azul-derecha_secondary text-center lg:text-start">
              Qualified Doctors
            </h2>
            <p className="text-gris-100 text-sm md:text-base text-center lg:text-start leading-7 md:leading-9">
              Handled directly by general doctors and professional <br /> and
              experienced specialists doctors.
            </p>

            <Image
              className="object-contain w-64  md:w-96  mx-auto lg:mx-0"
              src="/images/imageProm.png"
              alt="Doctor"
              width={500}
              height={500}
            />

            <div className="flex justify-center md:pr-4 ">
              <Button
                text="View All Doctors"
                gradient="derecha"
                rounded="full"
              />
            </div>
          </article>
        </article>
        <DoctorSlider />
      </section>
    </section>
  );
}
