import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1 animate-in fade-in-0 slide-in-from-left-12 duration-500">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At OnceMore, we believe clothing is more than just fabric; it's a narrative. We are dedicated to circulating high-quality, pre-loved garments and creating new pieces from sustainable materials, each with a unique history and a future waiting to be written.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Inspired by the rich textile heritage of Kashmir, our collections blend timeless craftsmanship with modern sensibilities. We champion a slower, more conscious approach to fashion, encouraging you to build a wardrobe that is both beautiful and kind to our planet.
            </p>
          </div>
          <div className="order-1 md:order-2 animate-in fade-in-0 slide-in-from-right-12 duration-500">
            <Image
              src="https://placehold.co/600x700"
              alt="Artisanal textile work"
              data-ai-hint="kashmiri textile"
              width={600}
              height={700}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
