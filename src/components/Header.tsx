"use client";

import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { useCart } from '@/contexts/CartContext';
import { Cart } from './cart/Cart';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { totalItems } = useCart();
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const renderNavLinks = () => (
    navLinks.map((link) => (
      <Button key={link.label} variant="ghost" asChild>
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ))
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center space-x-2 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
              <Cart />
            </SheetContent>
          </Sheet>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 pt-8">
                  <Logo />
                  <nav className="flex flex-col space-y-2">
                    {renderNavLinks()}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
