import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 sm:pb-6 md:pb-8">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-12 sm:my-16 md:my-20 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-4">
                Projects
            </motion.h1>
            <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-12 sm:mb-14 md:mb-16 flex flex-col items-center lg:flex-row lg:justify-center w-full max-w-6xl">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center mb-6 sm:mb-8 lg:mb-0">
                            <img src={project.image}
                                alt={project.title}
                                className="rounded w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-36 lg:h-36 object-cover shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 lg:ml-8 xl:ml-12 text-center lg:text-left">
                            <h6 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-semibold">{project.title}</h6>
                            <p className="mb-4 sm:mb-6 text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="rounded bg-neutral-900 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-purple-900">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
