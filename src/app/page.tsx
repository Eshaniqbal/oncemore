import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductShowcase />
      <About />
    </div>
  );
}
