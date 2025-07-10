import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Wear Stories, Not Trends. Curated vintage and sustainable fashion with Kashmiri inspiration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Shop</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">New Arrivals</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Tops</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Bottoms</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">About</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#about" className="text-muted-foreground hover:text-primary">Our Story</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Sustainability</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Return Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Shipping</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OnceMore. All Rights Reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Twitter className="h-5 w-5 text-muted-foreground" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Facebook className="h-5 w-5 text-muted-foreground" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Instagram className="h-5 w-5 text-muted-foreground" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
