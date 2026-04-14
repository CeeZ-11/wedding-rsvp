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

export type GiftItem = {
  id: string;
  name: string;
  icon: React.ElementType;
};

export const GIFTS: GiftItem[] = [
  { id: 'g1', name: 'Air Fryer', icon: Flame },
  { id: 'g2', name: 'Table', icon: LayoutGrid },
  { id: 'g3', name: 'Rice Cooker', icon: Soup },
  { id: 'g4', name: 'Induction Cooker', icon: CircleDashed },
  { id: 'g5', name: 'Heater', icon: ThermometerSun },
  { id: 'g6', name: 'Steaming Iron', icon: Shirt },
  { id: 'g7', name: 'Water Dispenser', icon: Droplets },
  { id: 'g8', name: 'Cutlery Set', icon: UtensilsCrossed },
  { id: 'g9', name: 'Knives Set', icon: Utensils },
  { id: 'g10', name: 'Essential Oil Diffuser', icon: Wind },
  { id: 'g11', name: 'Bed Sheet', icon: Bed },
  { id: 'g12', name: 'Coffee Maker', icon: Coffee },
  { id: 'g13', name: 'Toaster', icon: Zap },
  { id: 'g14', name: 'Frying Pan', icon: Circle },
  { id: 'g15', name: 'Food Processor', icon: RefreshCw },
  { id: 'g16', name: 'Hand Mixer', icon: Wand2 },
];