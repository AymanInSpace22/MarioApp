// import React, { useState } from "react";
// import marioImage from "../assets/mario2.png";

// function MarioHead() {
//   const [count, setCount] = useState(0);
//   const [enlarged, setEnlarged] = useState(false);

//   const handleClick = () => {
//     setCount(count + 1);
//     setEnlarged(!enlarged);
//   };

//   const imageStyle = {
//     width: enlarged ? "100%" : "50%",
//   };

//   return (
//     <>
//       <img
//         src={marioImage}
//         alt="Mario"
//         onClick={handleClick}
//         style={imageStyle}
//       />
//       <p>Count: {count}</p>
//     </>
//   );
// }

// export default MarioHead;


import React, { useState } from "react";
import marioImage from "../assets/mario2.png";
import luigiImage from "../assets/luigi.png";
// import "./MarioHead.css";

function MarioHead() {
  const [count, setCount] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setEnlarged(!enlarged);
  };

//   const imageStyle = {
//     transform: enlarged ? "100%" : "50%",
//   };

    const imageStyle = {
    width: enlarged ? "60%" : "35%",
  };

  return (
    <div className="mario-container">
      <img
        src={marioImage}
        alt="Mario"
        onClick={handleClick}
        style={imageStyle}
        className={enlarged ? "mario-image enlarged" : "mario-image"}
      />
      <p>Count: {count}</p>
    </div>
  );
}

export default MarioHead;