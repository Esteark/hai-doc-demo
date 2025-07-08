import Image from "next/image";

export default function Services() {
  const features = [
    {
      image: "/icons/doctor.svg",
      title: "Chat with doctor",
      paragraph:
        "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      image: "/icons/medicine.svg",
      title: "Health Store",
      paragraph:
        "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment.",
    },
    {
      image: "/icons/hospital.svg",
      title: "Visit Hospitals",
      paragraph:
        "Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save t",
    },
  ];

  return (
    <section className=" px-6 my-16">
      <section className="lg:container mx-auto flex flex-col gap-8">
        <h2 className="font-bold text-2xl md:text-4xl items-center lg:items-start text-transparent bg-clip-text bg-gradient-azul-derecha_secondary text-center">
          <span className="text-primary-100">Our </span>
          Main Services
          <span className="text-primary-100">
            <br />
            Categories
          </span>
        </h2>
        <section className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 items-center text-center group duration-500 cursor-pointer p-6 py-8 rounded-lg relative shadow-md "
            >
              <div className="bg-gradient-azul-arriba w-full h-full absolute top-0 left-0 max-h-0 group-hover:max-h-[500px] duration-500 rounded-lg"></div>
              <figure className="bg-white rounded-full p-8 flex items-center justify-center z-10">
                <Image
                  className="object-contain w-16 h-16 md:w-24 md:h-24 z-10"
                  src={feature.image}
                  alt={feature.title}
                  width={64}
                  height={64}
                />
              </figure>
              <h3 className="text-lg font-bold text-primary-100 group-hover:text-white duration-500 z-10">
                {feature.title}
              </h3>
              <p className="text-sm text-gris-100 group-hover:text-white duration-500 z-10">
                {feature.paragraph}
              </p>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
