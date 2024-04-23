import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./item4.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Logo from "./Logo.tsx";

const Item4 = () => {


    const ref = useRef()
    const {scrollYProgress} = useScroll ({ 
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <div className="item4">
            <div className="wrapper">
                <motion.div className="textContainer" style={{y}}>
                    <h2>
                        Logo grafico
                    </h2>
                    <p>
                        Creazione grafica di un logo vettoriale composto da molteplici figure congiunte tra loro. Animazione in 2D di luci
                        ed ombre, e conversione 3D interagibile per il web.
                    </p>
                    <img src="illustrator.png" alt="illustrator icon"/>
                    <img src="aftereffects.png" alt="after effects icon"/>
                    <img src="three.js.png" alt="three.js icon"/>
                </motion.div>
                <div className="sourceContainer" ref={ref} >
                    <div className="logo3DContainer" ref={ref} style={{ position: "relative", width: 300, height: 450 }}>
                    <Canvas camera={{fov:70, position:[50,50,50]}}>
                        <Stage environment="city" intensity={0.6}>
                            <Logo/>
                        </Stage>
                        <OrbitControls enableZoom={false} autoRotate/>
                        <ambientLight intensity={1}/>
                    </Canvas>
                    </div>
                    <div className="logoAnimationContainer">
                        <video src="animationlogo.mp4" alt="animation logo" autoPlay loop muted/>
                    </div>
                    <span className="firstSpan"></span>
                    <span className="secondSpan"></span>
                </div>
            </div> 
        </div>
    )
}

export default Item4;