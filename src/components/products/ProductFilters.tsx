"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';

interface ProductFiltersProps {
  filters: {
    size: string;
    type: string;
    gender: string;
    season: string;
  };
  onFilterChange: (filterType: 'size' | 'type' | 'gender' | 'season', value: string) => void;
  onReset: () => void;
}

export default function ProductFilters({ filters, onFilterChange, onReset }: ProductFiltersProps) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
      <Select value={filters.size} onValueChange={(value) => onFilterChange('size', value)}>
        <SelectTrigger><SelectValue placeholder="Size" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sizes</SelectItem>
          <SelectItem value="S">Small</SelectItem>
          <SelectItem value="M">Medium</SelectItem>
          <SelectItem value="L">Large</SelectItem>
          <SelectItem value="XL">Extra Large</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filters.type} onValueChange={(value) => onFilterChange('type', value)}>
        <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="Tops">Tops</SelectItem>
          <SelectItem value="Bottoms">Bottoms</SelectItem>
          <SelectItem value="Outerwear">Outerwear</SelectItem>
          <SelectItem value="Accessories">Accessories</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filters.gender} onValueChange={(value) => onFilterChange('gender', value)}>
        <SelectTrigger><SelectValue placeholder="Gender" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Genders</SelectItem>
          <SelectItem value="Men">Men</SelectItem>
          <SelectItem value="Women">Women</SelectItem>
          <SelectItem value="Unisex">Unisex</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filters.season} onValueChange={(value) => onFilterChange('season', value)}>
        <SelectTrigger><SelectValue placeholder="Season" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Seasons</SelectItem>
          <SelectItem value="Spring/Summer">Spring/Summer</SelectItem>
          <SelectItem value="Autumn/Winter">Autumn/Winter</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={onReset} variant="outline" className="w-full">Reset</Button>
    </div>
  );
}
