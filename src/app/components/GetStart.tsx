import Button from "./Button";

export default function GetStart() {
  return (
    <section className="bg-main-100 py-16 px-6">
      <section className="flex flex-col items-center justify-center gap-6 p-6 bg-white rounded-lg lg:container mx-auto px-6 py-16  shadow-sm ">
        <h2 className="font-bold text-3xl md:text-5xl items-center lg:items-start text-transparent bg-clip-text bg-gradient-azul-derecha_secondary text-center lg:text-start">
          <span className="text-primary-100">Get </span>
          started with <span className="font-normal">Hai</span>Doc
        </h2>

        <p className="text-gris-100 text-sm md:text-base text-center leading-7 md:leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi
          tristique libero <br /> urna sem vitae. Viverra facilisis rhoncus et,
          nibh nullam vitae laoreet.
        </p>
        <Button text="Lets Get Started" gradient="derecha" rounded="full" />
      </section>
    </section>
  );
}
