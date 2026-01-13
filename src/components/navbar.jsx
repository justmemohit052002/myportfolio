import logo from "../assets/mohitSinghLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";
import { useState, useRef } from "react";

const TARGET_TEXT = "Resume";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(TARGET_TEXT);
    const resumeLink = "https://drive.google.com/file/d/1FBPxctLwnwQzmo-TFAG1STxkUTaBuYwh/view?usp=sharing";

    const scramble = () => {
        let pos = 0;
        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }
                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];
                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current);
        setText(TARGET_TEXT);
    };

    const handleClick = () => {
        window.open(resumeLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.025,
            }}
            whileTap={{
                scale: 0.975,
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            onClick={handleClick}
            className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 
                        px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 font-mono font-medium uppercase text-neutral-300 
                        text-xs sm:text-sm md:text-base lg:text-lg transition-colors hover:text-indigo-300 cursor-pointer"
        >
            <div className="relative z-10 flex items-center gap-1 sm:gap-2">
                <FiLock />
                <span>{text}</span>
            </div>
            <motion.span
                initial={{
                    y: "100%",
                }}
                animate={{
                    y: "-100%",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% 
                           via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>
    );
};

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-16 h-16 mt-5" src={logo} alt="logo" />
            </div>
            <div className="m-8 mr-10 flex items-center justify-center gap-4 text-2xl sm:mr-10">
                <a href="https://linkedin.com/in/mohit-singh-3b2325223" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-500 transition-colors">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/justmemohit052002" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-500 transition-colors">
                    <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-500 transition-colors">
                    <FaSquareXTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-500 transition-colors">
                    <FaInstagram />
                </a>
                <EncryptButton />
            </div>
        </nav>
    );
};

export default Navbar;
