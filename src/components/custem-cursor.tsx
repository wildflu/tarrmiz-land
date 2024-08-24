"use client";
import { useEffect, useRef } from 'react';

// Define a custom interface that extends HTMLDivElement
interface CustomDivElement extends HTMLDivElement {
  x?: number;
  y?: number;
}

const CircleAnimation: React.FC = () => {
  const circlesRef = useRef<CustomDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 }).current;

  useEffect(() => {
    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
      "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
      "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
      "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
      "#48005f", "#3d005e"
    ];

    // Initialize circle positions and colors
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          
          if (nextCircle) {
            // Ensure nextCircle is defined before accessing its properties
            x += (nextCircle.x! - x) * 0.3;
            y += (nextCircle.y! - y) * 0.3;
          }
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [coords]);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el as CustomDivElement;
          }}
          className="circle"
        ></div>
      ))}
    </>
  );
};

export default CircleAnimation;


// "use client";
// import { useEffect, useRef } from 'react';

// const CircleAnimation: React.FC = () => {
//   const circlesRef = useRef<HTMLDivElement[]>([]);
//   const coords = useRef({ x: 0, y: 0 }).current;

//   useEffect(() => {
//     const colors = [
//       "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
//       "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
//       "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
//       "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
//       "#48005f", "#3d005e"
//     ];

//     // Initialize circle positions and colors
//     circlesRef.current.forEach((circle, index) => {
//       if (circle) {
//         circle.x = 0;
//         circle.y = 0;
//         circle.style.backgroundColor = colors[index % colors.length];
//       }
//     });

//     const handleMouseMove = (e: MouseEvent) => {
//       coords.x = e.clientX;
//       coords.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const animateCircles = () => {
//       let x = coords.x;
//       let y = coords.y;

//       circlesRef.current.forEach((circle, index) => {
//         if (circle) {
//           circle.style.left = `${x - 12}px`;
//           circle.style.top = `${y - 12}px`;
//           circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

//           circle.x = x;
//           circle.y = y;

//           const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
//           x += (nextCircle.x - x) * 0.3;
//           y += (nextCircle.y - y) * 0.3;
//         }
//       });

//       requestAnimationFrame(animateCircles);
//     };

//     animateCircles();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [coords]);

//   return (
//     <>
//       {Array.from({ length: 20 }).map((_, index) => (
//         <div
//           key={index}
//           ref={(el) => {
//             if (el) circlesRef.current[index] = el;
//           }}
//           className="circle"
//         ></div>
//       ))}
//     </>
//   );
// };

// export default CircleAnimation;
