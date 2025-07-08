import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Image from "next/image";

export default function DoctorSlider() {
  const imagenes = [
    {
      src: "/images/slider1.webp",
      alt: "Doctor 1",
    },
    {
      src: "/images/slider2.webp",
      alt: "Doctor 2",
    },
    {
      src: "/images/slider3.webp",
      alt: "Doctor 3",
    },
    {
      src: "/images/slider4.webp",
      alt: "Doctor 4",
    },
    {
      src: "/images/slider5.webp",
      alt: "Doctor 5",
    },
    {
      src: "/images/slider6.webp",
      alt: "Doctor 6",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          pagination: true,
          arrows: true,
          gap: 0,
          autoplay: false,
        }}
      >
        {imagenes.map((imagen, index) => (
          <SplideSlide key={index}>
            <div className="flex justify-center items-center ">
              <Image
                src={imagen.src}
                alt={imagen.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover "
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <style jsx global>{`
        /* Flechas personalizadas */
        .splide__arrow {
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          color: #172048 !important;
          opacity: 1;
        }
        .splide__arrow:focus {
          ouline: none !important;
        }
        .splide__arrow:hover {
          background: #f8f9fa;
        }

        .splide__arrow--prev {
          left: -20px;
        }

        .splide__arrow--next {
          right: -20px;
        }

        /* Puntos de paginación */
        .splide__pagination {
          bottom: -4rem !important;
        }

        .splide__pagination__page {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: none !important;
          border: #172048 1px solid !important;
          border: none;
          margin: 0 4px;
          opacity: 1;
        }

        .splide__pagination__page.is-active {
          background: #172048 !important;
          transform: scale(1.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .splide__arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
