import { useRef } from "react";
import "./item3.scss";
import { useTransform, useScroll, motion  } from "framer-motion";

const Item3 = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll ({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    
    return (
        <div className="item3">
            <div className="wrapper">
                <div className="frameContainer" ref={ref}>
                        <video src="carproject.mp4" alt="car project video" autoPlay loop muted/>
                    <span className="firstSpan"></span>
                    <span className="secondSpan"></span>
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>
                        Automobile
                    </h2>
                    <p>
                        Modello tridimensionale di un'auto. Composizione di tutte le componenti esterne del veicolo,
                        con aggiunta di luci, ombre, colori e movimenti di camera.
                    </p>
                    <img src="blender.png" alt="blender icon"/>
                    <img src="finalcutpro.png" alt="final cut pro icon"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Item3;