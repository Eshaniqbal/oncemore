"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function QuickView({ product, isOpen, onOpenChange }: QuickViewProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        variant: 'destructive',
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
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={800}
              className="rounded-lg object-cover aspect-[3/4]"
            />
          </div>
          <div className="flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl">{product.name}</DialogTitle>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl text-primary font-medium">₹{product.price.toLocaleString()}</p>
                {product.originalPrice && (
                  <p className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>
              <DialogDescription className="pt-4">{product.description}</DialogDescription>
            </DialogHeader>

            <div className="my-6">
              <h4 className="text-sm font-medium text-foreground">Size</h4>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="mt-2 flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`${product.id}-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`${product.id}-${size}`}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border text-sm transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <DialogFooter className="mt-auto">
              <Button type="button" size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
