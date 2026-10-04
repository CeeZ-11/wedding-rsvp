import { Gift } from 'lucide-react';
import { GIFTS } from '../data/gifts';

interface Props {
  selectedGiftId: string | null;
  onSelectGift: (id: string) => void;
  takenGifts: string[];
}

export const GiftRegistry: React.FC<Props> = ({
  selectedGiftId,
  onSelectGift,
  takenGifts,
}) => {
  return (
    <div className="w-full mt-12">
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl text-deep-olive mb-2">
          Gift Registry{' '}
          <span className="text-lg italic text-olive-secondary">(Optional)</span>
        </h3>
        <p className="font-serif text-olive-secondary text-sm tracking-wide font-medium">
          If you wish to give a gift, you may select one item below
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {GIFTS.map((gift) => {
          const isSelected = selectedGiftId === gift.id;

          // ✅ FIX: compare using gift.name (matches Google Sheets)
          const isTaken = takenGifts.includes(gift.name);

          const Icon = gift.icon || Gift;

          return (
            <button
              key={gift.id}
              type="button"
                disabled={isTaken}
                aria-disabled={isTaken}
                title={isTaken ? 'Reserved' : gift.name}
                onClick={() =>
                  !isTaken && onSelectGift(isSelected ? '' : gift.id)
                }
              className={`
                relative p-4 rounded-sm border transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2
                ${
                  isTaken
                    ? 'border-gray-400 bg-gray-100 text-gray-700 cursor-not-allowed'
                    : isSelected
                    ? 'border-deep-olive bg-deep-olive/5 text-deep-olive shadow-sm'
                    : 'border-readable-border bg-white text-deep-olive hover:border-deep-olive hover:bg-card-bg'
                }
              `}
            >
              {/* Icon */}
              <div className="mb-2">
                <Icon className="w-5 h-5 mx-auto" strokeWidth={1.5} />
              </div>

              {/* Name */}
              <span
                  className={`font-serif text-sm md:text-base ${
                  isTaken ? 'line-through' : ''
                }`}
              >
                {gift.name}
              </span>

              {/* Taken Label */}
              {isTaken && (
                <>
                  <span className="text-xs uppercase tracking-widest mt-2 text-gray-700 font-semibold">
                    Taken
                  </span>
                  <span className="sr-only">Reserved</span>
                </>
              )}

              {/* Selected Check */}
              {isSelected && !isTaken && (
                <div className="absolute top-2 right-2 text-deep-olive">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={2}
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
    </div>
  );
};