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
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] radial-glow-primary pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Camera className="w-5 h-5 text-primary" />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground text-center mb-14 italic">
          Gallery of <span className="gradient-text">Love</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImg(img)}
              className="relative group rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(225,29,72,0.15)] transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full aspect-[9/16] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="font-heading text-white text-sm md:text-lg italic leading-snug">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[75vh] md:max-h-[85vh] aspect-[9/16] rounded-lg shadow-2xl object-cover border border-primary/20 glow-effect bg-black/10"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white mt-6 font-heading text-xl md:text-3xl italic font-light drop-shadow-lg text-center px-2"
              >
                {selectedImg.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
