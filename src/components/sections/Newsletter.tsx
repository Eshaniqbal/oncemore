"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      toast({
        title: "Subscribed!",
        description: "Thanks for joining our newsletter.",
      });
      setEmail('');
    } else {
        toast({
            title: "Error",
            description: "Please enter a valid email address.",
            variant: "destructive",
        })
    }
  };

  return (
    <section className="bg-primary/90 text-primary-foreground py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-3 text-lg text-primary-foreground/80 max-w-lg mx-auto md:mx-0">
              Be the first to know about new arrivals, exclusive offers, and the stories behind our pieces.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground flex-grow"
              aria-label="Email for newsletter"
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
