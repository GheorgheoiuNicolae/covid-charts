"use client";
import { Bar, Line } from "@antv/g2plot";
import { RefObject, useEffect, useRef, useState } from "react";

function LineWidget() {
  const [data, setData] = useState();
  const [initialRender, setInitialRender] = useState(true);
  const containerRef: RefObject<any> = useRef(null);
  let stackedBarPlot: any;

  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
      const result = await res.json();
      setData(result.data);
    };
    getApiData();
  }, []);

  useEffect(() => {
    if (data) {
      stackedBarPlot = new Line(containerRef.current, {
        data: data,
        height: 500,
        isStack: false,
        xField: "date",
        yField: "deathNew",
        // seriesField: "type",
        autoFit: false,
        label: {
          position: "left", // 'left', 'middle', 'right'
          layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" },
          ],
        },
      });
    }
  }, [data]);

  useEffect(() => {
    if (data && initialRender) {
      console.log("rendering: ", data);
      stackedBarPlot.render();
      setInitialRender(false);
    }
  }, [data]);

  const results = data;
  console.log(results);
  return (
    <section style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <h3 style={{ marginBottom: "30px" }}>New deaths by Date</h3>
      <div style={{ flex: "1" }} ref={containerRef}></div>
    </section>
  );
}

export default LineWidget;
