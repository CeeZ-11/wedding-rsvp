
import { motion } from 'framer-motion';
import {
  FloralCornerTopLeft,
  FloralCornerBottomRight,
  DividerFloral } from
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
      <div className="absolute top-0 left-0 p-4">
        <FloralCornerTopLeft className="w-24 h-24 md:w-32 md:h-32" />
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <FloralCornerBottomRight className="w-24 h-24 md:w-32 md:h-32" />
      </div>

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
            <p className="font-serif text-base md:text-lg text-deep-olive/70 tracking-widest uppercase font-medium">
              Balai Ramirez DSB
            </p>
          </div>
        </motion.div>

        <DividerFloral className="my-12 md:my-16" />

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

        <DividerFloral className="my-12 md:my-16" />

      </div>
    </motion.div>);

}