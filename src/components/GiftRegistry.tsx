import React, { useState } from 'react';
import { Check } from 'lucide-react';
const GIFTS = [
{
  id: 'g1',
  name: 'Air Fryer',
  taken: false
},
{
  id: 'g2',
  name: 'Table',
  taken: true
},
{
  id: 'g3',
  name: 'Rice Cooker',
  taken: false
},
{
  id: 'g4',
  name: 'Induction Cooker',
  taken: false
},
{
  id: 'g5',
  name: 'Heater',
  taken: true
},
{
  id: 'g6',
  name: 'Steaming Iron',
  taken: false
},
{
  id: 'g7',
  name: 'Water Dispenser',
  taken: false
},
{
  id: 'g8',
  name: 'Cutlery Set',
  taken: true
},
{
  id: 'g9',
  name: 'Knives Set',
  taken: false
},
{
  id: 'g10',
  name: 'Essential Oil Diffuser',
  taken: false
},
{
  id: 'g11',
  name: 'Bed Sheet',
  taken: false
},
{
  id: 'g12',
  name: 'Coffee Maker',
  taken: true
},
{
  id: 'g13',
  name: 'Toaster',
  taken: false
},
{
  id: 'g14',
  name: 'Frying Pan',
  taken: false
},
{
  id: 'g15',
  name: 'Food Processor',
  taken: true
},
{
  id: 'g16',
  name: 'Hand Mixer',
  taken: false
}];

export function GiftRegistry() {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  return (
    <div className="w-full mt-12">
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl text-deep-olive mb-2">
          Gift Registry{' '}
          <span className="text-lg italic text-deep-olive/50">(Optional)</span>
        </h3>
        <p className="font-serif text-deep-olive/60 text-sm tracking-wide font-medium">
          If you wish to give a gift, you may select one item below
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {GIFTS.map((gift) => {
          const isSelected = selectedGift === gift.id;
          return (
            <button
              key={gift.id}
              type="button"
              disabled={gift.taken}
              onClick={() => setSelectedGift(isSelected ? null : gift.id)}
              className={`
                relative p-4 rounded-sm border transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] text-center
                ${gift.taken ? 'border-gray-200 bg-gray-50/50 text-gray-400 cursor-not-allowed' : isSelected ? 'border-deep-olive bg-deep-olive/5 text-deep-olive shadow-sm' : 'border-muted-sage/30 hover:border-muted-sage/60 bg-white text-deep-olive hover:bg-card-bg'}
              `}>
              
              <span
                className={`font-serif text-sm md:text-base ${gift.taken ? 'line-through opacity-60' : ''}`}>
                
                {gift.name}
              </span>

              {gift.taken &&
              <span className="text-[10px] uppercase tracking-widest mt-2 text-warm-beige font-medium">
                  Taken
                </span>
              }

              {isSelected &&
              <div className="absolute top-2 right-2 text-deep-olive">
                  <Check className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
              }
            </button>);

        })}
      </div>

      {selectedGift &&
      <div className="mt-6 text-center animate-fade-in">
          <p className="font-serif text-sm text-deep-olive bg-light-sage/15 inline-block px-4 py-2 rounded-full font-medium">
            You have selected:{' '}
            <span className="font-semibold text-deep-olive">
              {GIFTS.find((g) => g.id === selectedGift)?.name}
            </span>
          </p>
        </div>
      }
    </div>);

}