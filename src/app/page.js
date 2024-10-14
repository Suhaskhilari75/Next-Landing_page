import  Hero from "../app/component/Hero/page"
import NewProducts from '../app/component/NewProducts/page'
import Testimonials from '../app/component/Testimonials/page'

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
