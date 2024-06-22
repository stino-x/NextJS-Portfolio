"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { useBreakpoint } from '@theme-ui/match-media';

const Photo = () => {
  // const breakpoints = useBreakpoint();
  // const imageSize = breakpoints.sm ? { width: 200, height: 200 } : { width: 250, height: 250 };
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid place-items-center w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          {/* <div className="w-[40%] h-[40%] relative"> */}
          {/* <Image
            src="/assets/photo.png"
            width={imageSize.width}
            height={imageSize.height}
            priority
            quality={100}
            alt=""
            className="object-contain"
          /> */}
  <Image
        src="/assets/photo.png"
        width={450}
        height={450}
        sizes="(max-width: 767px) 200px, (min-width: 1280px) 450px, 250px"
        priority
        quality={100}
        alt=""
        className="object-contain rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[450px] xl:h-[450px]"
      />
          {/* </div> */}
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
