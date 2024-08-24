"use client";
import { useEffect, useRef } from 'react';

const CircleAnimation: React.FC = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);
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
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
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
            if (el) circlesRef.current[index] = el;
          }}
          className="circle"
        ></div>
      ))}
    </>
  );
};

export default CircleAnimation;




// "use client";
// "use client";
// import { useEffect, useRef } from 'react';

// const CircleAnimation: React.FC = () => {
//   const circlesRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const coords = { x: 0, y: 0 };

//     const colors = [
//       '#ffb56b', '#fdaf69', '#f89d63', '#f59761', '#ef865e',
//       '#ec805d', '#e36e5c', '#df685c', '#d5585c', '#d1525c',
//       '#c5415d', '#c03b5d', '#b22c5e', '#ac265e', '#9c155f',
//       '#950f5f', '#830060', '#7c0060', '#680060', '#60005f',
//       '#48005f', '#3d005e',
//     ];

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

//     window.addEventListener('mousemove', handleMouseMove);

//     const animateCircles = () => {
//       let x = coords.x;
//       let y = coords.y;

//       circlesRef.current.forEach((circle, index) => {
//         if (circle) {
//           // For the first circle, follow the cursor directly
//           if (index === 0) {
//             circle.style.left = `${x - 12}px`;
//             circle.style.top = `${y - 12}px`;
//           } else {
//             // For subsequent circles, follow the previous circle's position
//             const prevCircle = circlesRef.current[index - 1];
//             circle.style.left = `${prevCircle?.x - 12}px`;
//             circle.style.top = `${prevCircle?.y - 12}px`;
//           }

//           // Scale effect based on the circle's position in the array
//           circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

//           // Update current circle's position for the next iteration
//           circle.x = x;
//           circle.y = y;

//           // Slightly delay the following circles
//           if (index > 0) {
//             x += (circlesRef.current[index - 1].x - x) * 0.3;
//             y += (circlesRef.current[index - 1].y - y) * 0.3;
//           }
//         }
//       });

//       requestAnimationFrame(animateCircles);
//     };

//     animateCircles();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

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















// "use client";
// import gsap from 'gsap';
// import { useState, useEffect, useRef } from 'react';
// import { moveCursor } from 'readline';

// export const CustemCursor = () => {

//     const [position, setPosition] = useState({ x: 0, y: 0 });

//   // State to track whether the cursor is over a clickable element.
//   const [isPointer, setIsPointer] = useState(false);

//   // Event handler for the mousemove event.
//   const handleMouseMove = (e) => {
//     // Update the cursor position based on the mouse coordinates.
//     setPosition({ x: e.clientX, y: e.clientY, });

//     // Get the target element that the cursor is currently over.
//     const target = e.target;

//     // Check if the cursor is over a clickable element by inspecting the cursor style.
//     setIsPointer(
//       window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
//     );
//   };

//   // Set up an effect to add and remove the mousemove event listener.
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []); // The empty dependency array ensures that this effect runs only once on mount.

//   // Calculate the size of the flare based on whether the cursor is over a clickable element.
//   const flareSize = isPointer ? 0 : 30;

//   // Adjust the cursor position to create a visual effect when over a clickable element.
//   const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};


//     return(
//         <div
//       className={`flare ${isPointer ? "pointer" : ""}`}
//       style={{
//         ...cursorStyle,
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         width: `${flareSize}px`,
//         height: `${flareSize}px`,
//       }}
    
//     >
//         <div className='folower'></div>
//     </div>
//     )
// }