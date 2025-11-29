import { motion } from "framer-motion";
import { Link } from "react-router-dom"
 
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

export const NavBar = () => { 
    return (
    <motion.nav 
        className="navbar" 
        // initial={{ y: -100 }} 
        // animate={{ y: 0 }} 
        // transition={{ duration: 0.6, ease: "easeOut"}} 
        > 
        

        <motion.ul 
        className="nav-links" 
        variants={staggerContainer} 
        initial="initial" 
        animate="animate"> 

        {/* variant applies to all elements */}
            {/* Home NAV ICON */}
            <motion.li 
            variants={fadeInUp} whileHover = {{scale: 1.1}} whileTap = {{scale: 0.95}}>
                <Link to="/">home</Link>
            </motion.li>
            
            {/* Projects NAV ICON */}
            <motion.li 
            variants={fadeInUp} whileHover = {{scale: 1.1}} whileTap = {{scale: 0.95}}>
                <Link to="/projects">projects</Link>
            </motion.li>

            {/* Blogs NAV ICON */}
            <motion.li 
            variants={fadeInUp} whileHover = {{scale: 1.1}} whileTap = {{scale: 0.95}}>
                <Link to="/blogs">blogs</Link>
            </motion.li>
            
            {/* Hobbies NAV ICON */}
            <motion.li 
            variants={fadeInUp} whileHover = {{scale: 1.1}} whileTap = {{scale: 0.95}}>
                <Link to="/hobbies">hobbies</Link>
            </motion.li>

        </motion.ul>

        </motion.nav>
    );
}; 
