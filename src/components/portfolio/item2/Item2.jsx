import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./item2.scss";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const Item2 = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll ({ 
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <div className="item2">
            <div className="wrapper">
                <motion.div className="textContainer" style={{y}}>
                    <h2>
                        Upscaling
                    </h2>
                    <p>
                        Confronto tra due immagini: a sinistra una semplice fotografia scattata con un iPhone 11, a destra la stessa 
                        immagine aumentata di risoluzione, regolata dalla messa a fuoco e corretta dai colori, volti a conferirgli una nuova vita.
                    </p>
                    <img src="photoshop.png" alt="photoshop icon"/>
                    <img src="lightroom.png" alt="lightroom icon"/>
                </motion.div>
                <div className="frameContainer" ref={ref}>
                        <ReactCompareSlider className="imageContainer"
                            itemOne={<ReactCompareSliderImage src="badphoto.jpeg" alt="Bad photo" />}
                            itemTwo={<ReactCompareSliderImage src="goodphoto.png" alt="Good photo" />}
                        />
                    <span className="firstSpan"></span>
                    <span className="secondSpan"></span>
                </div>
            </div>     
        </div>
    )
};

export default Item2;