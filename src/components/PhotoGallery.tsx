import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Camera } from "lucide-react";

const images = [
  { src: gallery1, alt: "Walking together", caption: "સાથે ચાલતાં ચાલતાં" },
  { src: gallery2, alt: "Celebration together", caption: "ઉજવણીના સુંદર પળો" },
  { src: gallery3, alt: "Together at sunset", caption: "તારી સાથે દરેક પળ ખાસ છે" },
  { src: gallery4, alt: "Together always", caption: "હંમેશા તારી સાથે" },
];

const PhotoGallery = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[180px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Camera className="w-4 h-4 text-romantic-gold" />
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground text-center mb-14 italic">
          પ્રેમની <span className="gradient-text">ગેલેરી</span>
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer border border-border hover:border-romantic-gold/30 transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-48 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="font-heading text-white text-lg italic">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
