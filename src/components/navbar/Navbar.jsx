import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: 0,
        y: -50,
    },
    animate: {
        x: 0,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
                <motion.div className="wrapper"
                variants={variants}
                initial="initial"
                animate="animate"
                >
                    <motion.h3>
                        Alex Prostamo
                    </motion.h3>
                    <div className="social">
                        <ul>
                            <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/alex-prostamo-245809235/" target="blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a className="github" href="https://github.com/alx-pros" target="blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa fa-github" aria-hidden="true"></i>
                                </a>                             
                            </li>
                         </ul>
                    </div>
                </motion.div>
        </div>    
    )
}

export default Navbar;