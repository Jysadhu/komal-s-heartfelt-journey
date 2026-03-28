import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, alt: "Rose petals", caption: "Beautiful like you 🌹" },
  { src: gallery2, alt: "Romantic sunset", caption: "Our colors 🌅" },
  { src: gallery3, alt: "Heart lights", caption: "My heart for you 💖" },
  { src: gallery4, alt: "Flower bouquet", caption: "For you, always 💐" },
  { src: gallery5, alt: "Starry night", caption: "You're my universe ✨" },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-5xl gradient-text text-center mb-14">
          Gallery of Love 📸
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`relative group rounded-2xl overflow-hidden glow-effect cursor-pointer ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-romantic-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-script text-primary-foreground text-lg">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
