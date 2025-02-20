// import { useState, useEffect } from "react";

// export default function OutsideClick(ref) {
//   const [isClicked, setIsClicked] = useState();
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setIsClicked(true);
//       } else {
//         setIsClicked(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
//   return isClicked;
// }

// Website related settings

const settings = {
  useCustomCursor: true,
  googleTrackingID: "UA-174238252-2",
};

export { settings };
