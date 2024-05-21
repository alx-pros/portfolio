import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
};

const Hero = () => {
    return (
        <div className="hero ">
        <div className="wrapper">
            <motion.div 
                className="textContainer" 
                variants={textVariants} 
                initial="initial" 
                animate="animate"
            >
                <motion.h1 variants={textVariants}>Video editor, <br/> graphic designer <br/>and front-end developer</motion.h1>
                <motion.img variants={textVariants} animate="scrollButton" src="mouse.png" alt="mouse scroller" />
            </motion.div>
        </div>
            <div className="imageContainer">
                <img src="myphoto.png" alt="Alex Prostamo foto"/>
            </div>
        </div>
    )   
};

export default Hero;