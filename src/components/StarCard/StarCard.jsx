import React from "react";

import AppText from "../AppText/AppText";
import "./StarCard.css";

function StarCard({ active, min, max, handleClick }) {
  const _active = active ? "active" : "";

  return (
    <div className={`starCard ${_active}`} onClick={handleClick}>
      <div className="stars">
        {Array(max)
          .fill({})
          .map((item, index) => (
            <i className={`fa fa-star star_icon`}></i>
          ))}
      </div>

      <AppText medium content={`${min} - ${max}`} />
    </div>
  );
}

export default StarCard;
