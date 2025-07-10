"use client";

import { useState } from 'react';
import { products } from '@/lib/products';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';
import type { Product } from '@/lib/types';

type Filters = {
  size: string;
  type: string;
  gender: string;
  season: string;
};

export default function ProductShowcase() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<Filters>({
    size: 'all',
    type: 'all',
    gender: 'all',
    season: 'all',
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: Filters) => {
    let tempProducts = [...products];

    if (currentFilters.size !== 'all') {
      tempProducts = tempProducts.filter(p => p.sizes.includes(currentFilters.size));
    }
    if (currentFilters.type !== 'all') {
      tempProducts = tempProducts.filter(p => p.category === currentFilters.type);
    }
    if (currentFilters.gender !== 'all') {
      tempProducts = tempProducts.filter(p => p.gender === currentFilters.gender || p.gender === 'Unisex');
    }
    if (currentFilters.season !== 'all') {
      tempProducts = tempProducts.filter(p => p.season === currentFilters.season);
    }

    setFilteredProducts(tempProducts);
  };
  
  const resetFilters = () => {
    const initialFilters = {
      size: 'all',
      type: 'all',
      gender: 'all',
      season: 'all',
    };
    setFilters(initialFilters);
    setFilteredProducts(products);
  };

  return (
    <section id="shop" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Curated Collection
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Discover timeless pieces, each with a story to tell.
          </p>
        </div>
        <ProductFilters filters={filters} onFilterChange={handleFilterChange} onReset={resetFilters} />
        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  );
}
