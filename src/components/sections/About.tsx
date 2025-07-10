import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Leaf, Recycle, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1 space-y-6 animate-in fade-in-0 slide-in-from-left-12 duration-500">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Philosophy</span>
              <h2 className="mt-1 font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Fashion with a Conscience
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              At OnceMore, we believe clothing is more than just fabric; it's a narrative. We are dedicated to circulating high-quality, pre-loved garments and creating new pieces from sustainable materials, each with a unique history and a future waiting to be written.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary">
                  <Recycle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Sustainable & Circular</h3>
                  <p className="text-muted-foreground">We extend the life of beautiful garments, reducing waste and promoting a circular fashion economy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Inspired by Nature</h3>
                  <p className="text-muted-foreground">Our collections draw inspiration from the rich textile heritage of Kashmir and the beauty of the natural world.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Crafted with Love</h3>
                  <p className="text-muted-foreground">Each piece is carefully selected or crafted, ensuring quality, style, and a story worth telling.</p>
                </div>
              </div>
            </div>
             <Button asChild size="lg" className="mt-4">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 animate-in fade-in-0 slide-in-from-right-12 duration-500">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Artisanal textile work"
              data-ai-hint="kashmiri textile"
              width={600}
              height={750}
              className="rounded-lg object-cover shadow-xl aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
