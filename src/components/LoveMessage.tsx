import { motion } from "framer-motion";
import { Feather } from "lucide-react";

const LoveMessage = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Feather className="w-4 h-4 text-romantic-gold" />
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-12 italic">
          મારા <span className="gradient-text">દિલ</span>નો પત્ર
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 text-left space-y-6 border-romantic-gold/10">
          {[
            "મારી વ્હાલી કોમલ,",
            "આ ખાસ દિવસે, હું તને જણાવવા માંગુ છું કે તેં મારી દુનિયા કેટલી ઊંડાણથી બદલી નાખી છે. તારા પહેલાં, મારા દિવસો સામાન્ય હતા — પણ તેં એવા રંગોથી રંગી દીધા જે મેં ક્યારેય જોયા ન હતા. તારું દરેક સ્મિત એક સૂર્યોદય જેવું છે જે મારા હૃદયને હૂંફથી ભરી દે છે, તારું દરેક હાસ્ય મેં સાંભળેલી સૌથી મીઠી ધૂન છે.",
            "તું ફક્ત કોઈ એવી નથી જેને હું પ્રેમ કરું છું — તું મારી શાંતિ છે, મારું સુખ છે, સુંદર વસ્તુઓમાં વિશ્વાસ કરવાનું મારું કારણ છે. જ્યારે હું તારી સાથે હોઉં છું, ત્યારે આખી દુનિયા ઝાંખી પડી જાય છે અને જે બાકી રહે છે તે આપણી વચ્ચેનો જાદુ છે. તું સામાન્યને અસાધારણ બનાવે છે, અને અશક્યને શક્ય લાગે છે.",
            "હું તારી સાથે રહેવાનું વચન આપું છું — દરેક તોફાનમાં અને દરેક તડકામાં, દરેક આંસુમાં અને દરેક સ્મિતમાં. તું આખા બ્રહ્માંડને લાયક છે, અને હું દરરોજ તને બરાબર એ જ આપવાનો પ્રયત્ન કરીશ. જન્મદિવસ મુબારક, મારા પ્રેમ. આ વર્ષ તારા સુંદર આત્માને લાયક બધો આનંદ લાવે.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`font-body leading-relaxed text-base md:text-lg ${
                i === 0 ? "text-romantic-gold font-medium" : "text-foreground/80 font-light"
              }`}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="font-script text-3xl md:text-4xl gradient-text text-right mt-8 pt-4 border-t border-border"
          >
            કાયમ તારો ♥
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
