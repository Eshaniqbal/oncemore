import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden md:h-[90vh]">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Model wearing sustainable fashion in a beautiful landscape"
        data-ai-hint="fashion model"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-white animate-in fade-in duration-1000">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="mb-2 block font-semibold uppercase tracking-widest text-primary-foreground/80">
              Sustainable Style, Timeless Stories
            </span>
            <h1 className="font-headline text-5xl font-bold md:text-7xl leading-tight">
              Wear a Story, <br/> Not Just a Trend
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-prose text-primary-foreground/90">
              Discover our curated collection of vintage and sustainably-crafted pieces. Each item is chosen for its quality, character, and enduring style.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="#shop">
                  Explore the Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#about">Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
