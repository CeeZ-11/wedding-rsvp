
import { motion } from 'framer-motion';
import { Countdown } from './Countdown';
import { CornerBranch } from
'./FloralAccent';
import { RSVPForm } from './RSVPForm';
export function InvitationCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative w-full max-w-4xl mx-auto bg-card-bg shadow-card rounded-sm overflow-hidden border border-[#F0EBE1]">
      
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

      {/* Inner Border to simulate printed card */}
      <div className="m-3 md:m-5 border border-light-sage/20 rounded-sm p-8 md:p-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}
          className="text-center space-y-8">
          
          <p className="font-serif text-sm md:text-base tracking-[0.3em] text-deep-olive/70 uppercase font-medium">
            Together with their families
          </p>

          <div className="py-6 md:py-10 flex flex-col items-center justify-center space-y-2">
            <h1 className="font-script text-6xl md:text-8xl text-deep-olive leading-none">
              Seamor
            </h1>
            <span className="font-script text-4xl md:text-5xl text-warm-beige py-2">
              &
            </span>
            <h1 className="font-script text-6xl md:text-8xl text-deep-olive leading-none">
              Lady Stephanie
            </h1>
          </div>

          <div className="space-y-4">
            <p className="font-serif text-lg md:text-xl text-deep-olive tracking-wider font-medium">
              December 27, 2026
            </p>
            <p className="font-serif text-base md:text-lg text-deep-olive/70 tracking-widest uppercase font-medium mb-5 pb-6">
              Balai Ramirez DSB
            </p>

            <div className="border-t border-light-sage/20">
              <Countdown />
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}>
          
          <RSVPForm />
        </motion.div>


      </div>
    </motion.div>);

}