import React from "react";

import AppText from "../AppText/AppText";
import "./OverviewCard.css";

let dollarUSLocale = Intl.NumberFormat("en-US");

export default function OverviewCard({ label, amount, inc, bgColor, icon, money }) {
  return (
    <div className="overviewCard">
      <div className="left">
        {money ? (
          <AppText center header content={`NGN ${dollarUSLocale.format(amount)}`} />
        ) : (
          <AppText center header content={amount} />
        )}
        <AppText center content={label} />
      </div>
      <div className="right">
        {/* <i className={`fas ${icon} card_icon`}></i> */}
        <i className={`${icon} icon`}></i>
      </div>
    </div>
  );
}
