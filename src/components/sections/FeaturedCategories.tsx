"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: "Timeless Tops",
    href: "#",
    imageSrc: "https://placehold.co/400x500.png",
    imageAlt: "A stylish top on a mannequin.",
    hint: "shirt woman"
  },
  {
    name: "Classic Bottoms",
    href: "#",
    imageSrc: "https://placehold.co/400x500.png",
    imageAlt: "Well-fitting trousers.",
    hint: "jeans"
  },
  {
    name: "Elegant Outerwear",
    href: "#",
    imageSrc: "https://placehold.co/400x500.png",
    imageAlt: "A stylish coat.",
    hint: "jacket woman"
  },
  {
    name: "Unique Accessories",
    href: "#",
    imageSrc: "https://placehold.co/400x500.png",
    imageAlt: "A handcrafted accessory.",
    hint: "scarf"
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find your next favorite piece from our carefully selected categories.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href} className="group text-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-secondary animate-in fade-in-0 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  data-ai-hint={category.hint}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-primary flex items-center justify-center gap-1 transition-transform group-hover:translate-x-1">
                Shop Now <ArrowRight className="w-4 h-4" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
