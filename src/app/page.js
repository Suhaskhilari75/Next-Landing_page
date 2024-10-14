import  Hero from "./component/Hero/hero"
import NewProducts from './component/NewProducts/newproducts'
import Testimonials from './component/Testimonials/testimonials'

export default function Home() {
  return (
    <>
    <main>
      <Hero/>
        <NewProducts/>
        <Testimonials/>

    </main>
    </>
  );
}
