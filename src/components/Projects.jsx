import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Projects = () => {
    return <motion.section 
    className="projects" 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{once: true}}
    transition={{ duration: 0.6 }}
    >
    {/* <motion.h2 
    variants={fadeInUp} 
    initial="initial" 
    whileInView="animate" 
    viewport={{once:true}}
    > 
    My Projects 
    </motion.h2> */}
    
    <motion.div className="project-grid" 
    variants={staggerContainer}
    initial="initial" 
    whileInView="animate" 
    viewport={{once:true}}
    >
        <motion.div 
        className="project-card"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2} }}
        >

            <motion.div>
                <h3>BrainrotGPT</h3>
                <p className="project-caption">Turns complex terms into "Brainrot" explanations
                </p>
                <div className="project-tech">
                    <span>React.js</span>
                    <span>Typescript</span>
                    <span>Whisper</span>
                    <span>GPT-4</span>
                </div>
                <a href="https://brainrot-gpt-mu.vercel.app/" target="_blank" rel="noreferrer">
                <p className="visit-arrow">Visit →</p>
                </a>
            </motion.div>
        </motion.div>

        <motion.div 
        className="project-card"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2} }}
        >

            <motion.div>
                <h3>Moodboard</h3>
                <p className="project-caption">Turns a few words into a moodboard such as songs, images, coffees, outfits, & more
                </p>
                <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>TailwindCSS</span>
                </div>
                <a href="https://github.com/kmod24/moodboard" target="_blank" rel="noreferrer">
                <p className="visit-arrow">Visit →</p>
                </a>
            </motion.div>
        </motion.div>

        <motion.div 
        className="project-card"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2} }}
        >

            <motion.div>
                <h3>Coffeedex</h3>
                <p className="project-caption">Coffee tracker app that lists favorite coffees and recommends cafes nearby
                </p>
                <div className="project-tech">
                    <span>SwiftUI</span>
                    <span>Firebase</span>
                    <span>MVVM</span>
                </div>
                <a href="https://github.com/kmod24/coffeedex" target="_blank" rel="noreferrer">
                <p className="visit-arrow">Visit →</p>
                </a>
            </motion.div>

        </motion.div>


        <motion.div 
        className="project-card"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2} }}
        >

            <motion.div>
                <h3>Website v1</h3>
                <p className="project-caption">My very first website using NextJS & TailwindCSS
                </p>
                <div className="project-tech">
                    <span>NextJS</span>
                    <span>React</span>
                    <span>TailwindCSS</span>
                </div>
                <a href="https://portfolio-website-bice-ten-71.vercel.app" target="_blank" rel="noreferrer">
                <p className="visit-arrow">Visit →</p>
                </a>
            </motion.div>
        </motion.div>


        <motion.div 
        className="project-card"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2} }}
        >

            <motion.div>
                <h3>Website v2</h3>
                <p className="project-caption">Website v2 using ReactJS & TailwindCSS
                </p>
                <div className="project-tech">
                    <span>ReactJs</span>
                    {/* <span>TailwindCSS</span> */}
                </div>
                <a href="" target="_blank" rel="noreferrer">
                <p className="visit-arrow">Visit →</p>
                </a>
            </motion.div>
        </motion.div>

        
        

    </motion.div>

    </motion.section>; 
};
