import { useRef } from "react";
import "./item5.scss";
import { useTransform, useScroll, motion  } from "framer-motion";

const Item5 = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll ({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    
    return (
        <div className="item5">
            <div className="wrapper">
                <div className="frameContainer" ref={ref}>
                    <div className="imageContainer">
                        <img src="imagesite.png" alt="immagine del sito" />
                    </div>
                    <span className="firstSpan"></span>
                    <span className="secondSpan"></span>
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>
                        Sito web
                    </h2>
                    <p>
                        Riproduzione fedele del sito Apple iPhone 15 di JS Mastery. Modelli tridimensionali realizzati e animati con
                        three.js e GSAP. <br /> Puoi visitare il sito da {' '}
                        <a href="https://appleiphone-15.netlify.app" alt="Apple iPhone website" target="blank" >
                            qui
                        </a>
                        {' '} !
                    </p>
                    <img src="react.png" alt="react icon"/>
                    <img src="vite.svg" alt="vite icon"/>
                    <img src="gsap.svg" alt="gsap icon"/>
                    <img src="three.js.png" alt="three.js icon"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Item5;