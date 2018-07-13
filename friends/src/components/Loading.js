import React from "react";

const Loading = props => {
  console.log(props);

  return props.fetching ? (
    <div>
      <p>CONTACTING SERVER...</p>
      <img
        src="https://media1.giphy.com/media/3o8doMpxlWKWYqk6AM/giphy.gif"
        alt="loading animation"
        className="loading-animation"
      />
    </div>
  ) : null;
};

export default Loading;
