import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      LandingPage
      <Link to="./login"> login </Link>
    </div>
  );
}

export default LandingPage;
