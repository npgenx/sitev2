import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat bg-bottom	bg-cover	">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Footer />
      </div>
    </main>
  );
}
