"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";


export const SplashScreen = ({ navbarLogoRef }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState("enter");
    const [exitTarget, setExitTarget] = useState({ x: 0, y: 0, scale: 0.3});
    const [isMobile, setIsMobile] = useState(false);
    const splashLogoRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const holdTimer = setTimeout(() => setPhase("hold"), 100);

        const exitTimer = setTimeout(() => {
            if (navbarLogoRef.current && splashLogoRef.current) {
                const navRect = navbarLogoRef.current.getBoundingClientRect();
                const splashRect = splashLogoRef.current.getBoundingClientRect();

                const x = navRect.left + navRect.width / 2 - (splashRect.left + splashRect.width / 2);
                const y = navRect.top + navRect.height / 2 - (splashRect.top + splashRect.height / 2);
                const scale = navRect.width / splashRect.width;

                setExitTarget({ x, y, scale });
            }
            setPhase("exit");
        }, 1700); 
        const unmountTimer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
        }, 2400);

        return () => {
            clearTimeout(holdTimer);
            clearTimeout(exitTimer);
            clearTimeout(unmountTimer);
            document.body.style.overflow = "";
        };
    }, [navbarLogoRef]);

    const logoVariants = {
        enter: {
            scale: 0.6,
            opacity: 1,  
            x: 0,
            y: 0,
        },
        hold: {
            scale: 2,    
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
        exit: {
            scale: exitTarget.scale,
            opacity: 0,
            x: exitTarget.x,
            y: exitTarget.y,
            transition: {
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const glowVariants = {
        enter: { opacity: 0, scale: 0.8 },
        hold: {
            opacity: 1,
            scale: 1.4,
            transition: { duration: 0.6, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            scale: 2,
            transition: { duration: 0.4, ease: "easeInOut" },
        },
    };

    const overlayVariants = {
        enter: { opacity: 1 },
        hold: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-orange-200 overflow-hidden"
                    variants={overlayVariants}
                    initial="enter"
                    animate={phase}
                >
                    {/* Glow */}
                 

                    {/* Logo */}
                    <motion.div
                        ref={splashLogoRef}
                        variants={logoVariants}
                        initial="enter"
                        animate={phase}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        {/* <Logo className={} /> */}
                          <a ref={navbarLogoRef} href='https://prebuiltui.com?utm_source=slidex' className={isMobile ? "scale-90" : "scale-100"}>
                    {/* <Image src='/assets/logo.svg' alt='logo' className='h-7.5 w-auto' width={205} height={48} /> */}
                    <h2 className='text-xl xl:text-2xl font-bold text-black-500 leading-6 tracking-normal'><span className='text-orange-500'>C</span>odio <br /> <span className='text-orange-500'>N</span>etwork</h2>
                </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );  
};