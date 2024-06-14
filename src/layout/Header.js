import React from "react";
import TopBar from "../components/header/TopBar";
import MiddleBar from "../components/header/MiddleBar";
import BottomBar from "../components/header/BottomBar";

const Header = () => {
  return (
    <div className="topbarColor position-sticky top-0 ">
<div className="d-lg-block d-none">      <TopBar />
</div>      <MiddleBar />
      <BottomBar />
    </div>
  );
};

export default Header;
