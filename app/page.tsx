import Contact from "@/components/Contact";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="flex min-h-[2220px] flex-col items-center justify-between py-24">
      <div className="flex rounded-3xl h-[512px] w-11/12 bg-primary p-12">
      <h1 className="text-black font-black sm:font-extrabold text-2xl sm:text-4xl md:text-5xl"
      >Découvrir Votre Style</h1>

      </div>
      <Contact/>
    </main>
  );
}
