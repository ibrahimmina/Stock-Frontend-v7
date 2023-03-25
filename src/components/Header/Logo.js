import React from "react";

const Logo = () => {
  return (
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">AI Trade</span>
      </a>
    </div>
  );
};

export default Logo;
