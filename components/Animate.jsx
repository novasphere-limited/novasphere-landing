import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedInView({
  children,
  threshold = 0.2,
  variants,
  overflowHidden,
}) {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  return (
    <div style={{ overflow: overflowHidden ? "hidden" : "visible" }}>
      <motion.div
        ref={ref}
        initial={variants.initial}
        animate={inView ? variants.animate : variants.initial}
        transition={variants.transition}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimatedInView;
