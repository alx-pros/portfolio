import { useRef } from "react";
import "./item1.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Item1 = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll ({ 
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <div className="item1">
            <div className="titleContainer">
                <h1>I miei Progetti</h1>
            </div>
            <div className="wrapper">
                <div className="frameContainer" ref={ref}>
                    <div className="videoContainer">
                        <iframe 
                            src="https://player.vimeo.com/video/920651151?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Boredom">
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <span className="firstSpan"></span>
                    <span className="secondSpan"></span>
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>
                        Cortometraggio
                    </h2>
                    <p>
                        Mentre il protagonista trascorre una tipica e noiosa giornata di lavoro, il narratore si diverte
                        a prenderlo in giro, vietandogli di allontanarsi dal suo ambiente lavorativo.
                    </p>
                    <img src="davinciresolve.png" alt="davinci resolve icon"/>
                    <img src="logicpro.png" alt="logic pro icon"/>
                </motion.div>
            </div>   

        </div>
    )
}

export default Item1;