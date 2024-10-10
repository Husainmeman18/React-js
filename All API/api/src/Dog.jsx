import React, { useState, useEffect } from "react";
function Dog() {
  const [Img, SetImg] = useState("");

  const handleRefresh = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        SetImg(data.message);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleRefresh();
  }, []);
  return (
    <>
      {Img && <img src={Img} alt="random" width="400px" />}
      <br />
      <br />
      <br />
      <button onClick={handleRefresh}>Refresh Image</button>
    </>
  );
}

export default Dog;
