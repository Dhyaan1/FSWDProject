"use client";
import { motion } from "framer-motion";

function FadeInWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function SlideUpWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function SlideDownWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function SlideRightWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function SlideLeftWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function ScaleWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function RotateWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { rotate: 0 },
        hidden: { rotate: 360 },
      }}
    >
      {children}
    </motion.div>
  );
}

function FlipXWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { rotateX: 0 },
        hidden: { rotateX: 180 },
      }}
    >
      {children}
    </motion.div>
  );
}

function FlipYWhenVisible({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: delay }}
      variants={{
        visible: { rotateY: 0 },
        hidden: { rotateY: 180 },
      }}
    >
      {children}
    </motion.div>
  );
}

export {
  FadeInWhenVisible,
  SlideUpWhenVisible,
  SlideDownWhenVisible,
  SlideRightWhenVisible,
  SlideLeftWhenVisible,
  ScaleWhenVisible,
  RotateWhenVisible,
  FlipXWhenVisible,
  FlipYWhenVisible,
};
