import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/MohitProfile.png";
import { motion } from "framer-motion";
// import WaterDropGrid from '../constants/WaterDropGrid'; // Ensure to import WaterDropGrid

const container = (delay) => ({
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay },
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 sm:pb-6 md:pb-8 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 sm:pb-12 md:pb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-thin tracking-tight mt-4 sm:mt-8 lg:mt-16 text-center lg:text-left">
                            Mohit Singh Chouhan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent text-center lg:text-left">
                            Front-End Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 sm:my-4 max-w-xl py-4 sm:py-6 font-light tracking-tighter text-sm sm:text-base md:text-lg text-center lg:text-left px-2 sm:px-0">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 relative mt-8 lg:mt-0 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                    {/* <div className="flex justify-center">
                        <WaterDropGrid className="mb-30 md:mb-40 lg:mb-60 md:ml-40" />
                    </div> */}
                    <div className="flex justify-center items-center absolute inset-0"> {/* Positioning the image above the grid */}
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Mohit pic"
                            className="rounded-full shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
