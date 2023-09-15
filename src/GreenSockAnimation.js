// import gsap from "gsap";
// import React from "react";




// const { useEffect, useRef, StrictMode } = React;
// const { createRoot } = ReactDOM;

// console.clear();
// const root = createRoot(document.getElementById("root"));
// let callCount = 0;

// function GreenSock() {
//   const component = useRef(null); // we only need a ref for the root-level element of this component so we can use selector text for everything else.

//   useEffect(() => {
//     console.log("useEffect() call", ++callCount, "(React 18 strict mode calls twice!)");
    
//     // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
//     // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...)) 
//     let ctx = gsap.context(() => {
//       // create as many GSAP animations and/or ScrollTriggers here as you want...
//       gsap.from("h1", { // <- selector text, scoped to this component!
//         opacity: 0,
//         y: 100,
//         ease: "power3",
//         duration: 2
//       });
//     }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
    
//     return () => ctx.revert(); // cleanup! 
//   }, []);

//   return (
//     <div ref={component} className="App">
//       <h1>gsap.context() + React = 💚</h1>
//     </div>
//   );
// }

// root.render(
//   <StrictMode>
//     <GreenSock />
//   </StrictMode>
// );

// export default GreenSock;