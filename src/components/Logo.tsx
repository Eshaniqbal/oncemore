import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 20"
        className="h-6 w-auto fill-current text-primary"
        aria-label="OnceMore Logo"
      >
        <text
          x="0"
          y="15"
          fontFamily="Playfair Display, serif"
          fontSize="20"
          fontWeight="bold"
        >
          OnceMore
        </text>
      </svg>
    </Link>
  );
}
