import React from "react";

import "./Tag.css";
import AppText from "../AppText/AppText";

export default function Tag({ label, active, handleClick }) {
  const _active = active ? "active_tag" : "";

  return (
    <div className={`tag ${_active}`} onClick={handleClick}>
      <AppText invert={active} content={label} />
    </div>
  );
}
