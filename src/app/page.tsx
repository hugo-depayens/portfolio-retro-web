import Header from "@/components/Header";
import Drag from "@/components/Drag";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='h-[1000px]'>
        <Header/>
        <Drag/>
        <Experience/>
        <Footer/>
    </main>
  );
}