"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { X, Minus, Plus } from 'lucide-react';
import { SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';

export function Cart() {
  const { cartItems, removeFromCart, updateItemQuantity, cartTotal, totalItems } = useCart();

  return (
    <>
      <SheetHeader className="pr-6">
        <SheetTitle className="font-headline text-2xl">
          Shopping Cart ({totalItems})
        </SheetTitle>
      </SheetHeader>
      
      {cartItems.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <p className="text-lg text-muted-foreground">Your cart is empty.</p>
          <Button asChild>
            <Link href="#shop">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-grow pr-6">
            <div className="flex flex-col gap-6 py-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex items-start gap-4">
                  <Link href={`/products/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  </Link>
                  <div className="flex flex-grow flex-col gap-1">
                    <Link href={`/products/${item.slug}`} className="font-semibold hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                    <p className="text-sm font-medium">₹{item.price.toLocaleString()}</p>
                    <div className="mt-2 flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItemQuantity(item.id, item.size, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateItemQuantity(item.id, item.size, parseInt(e.target.value, 10))}
                        className="mx-2 h-8 w-12 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItemQuantity(item.id, item.size, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id, item.size)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="flex-col gap-4 border-t bg-background px-6 pt-4 pb-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Button size="lg" className="w-full">
              Checkout
            </Button>
          </SheetFooter>
        </>
      )}
    </>
  );
}
