// import React, { useState } from "react";
// import marioImage from "../assets/mario2.png";
// import luigiImage from "../assets/luigi.png";

// function ImageConverter() {
//   const [count, setCount] = useState(0);
//   const [enlarged, setEnlarged] = useState(false);
//   const [imageUrl, setImageUrl] = useState(marioImage);

//   const handleClick = () => {
//     setCount(count + 1);
//     // setEnlarged(!enlarged);
//     setImageUrl(enlarged ? marioImage : luigiImage);
//   };

// //   const imageStyle = {
// //     width: enlarged ? "60%" : "35%",
// //   };

//   return (
//     <div className="mario-container">
//       <img
//         src={imageUrl}
//         alt="Character"
//         onClick={handleClick}
//         style={imageStyle}
//         className={enlarged ? "mario-image enlarged" : "mario-image"}
//       />
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default ImageConverter;

import React, { useState } from "react";
import marioImage from "../assets/mario.png";
import luigiImage from "../assets/luigi.png";
import poseImage from "../assets/marioluigiPose.png"

function MarioHead() {
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(marioImage);
  const [title, setTitle] = useState("It's-a-me, Mario!");
  const [winMessage, setWinMessage] = useState("");

  let message = "";
  const handleClick = () => {
    setImageUrl(imageUrl === marioImage ? luigiImage : marioImage);
    setTitle(title === "It's-a-me, Mario!" ? "Luigi Time!" : "It's-a-me, Mario!");
    setCount(count + 1);
    
    if (count === 50) {
      setWinMessage("Congrats, you reached 50");
      setImageUrl(poseImage);
      setTitle("Thanks For Playing!")
    }else{
        setWinMessage("");
    }
  };
  


  return (
    <div className="mario-container">
      <img
        src={imageUrl}
        alt="Character"
        onClick={handleClick}
        // className="mario-image"
        className='ML_image'
        style={{ width: "380px" }}
      />
      <p>Count: {count}</p>
      <p className="actionText">{title}</p>
      <p>{winMessage}</p>
    </div>
  );
}

export default MarioHead;
