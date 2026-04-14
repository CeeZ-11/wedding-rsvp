import { CornerBranch } from './FloralAccent';
import { GIFTS } from '../data/gifts';

interface ConfirmationProps {
  name: string;
  attending: 'yes' | 'no' | null;
  selectedGiftId: string | null;
  onReset: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({
  name,
  attending,
  selectedGiftId,
  onReset,
}) => {
  const selectedGift = selectedGiftId
    ? GIFTS.find((g) => g.id === selectedGiftId)
    : null;

  const GiftIcon = selectedGift?.icon;

  return (
    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-700">
      {/* Icon */}
      <div className="inline-block p-4 rounded-full bg-light-sage/30 mb-4">
        <svg
          className="w-12 h-12 text-deep-olive"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>

      {/* Decorative Corners */}

     <CornerBranch
        position="top-left"
        className="absolute top-0 left-0 w-28 h-28 md:w-36 md:h-36 -translate-x-4 -translate-y-4 opacity-60"
      />

      <CornerBranch
        position="top-right"
        className="absolute top-0 right-0 w-28 h-28 md:w-36 md:h-36 translate-x-4 -translate-y-4 opacity-60"
      />

      <CornerBranch
        position="bottom-left"
        className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 -translate-x-4 translate-y-4 opacity-60"
      />

      <CornerBranch
        position="bottom-right"
        className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 translate-x-4 translate-y-4 opacity-60"
      />

      {/* Title */}
      <h2 className="font-script text-4xl md:text-5xl text-deep-olive">
        Thank You!
      </h2>

      {/* Message */}
      <div className="font-serif text-lg text-deep-olive/80 space-y-2">
        <p>Your response has been beautifully received.</p>
        <p className="text-2xl text-deep-olive mt-4">{name}</p>
        <p className="italic">
          {attending === 'yes'
            ? "We can't wait to celebrate with you!"
            : 'You will be dearly missed, but we feel your love from afar.'}
        </p>
      </div>

      {/* Gift */}
      {selectedGift && attending === 'yes' && (
        <div className="mt-8 p-6 bg-white border border-muted-sage/30 rounded-2xl shadow-sm max-w-sm mx-auto">
          <p className="font-serif text-lg text-deep-olive mb-4">
            You have selected:
          </p>

          <div className="flex items-center justify-center gap-3 text-deep-olive">
            {GiftIcon && <GiftIcon size={24} />}
            <span className="font-medium text-lg">
              {selectedGift.name}
            </span>
          </div>

          <p className="text-sm text-deep-olive/60 mt-4">
            This item will be marked as reserved.
          </p>
        </div>
      )}

      {/* Reset */}
      <button
        onClick={onReset}
        className="text-sm text-deep-olive hover:underline transition"
      >
        Submit another response
      </button>
    </div>
  );
};