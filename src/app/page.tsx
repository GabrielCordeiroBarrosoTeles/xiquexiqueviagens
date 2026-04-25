import Hero from "@/components/Hero";
import Destinos from "@/components/Destinos";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import InstagramFeed from "@/components/InstagramFeed";
import ODS from "@/components/ODS";

export default function Home() {
  return (
    <main>
      <Hero />
      <Destinos />
      <ComoFunciona />
      <ODS />
      <Depoimentos />
      <InstagramFeed />
    </main>
  );
}
