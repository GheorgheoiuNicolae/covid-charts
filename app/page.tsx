"use client";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import { NextPage } from "next";
import React from "react";
import BarWidget from "./components/barWidget/barWidget";
import LineWidget from "./components/lineWidget/lineWidget";
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

const chartsWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const Home: NextPage = ({ apiData }: any) => {
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
              <h3 style={{ margin: 0 }}>Page title</h3>
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
            <section className="container" style={chartsWrapperStyles}>
              <LineWidget />
              <BarWidget />
            </section>
          </div>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default Home;
