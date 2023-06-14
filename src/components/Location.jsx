import React, { useState, useEffect } from "react";

function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {latitude && longitude ? (
            <>
              <p>Lat: {latitude} Long: {longitude}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
}

export default Location;
