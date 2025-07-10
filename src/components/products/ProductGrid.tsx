"use client";

import ProductCard from './ProductCard';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={product.id} className="animate-in fade-in-0 duration-500" style={{ animationDelay: `${index * 50}ms` }}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <div className="col-span-full py-12 text-center">
          <p className="text-lg text-muted-foreground">No products match the current filters.</p>
        </div>
      )}
    </div>
  );
}
