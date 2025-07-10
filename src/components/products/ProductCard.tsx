"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import QuickView from './QuickView';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <Card className="group relative w-full overflow-hidden rounded-lg border-0 shadow-none hover:shadow-xl transition-shadow duration-300">
        <Link href={`/products/${product.slug}`}>
          <div className="overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint={`${product.category} ${product.gender}`}
              width={600}
              height={800}
              className="h-auto w-full object-cover aspect-[3/4] transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <Button
            variant="secondary"
            onClick={() => setIsQuickViewOpen(true)}
            aria-label={`Quick view ${product.name}`}
           >
            <Eye className="mr-2 h-4 w-4" />
            Quick View
          </Button>
        </div>
        <CardContent className="p-4 bg-background">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-headline text-lg font-medium leading-tight text-foreground truncate">{product.name}</h3>
          </Link>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-md text-primary font-semibold">₹{product.price.toLocaleString()}</p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <QuickView product={product} isOpen={isQuickViewOpen} onOpenChange={setIsQuickViewOpen} />
    </>
  );
}
