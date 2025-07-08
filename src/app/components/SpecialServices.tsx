import Image from "next/image";
import Button from "./Button";

export default function SpecialServices() {
  const services = [
    {
      title: "Covid-19 Test",
      icon: "ícono de prueba de Covid-19",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
      src: "/icons/covid-test.svg",
    },
    {
      title: "Herbal Supplement",
      icon: "ícono de suplemento herbal",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
      src: "/icons/supplement.svg",
    },
    {
      title: "Laboratorium Test",
      icon: "ícono de prueba de laboratorio",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
      src: "/icons/flask.svg",
    },
    {
      title: "Menstruation Calendar",
      icon: "ícono de calendario de menstruación",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
      src: "/icons/schedule.svg",
    },
  ];

  return (
    <section className="px-6 my-16">
      <section className="lg:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure className="w-full flex justify-center">
          <Image
            className="object-cover max-w-64 md:max-w-96 h-full rounded-lg"
            width={500}
            height={500}
            src="/images/doctormainContent.png"
            alt="Special Service Doctor Image"
          />
        </figure>

        <section className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-4xl items-center lg:items-start text-transparent bg-clip-text bg-gradient-azul-derecha_secondary text-center">
            <span className="text-primary-100 text-center">Our </span>
            Special Services
          </h2>
          <p className=" text-base text-gris-100 leading-9 text-center md:text-start">
            In times like today, your health is very important, especially since
            the number of COVID-19 cases is increasing day by day, so we are
            ready to help you with your health consultation
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="flex flex-col gap-4 items-center text-center md:text-start md:items-start group duration-500  p-6 py-8 rounded-lg relative shadow-md"
              >
                <Button
                  icon={
                    <img
                      src={service.src}
                      alt={service.icon}
                      className="w-8 h-8 object-contain"
                    />
                  }
                  rounded="md"
                />
                <h3 className="text-lg font-bold text-primary-100 ">
                  {service.title}
                </h3>
                <p className="text-sm text-gris-100 ">{service.text}</p>
              </article>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}
