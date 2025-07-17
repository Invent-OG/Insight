// // components/AnimatedHeading.tsx
// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";

// // @ts-ignore
// import SplitType from "split-type";

// export default function AnimatedHeading() {
//   useEffect(() => {
//     const split = new SplitType("#split-text", {
//       types: "lines, words",
//       lineClass: "line",
//     });

//     gsap.set("#split-text", { opacity: 1 });

//     gsap.from(split.lines, {
//       yPercent: 100,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.1,
//       ease: "expo.out",
//     });
//   }, []);

//   return (
//     <div className="container mx-auto px-6 pt-24 text-center">
//       <h1
//         id="split-text"
//         className="text-4xl md:text-6xl font-extrabold text-gray-900 opacity-0 leading-tight"
//       >
//         The text in this paragraph is split by words and lines. We have enabled
//         masking on the lines so that we can animate the lines to create a fun
//         "reveal" animation. Nice and easy!
//       </h1>
//     </div>
//   );
// }
