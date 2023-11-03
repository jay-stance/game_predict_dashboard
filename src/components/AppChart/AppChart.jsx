import React, { useState, useCallback } from "react";
import ReactApexChart from "react-apexcharts";

import "./AppChart.css";
import Tag from "../Tag/Tag";
import AppText from "../AppText/AppText";

const AppChart = ({ style, chartData, type, timeStamps, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="chart" style={style} className="appChart">
      <div>
        {title && (
          <AppText
            medium
            center
            content={title}
            style={{
              marginBottom: 10,
            }}
          />
        )}

        <ReactApexChart
          className="main_chart"
          options={chartData.options}
          series={chartData.series}
          type={type}
          height="100%"
        />
      </div>

      {timeStamps && (
        <div className="tags">
          {timeStamps.map((item, index) => {
            return (
              <Tag
                label={item}
                active={index === activeIndex}
                handleClick={() => {
                  setActiveIndex(index);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppChart;
