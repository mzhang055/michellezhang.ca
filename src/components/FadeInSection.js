import React from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true); // Set visible true when the element is intersecting
          observer.unobserve(entry.target); // Optionally unobserve the target after it becomes visible to stop observing
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // Check if the element exists before trying to unobserve it
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
