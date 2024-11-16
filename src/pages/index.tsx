import Hero from "./hero";
import Sobre from "./sobre";
import Produtos from "./produtos";
import Sales from "./sales";
import Footer from "./footer";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between font-sans'>
      <Hero/>
      <Sobre/>
      <Produtos/>
      <Sales/>
      <Footer/>
    </main>
  );
}
