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
        <div className="border-b border-neutral-900 pb-8 lg:mb-35">
            <div className="flex flex-wrap  ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Mohit Singh Chouhan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Front-End Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 relative">
                    {/* <div className="flex justify-center">
                        <WaterDropGrid className="mb-30 md:mb-40 lg:mb-60 md:ml-40" />
                    </div> */}
                    <div className="flex justify-center absolute inset-0 mb-20"> {/* Positioning the image above the grid */}
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Mohit pic"
                            className="rounded-full shadow-2xl" // Removed margin-bottom here
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
