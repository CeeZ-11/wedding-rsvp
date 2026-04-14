import { useState } from 'react';
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

type GiftItem = {
  id: string;
  name: string;
  icon: React.ElementType;
  taken?: boolean;
};

const GIFTS: GiftItem[] = [
  { id: 'g1', name: 'Air Fryer', icon: Flame },
  { id: 'g2', name: 'Table', icon: LayoutGrid },
  { id: 'g3', name: 'Rice Cooker', icon: Soup },
  { id: 'g4', name: 'Induction Cooker', icon: CircleDashed },
  { id: 'g5', name: 'Heater', icon: ThermometerSun, taken: true },
  { id: 'g6', name: 'Steaming Iron', icon: Shirt },
  { id: 'g7', name: 'Water Dispenser', icon: Droplets },
  { id: 'g8', name: 'Cutlery Set', icon: UtensilsCrossed},
  { id: 'g9', name: 'Knives Set', icon: Utensils },
  { id: 'g10', name: 'Essential Oil Diffuser', icon: Wind },
  { id: 'g11', name: 'Bed Sheet', icon: Bed },
  { id: 'g12', name: 'Coffee Maker', icon: Coffee },
  { id: 'g13', name: 'Toaster', icon: Zap },
  { id: 'g14', name: 'Frying Pan', icon: Circle },
  { id: 'g15', name: 'Food Processor', icon: RefreshCw},
  { id: 'g16', name: 'Hand Mixer', icon: Wand2 },
];

export function GiftRegistry() {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

  return (
    <div className="w-full mt-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl text-deep-olive mb-2">
          Gift Registry{' '}
          <span className="text-lg italic text-deep-olive/50">(Optional)</span>
        </h3>
        <p className="font-serif text-deep-olive/60 text-sm max-w-md mx-auto">
          Your presence is the greatest gift. If you wish, you may select one item below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GIFTS.map((gift) => {
          const isSelected = selectedGift === gift.id;
          const isTaken = gift.taken;
          const Icon = gift.icon;

          return (
            <button
              key={gift.id}
              type="button"
              disabled={isTaken}
              onClick={() =>
                setSelectedGift(isSelected ? null : gift.id)
              }
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
                ${
                  isTaken
                    ? 'bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed'
                    : isSelected
                    ? 'bg-light-sage/30 border-deep-olive shadow-md scale-[1.02]'
                    : 'bg-white border-muted-sage/30 hover:border-muted-sage hover:shadow-sm hover:-translate-y-0.5'
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  p-3 rounded-full mb-3 transition-colors
                  ${
                    isTaken
                      ? 'bg-gray-200 text-gray-400'
                      : isSelected
                      ? 'bg-deep-olive text-white'
                      : 'bg-light-sage/20 text-deep-olive'
                  }
                `}
              >
                <Icon size={22} strokeWidth={1.5} />
              </div>

              {/* Name */}
              <span
                className={`font-serif text-sm text-center ${
                  isTaken ? 'text-gray-500 line-through' : 'text-deep-olive'
                }`}
              >
                {gift.name}
              </span>

              {/* Reserved Overlay */}
              {isTaken && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-xl">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Reserved
                  </span>
                </div>
              )}

              {/* Selected Check */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-deep-olive rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected message */}
      {selectedGift && (
        <div className="mt-6 text-center">
          <p className="font-serif text-sm text-deep-olive bg-light-sage/20 inline-block px-5 py-2 rounded-full">
            You selected:{' '}
            <span className="font-semibold">
              {GIFTS.find((g) => g.id === selectedGift)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
