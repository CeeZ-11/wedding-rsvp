import {
  Flame,
  LayoutGrid,
  Soup,
  CircleDashed,
  ThermometerSun,
  Shirt,
  Droplets,
  UtensilsCrossed,
  Utensils,
  Wind,
  Bed,
  Coffee,
  Zap,
  Circle,
  RefreshCw,
  Wand2,
} from 'lucide-react';

export interface GiftItem {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const GIFTS: GiftItem[] = [
  { id: 'air-fryer', name: 'Air Fryer', icon: Flame },
  { id: 'table', name: 'Table', icon: LayoutGrid },
  { id: 'rice-cooker', name: 'Rice Cooker', icon: Soup },
  { id: 'induction-cooker', name: 'Induction Cooker', icon: CircleDashed },
  { id: 'heater', name: 'Heater', icon: ThermometerSun },
  { id: 'steaming-iron', name: 'Steaming Iron', icon: Shirt },
  { id: 'water-dispenser', name: 'Water Dispenser', icon: Droplets },
  { id: 'cutlery-set', name: 'Cutlery Set', icon: UtensilsCrossed },
  { id: 'knives-set', name: 'Knives Set', icon: Utensils },
  { id: 'diffuser', name: 'Essential Oil Diffuser', icon: Wind },
  { id: 'bed-sheet', name: 'Bed Sheet', icon: Bed },
  { id: 'coffee-maker', name: 'Coffee Maker', icon: Coffee },
  { id: 'toaster', name: 'Toaster', icon: Zap },
  { id: 'frying-pan', name: 'Frying Pan', icon: Circle },
  { id: 'food-processor', name: 'Food Processor', icon: RefreshCw },
  { id: 'hand-mixer', name: 'Hand Mixer', icon: Wand2 },
];