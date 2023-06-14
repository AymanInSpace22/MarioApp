// import React from "react";

// function IP() {
//     // Make a GET request to the ipify API
//     fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => {
//             // Extract the IP address from the response
//             const ipAddress = data.ip;

//             // Use the IP address as needed
//             console.log('IP Address HI:', ipAddress);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     return (
//         <p>{ipAddress}</p>
//     );
//     console.log("WHAT IS WRONG " + ipAddress);
// }

// export default IP;

import React, { useEffect, useState } from "react";

function IP() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        // Extract the IP address from the response
        const ipAddress = data.ip;

        // Set the IP address in the state
        setIpAddress(ipAddress);

        // Use the IP address as needed
        console.log('IP Address:', ipAddress);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
        <p>IP Address: {ipAddress}</p>
    </>
    
  );
}

export default IP;




