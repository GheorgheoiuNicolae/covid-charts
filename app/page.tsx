"use client";
import { DownloadOutlined } from "@ant-design/icons";
import { Bar } from "@antv/g2plot";
import { Button, Layout, Space } from "antd";
import React, { RefObject, useEffect, useRef } from "react";

const { Header, Footer, Content } = Layout;

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "#f7f8f7",
};
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  display: "flex",
  justifyContent: "center",
  boxShadow: "2px 3px 3px 0 rgb(0 0 0 / 8%)",
  marginBottom: "20px",
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const pageHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 115 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 },
];
export default function Home() {
  const containerRef: RefObject<any> = useRef(null);
  let stackedBarPlot: any;

  useEffect(() => {
    stackedBarPlot = new Bar(containerRef.current, {
      data: data.reverse(),
      isStack: false,
      xField: "sold",
      yField: "genre",
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
  }, []);

  useEffect(() => {
    stackedBarPlot.render();
  }, []);

  return (
    <Space direction="vertical" size={[0, 48]} style={wrapperStyle}>
      <Layout>
        <Header style={headerStyle}>
          <div className="container">
            <h3 style={{ margin: 0 }}>Covid Statistics app</h3>
          </div>
        </Header>
        <Content style={contentStyle}>
          <div className="container">
            <section className="page-heading container" style={pageHeaderStyle}>
              <h3 style={{ margin: 0 }}>Covid Statistics app</h3>
              <div className="buttons">
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Export to PDF
                </Button>
                <Button
                  type="default"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Notes (3)
                </Button>
                <Button
                  type="default"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Filter
                </Button>
              </div>
            </section>
            <section>
              <div style={{ maxWidth: "1200px" }} ref={containerRef}></div>
            </section>
          </div>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}
