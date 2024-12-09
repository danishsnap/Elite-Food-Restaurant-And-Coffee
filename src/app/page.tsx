import Header from "@/components/Header";
import Hero from "@/components//Hero";
import About from "@/components/About";
import Whyus from "@/components/Whyus";
import Food from "@/components/Food";
import Clients from "@/components/Clients";
import Menu from "@/components/Menu";
import Meet from "@/components/Meet";
import Testimonials from "@/components/Testimonials";
import Active from "@/components/Active"
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Food />
      <Whyus />
      <Clients />
      <Menu />
      <Meet />
      <Testimonials />
      <Active />
      <Blog />
      <Footer />
      <Footer2 />
    </div>
  )
}