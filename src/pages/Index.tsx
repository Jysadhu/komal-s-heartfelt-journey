import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import LoveMessage from "@/components/LoveMessage";
import MemoriesSection from "@/components/MemoriesSection";
import PhotoGallery from "@/components/PhotoGallery";
import SurpriseSection from "@/components/SurpriseSection";
import MusicPlayer from "@/components/MusicPlayer";
import BirthdayFooter from "@/components/BirthdayFooter";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <HeroSection />
      <CountdownSection />
      <LoveMessage />
      <MemoriesSection />
      <PhotoGallery />
      <SurpriseSection />
      <BirthdayFooter />
    </div>
  );
};

export default Index;
