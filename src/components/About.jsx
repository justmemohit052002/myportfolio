import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen border-b border-neutral-900 flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="mb-8 sm:mb-12 md:mb-16 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-4">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-0">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-6 order-2 lg:order-1"
        >
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="about"
              className="rounded-2xl max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] w-full object-cover shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-6 order-1 lg:order-2"
        >
          <p className="max-w-xl text-neutral-400 leading-relaxed text-sm sm:text-base md:text-lg text-center lg:text-left mx-auto lg:mx-0">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
