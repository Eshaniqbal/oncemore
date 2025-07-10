"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes.length === 1 ? product.sizes[0] : undefined);
  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  const { toast } = useToast();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must choose a size before adding to the cart.",
        variant: "destructive"
      });
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      slug: product.slug,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col-reverse md:flex-row gap-4">
           <div className="flex md:flex-col gap-2 justify-center">
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setMainImage(img)} className={`w-20 h-24 overflow-hidden rounded-md ${mainImage === img ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={80}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-grow">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={1000}
              className="w-full h-auto object-cover aspect-[4/5] rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-headline text-3xl font-bold md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-2xl text-primary font-medium">${product.price.toFixed(2)}</p>
          
          <Separator className="my-6" />

          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium">Size</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                 <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`${product.id}-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`${product.id}-${size}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-sm transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {size}
                    </Label>
                  </div>
              ))}
            </RadioGroup>
          </div>

          <Button size="lg" className="mt-8 w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <p><strong>Condition:</strong> {product.condition}</p>
            <p><strong>Origin:</strong> {product.origin}</p>
            <p><strong>Category:</strong> {product.category}, {product.gender}</p>
            <p><strong>Season:</strong> {product.season}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
