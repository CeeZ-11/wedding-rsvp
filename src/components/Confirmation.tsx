import { GIFTS } from '../data/gifts';
import { Check } from 'lucide-react';

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
    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-700" role="status" aria-live="polite">
      {/* Icon */}
      <div aria-hidden="true" className="mx-auto mt-4 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-readable-border bg-light-sage/20">
        <Check className="h-7 w-7 text-deep-olive" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h2 className="font-script text-4xl md:text-5xl text-deep-olive">
        Thank You!
      </h2>

      {/* Message */}
      <div className="font-serif text-lg text-olive-secondary space-y-2">
        <p>Your response has been received.</p>
        <p className="text-2xl text-deep-olive mt-4">{name}</p>
        <p className="italic">
          {attending === 'yes'
            ? "We can't wait to celebrate with you!"
            : 'You will be dearly missed, but we feel your love from afar.'}
        </p>
      </div>

      {/* Gift */}
      {selectedGift && attending === 'yes' && (
        <div className="mt-8 p-6 bg-white border border-readable-border rounded-sm shadow-sm max-w-sm mx-auto">
          <p className="font-serif text-lg text-deep-olive mb-4">
            You have selected:
          </p>

          <div className="flex items-center justify-center gap-3 text-deep-olive">
            {GiftIcon && <GiftIcon size={24} />}
            <span className="font-medium text-lg">
              {selectedGift.name}
            </span>
          </div>

          <p className="text-sm text-olive-secondary mt-4">
            This item will be marked as reserved.
          </p>
        </div>
      )}

      {/* Reset */}
      <button
        onClick={onReset}
        className="text-sm text-deep-olive underline underline-offset-4 hover:text-olive-secondary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
      >
        Submit another response
      </button>
    </div>
  );
};
