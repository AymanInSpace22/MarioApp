import React, { useState, useEffect } from "react";

function BitcoinPrice() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();

        if (response.ok) {
          setPrice(data.bitcoin.usd);
        } else {
          setError("Unable to fetch Bitcoin price.");
        }
      } catch (error) {
        setError("An error occurred while fetching the Bitcoin price.");
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : price ? (
        <>
          <p>Bitcoin <span><i class="fa fa-btc" aria-hidden="true"></i></span> : ${price}</p>
          <p></p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BitcoinPrice;
