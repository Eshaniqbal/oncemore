import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden md:h-[80vh]">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Kashmiri landscape"
        data-ai-hint="kashmir landscape"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white animate-in fade-in duration-1000">
        <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="font-headline text-5xl font-bold md:text-7xl">
            OnceMore
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Wear Stories, Not Trends
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#shop">Explore the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
