import { motion } from "framer-motion";

import moodboard from "../images/moodboard.jpg";
import glico from "../images/glico.jpg";
import newpin from "../images/newpin.png";



const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

export const Hobbies = () => {
    return (
        <section className="hobbies" variants={fadeInUp}>
            {/* <h3 className="hobbies-h3"> Click on an image to view!</h3> */}
            <motion.div className="bulletin-board">
            <img src={moodboard} alt="Moodboard" className="gallery-photo" />

            <div className="scrapbook">
                <a href="https://www.youtube.com/@kmod24" target="_blank" rel="noreferrer">
                <img src={glico} alt="Glico" className="glico-img" />
                <img src={newpin} alt="Newpin" className="pin-img" />
                </a>

            </div>

        </motion.div>

        </section>

    )
};
