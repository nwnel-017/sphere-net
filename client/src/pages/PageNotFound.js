import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <h3>
        Go back to the <Link to="/">Home Page</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;
