import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import FeaturedCategories from '@/components/sections/FeaturedCategories';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCategories />
      <ProductShowcase />
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
