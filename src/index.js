import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./App-v2";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p> This movei was rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={6}
      messages={["crap", "reasonable", "ok", "good", "da bomb", "fuck yeah!"]}
    /> */}

    {/* <StarRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={5}
    />
    <Test /> */}
  </React.StrictMode>
);
