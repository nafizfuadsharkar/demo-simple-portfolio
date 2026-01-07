import { motion } from "framer-motion";

export default function SectionWrapper({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      className="my-24"
    >
      {children}
    </motion.section>
  );
}
