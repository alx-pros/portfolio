import React, { useRef, useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./skillcard/Skillcard";
import "./skills.scss";
import Skillsinfocard from "./skillcard/skillsinfocard/Skillsinfocard";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Skills = () => {

    const ref = useRef()

    const isInView = useInView(ref)

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className="skills-container">
            <motion.h5
                variants={variants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}
            >Competenze <br/>tecniche<hr/>
            </motion.h5>

            <motion.div className="skills-content"
                            variants={variants}
                            initial="initial"
                            ref={ref}
                            animate={isInView && "animate"}>
                <div className="skills">
                    {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectedSkill(item);
                    }}
                    />
                ))}
                </div>

                <div className="skills-info">
                    <Skillsinfocard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </motion.div>
        </section>

    );
};

export default Skills;