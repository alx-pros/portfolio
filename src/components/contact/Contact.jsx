import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};


const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const isInView = useInView(ref);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1y7phb3', 'template_gracrie', formRef.current, {
            publicKey: '8_xn1-o5FipqFd6Wt',
          })
          .then(() => {
             setSuccess(true)
        },
            (error) => {
                setError(true);
            },
        );
    };
    


    return (
        <motion.div 
        ref={ref}
            className="contact" 
            variants={variants} 
            initial="initial" 
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Contattami</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Email</h2>
                    <span>alex.prostamo@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Luogo</h2>
                    <span>Udine, Pasian di Prato</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div 
                    className="mailSvg" 
                    initial={{ opacity: 1 }} 
                    whileInView={{ opacity: 0 }} 
                    transition={{ delay: 3, duration: 1 }}
                    
                >
                    <svg width="500px"  viewBox="1.5 4.5 20 20">
                        <motion.path 
                            strokeWidth={0.2}
                            fill="none"
                            strokeLinejoin="fill"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 7 }}
                            d="M 10 19 H 6.2 C 5.0799 19 4.51984 19 4.09202 18.782 C 3.71569 18.5903
                            3.40973 18.2843 3.21799 17.908 C 3 17.4802 3 16.9201 3 15.8 V 8.2 C 3 7.0799
                            3 6.51984 3.21799 6.09202 C 3.40973 5.71569 3.71569 5.40973 4.09202 5.21799
                            C 4.51984 5 5.0799 5 6.2 5 H 17.8 C 18.9201 5 19.4802 5 19.908 5.21799 C 20.2843
                            5.40973 20.5903 5.71569 20.782 6.09202 C 21 6.51984 21 7.0799 21 8.2 V 10 M 
                            20.6067 8.26229 L 15.5499 11.6335 C 14.2669 12.4888 13.6254 12.9165 12.932 
                            13.0827 C 12.3192 13.2295 11.6804 13.2295 11.0677 13.0827 C 10.3743 12.9165 
                            9.73279 12.4888 8.44975 11.6335 L 3.14746 8.09863 M 14 21 L 16.025 20.595 C 
                            16.2015 20.5597 16.2898 20.542 16.3721 20.5097 C 16.4452 20.4811 16.5147 20.4439 
                            16.579 20.399 C 16.6516 20.3484 16.7152 20.2848 16.8426 20.1574 L 21 16 C 21.5523 
                            15.4477 21.5523 14.5523 21 14 C 20.4477 13.4477 19.5523 13.4477 19 14 L 14.8426 
                            18.1574 C 14.7152 18.2848 14.6516 18.3484 14.601 18.421 C 14.5561 18.4853 14.5189 
                            18.5548 14.4903 18.6279 C 14.458 18.7102 14.4403 18.7985 14.405 18.975 L 14 21 Z"                     
                        />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}    
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 3, duration: 1 }}
                >
                    <input autoComplete="on" type="text" required placeholder="Nome" name="name"/>
                    <input autoComplete="on" type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8}  placeholder="Messaggio" name="message"/>
                    <button>Invio</button>
                    { error && "Error"}
                    { success && "Success"}

                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;