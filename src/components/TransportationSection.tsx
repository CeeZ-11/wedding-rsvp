import React from 'react'; 

type Props = { needsTransport: string; setNeedsTransport: React.Dispatch<React.SetStateAction<string>>; };

export function TransportationSection({
  needsTransport,
  setNeedsTransport,
}: Props) {
  return (
    <div className="w-full pt-10">
      <div className="text-center mb-8">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-4">
          Transportation Assistance
        </h2>
        <p className="font-serif text-deep-olive/60 tracking-widest uppercase text-xs font-medium mb-4">
          (Optional)
        </p>
        <p className="font-serif text-deep-olive/80 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          For guests traveling from Bacolod or those without transportation, a
          van service to the venue will be available.
        </p>
      </div>

      <div className="space-y-6">
        <label className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
          Will you need transportation?
        </label>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              setNeedsTransport('Yes, needs transportation')
            }
            className={`
              px-6 py-3 rounded-full font-serif text-base transition-all duration-300 border
              ${
                needsTransport === 'Yes, needs transportation'
                  ? 'bg-deep-olive text-white border-deep-olive shadow-md'
                  : 'bg-transparent text-deep-olive border-muted-sage/50 hover:border-muted-sage hover:bg-light-sage/10'
              }
            `}
          >
            Yes, I would like to reserve a seat
          </button>

          <button
            type="button"
            onClick={() =>
              setNeedsTransport('No, has own transportation')
            }
            className={`
              px-6 py-3 rounded-full font-serif text-base transition-all duration-300 border
              ${
                needsTransport === 'No, has own transportation'
                  ? 'bg-warm-beige text-white border-warm-beige shadow-md'
                  : 'bg-transparent text-deep-olive border-muted-sage/50 hover:border-muted-sage hover:bg-light-sage/10'
              }
            `}
          >
            No, I have my own transportation
          </button>
        </div>

        {/* Info */}
        <div
          className={`transition-all duration-500 overflow-hidden text-center ${
            needsTransport === 'Yes, needs transportation'
              ? 'max-h-20 opacity-100 mt-6'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <p className="font-serif text-sm text-deep-olive bg-light-sage/15 inline-block px-6 py-3 rounded-sm font-medium border border-light-sage/30">
            For pickup details and schedule, please refer to the Transportation section in the Wedding Guide.
          </p>
          
        </div>
      </div>
    </div>
  );
}