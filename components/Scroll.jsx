export default function SmoothScroll({ children, targetId }) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div onClick={scrollToTarget}>{children}</div>;
}
