import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Heart, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <div className="space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left-12 duration-500">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Wear Stories, Not Trends
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Sustainable Style, Enduring Quality.
            </h1>
            <p className="text-lg text-muted-foreground md:pr-8">
              Explore a curated collection of high-quality vintage and sustainable fashion. Each piece is selected for its unique character and timeless appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#shop">
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#about">Learn Our Story</Link>
              </Button>
            </div>
             <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                    <span>Vintage & Pre-loved</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Sustainably Sourced</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Unique Finds</span>
                </div>
            </div>
          </div>
          <div className="w-full h-full animate-in fade-in slide-in-from-right-12 duration-500">
            <Image
              src="https://placehold.co/600x700.png"
              alt="A stylish person wearing sustainable fashion"
              data-ai-hint="woman model"
              width={600}
              height={700}
              className="rounded-lg object-cover shadow-xl aspect-[6/7] w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
