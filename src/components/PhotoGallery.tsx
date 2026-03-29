import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import { Camera } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    src: gallery1,
    alt: "Couple walking hand in hand along a palm-lined path",
    caption: "Every step together, hand in hand",
  },
  {
    src: gallery2,
    alt: "Couple standing together in a courtyard with palm trees",
    caption: "Quiet moments — just us and the open sky",
  },
  {
    src: gallery3,
    alt: "Couple in traditional dress with a temple in the background",
    caption: "Blessed to stand beside you, today and always",
  },
  {
    src: gallery4,
    alt: "Couple arm in arm on a wide path with palms",
    caption: "Side by side on every road that leads us home",
  },
  {
    src: gallery5,
    alt: "Couple laughing together under a tree",
    caption: "Your laugh — my favourite place in the world",
  },
  {
    src: gallery6,
    alt: "Couple in festive lavender attire with yellow celebration décor",
    caption: "Dressed for forever — celebrating us, celebrating love",
  },
  {
    src: gallery7,
    alt: "Couple in festive lehenga and kurta on a decorated red carpet",
    caption: "Our colours, our joy — the aisle of our sweetest memories",
  },
];

const PhotoGallery = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <section className="py-24 px-0 overflow-hidden relative" style={{ background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.03), transparent)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] radial-glow-primary pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Camera className="w-5 h-5 text-primary" />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground text-center mb-16 italic drop-shadow-md">
          Gallery of <span className="gradient-text">Love</span>
        </h2>

        {/* SWIPER 3D SLIDER */}
        <div className="w-full max-w-[100vw] px-4 md:px-0 mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ el: '.custom-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full pt-10 pb-20"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="w-[280px] md:w-[450px] aspect-[9/16] pb-12">
                <div 
                  className="w-full h-full relative group rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-[800ms] slide-content"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle vignette for professional photo feel */}
                  <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
                  
                  {/* Premium internal caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-700 flex flex-col justify-end p-6 border-b border-primary/20 caption-overlay">
                    <p className="font-heading text-white text-lg md:text-2xl italic leading-snug drop-shadow-md transform translate-y-6 transition-transform duration-700 caption-text">
                      {img.caption}
                    </p>
                    <div className="h-1 w-12 bg-primary mt-4 rounded-full origin-left scale-x-0 transition-transform duration-700 delay-150 caption-line" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Minimalist Pagination Container underneath */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 custom-pagination !w-auto flex items-center justify-center gap-3 z-50"></div>
          </Swiper>
        </div>
      </motion.div>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 p-4 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[75vh] md:max-h-[80vh] aspect-[9/16] rounded-sm shadow-2xl object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center max-w-2xl px-4"
              >
                <p className="text-foreground/80 font-heading text-lg md:text-2xl font-light tracking-widest uppercase text-sm">
                  {selectedImg.caption}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global Swiper Overrides for Professional Editorial Look */}
      <style>{`
        .swiper-slide {
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Inactive Slides: Grayscale, blurred, faded, no interaction */
        .swiper-slide:not(.swiper-slide-active) {
          filter: grayscale(100%) blur(2px);
          opacity: 0.4;
          pointer-events: none;
        }

        /* Active Slide: Full color, bright, sharp */
        .swiper-slide-active {
          filter: grayscale(0%) blur(0px);
          opacity: 1;
          z-index: 10;
        }

        /* Show gorgeous internal caption only on active slide */
        .swiper-slide-active .caption-overlay {
          opacity: 1;
        }
        .swiper-slide-active .caption-text {
          transform: translateY(0);
        }
        .swiper-slide-active .caption-line {
          transform: scaleX(1);
        }

        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 150%);
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
