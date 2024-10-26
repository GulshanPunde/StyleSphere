import React from "react";
import { useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-light">Useful links</h6>
      <p>
        <span
          className="text-reset"
          onClick={() => handleNavigation("/profile")}
          style={{ cursor: "pointer" }}
        >
          Account
        </span>
      </p>
      <p>
        <span
          className="text-reset"
          onClick={() => handleNavigation("/settings")}
          style={{ cursor: "pointer" }}
        >
          Settings
        </span>
      </p>
      <p>
        <span
          className="text-reset"
          onClick={() => handleNavigation("/cart")}
          style={{ cursor: "pointer" }}
        >
          Checkout
        </span>
      </p>
      <p>
        <span
          className="text-reset"
          onClick={() => handleNavigation("/help")}
          style={{ cursor: "pointer" }}
        >
          Help
        </span>
      </p>
    </div>
  );
}

export default Links;
