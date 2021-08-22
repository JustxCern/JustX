import { AppstoreOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse } from "antd";
import { Menu, Row, Typography } from "antd";
import { FaUniversity } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { RiCriminalLine } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { GiInjustice } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const { Panel } = Collapse;
const { Title } = Typography;

class App extends React.Component {
  state = {
    current: "mail",
  };
  constructor() {
    super();
    this.state = { render: "" };
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "report":
        return <Report />;
    }
  }
  render() {
    const { current } = this.state;
    return (
      <>
        <Row
          style={{ backgroundColor: "rgb(255, 255, 95)" }}
          justify="center"
          align="top"
        >
          <div class="centered-title">
            <Title>JustX</Title>
          </div>
          <Menu
            onClick={this.handleClick.bind(this, "report")}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="report" icon={<RiCriminalLine />} to="/groups">
              <div class="centered-label">
                {
                  <RiCriminalLine
                    size={20}
                    color="black"
                    style={{ marginRight: "5px" }}
                  />
                }
                Report
              </div>
            </Menu.Item>
            <Menu.Item key="educate" disabled icon={<AppstoreOutlined />}>
              <div class="centered-label">
                {
                  <FaUniversity
                    size={20}
                    color="blue"
                    style={{ marginRight: "5px" }}
                  />
                }
                Educate
              </div>
            </Menu.Item>
            <Menu.Item key="settings" disabled icon={<AppstoreOutlined />}>
              <div class="centered-label">
                {
                  <AiFillSetting
                    size={20}
                    color="black"
                    style={{ marginRight: "5px" }}
                  />
                }
                Preferences
              </div>
            </Menu.Item>
          </Menu>
        </Row>
        <Row id="body"></Row>
        {this._renderSubComp()}
      </>
    );
  }
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Report extends React.Component {
  render() {
    return (
      <Collapse defaultActiveKey={["1"]}>
        <Panel
          showArrow={false}
          header={
            <div class="centered-label">
              {
                <GrUserPolice
                  size={20}
                  color="black"
                  style={{ marginRight: "5px" }}
                />
              }{" "}
              Stopped by Police
            </div>
          }
          key="1"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header={
            <div class="centered-label">
              {
                <GiInjustice
                  size={20}
                  color="black"
                  style={{ marginRight: "5px" }}
                />
              }{" "}
              Voting Rights
            </div>
          }
          key="2"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header={
            <div class="centered-label">
              {
                <IoIosPeople
                  size={20}
                  color="black"
                  style={{ marginRight: "5px" }}
                />
              }{" "}
              Protestors' Rights
            </div>
          }
          key="3"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }
}

export default App;
