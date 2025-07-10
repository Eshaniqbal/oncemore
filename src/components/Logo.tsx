import Link from 'next/link';
import { Recycle } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="OnceMore Home">
      <div className="p-1.5 bg-primary rounded-md group-hover:bg-primary/90 transition-colors">
         <Recycle className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-headline text-2xl font-bold text-foreground tracking-tight">
        OnceMore
      </span>
    </Link>
  );
}
