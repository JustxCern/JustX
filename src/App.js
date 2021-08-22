import { AppstoreOutlined } from "@ant-design/icons";
import React from "react";
import {
  Collapse,
  Menu,
  Row,
  Col,
  Typography,
  Checkbox,
  PageHeader,
} from "antd";
import { FaUniversity } from "react-icons/fa";
import { AiFillSetting, AiFillSound } from "react-icons/ai";
import { RiCriminalLine } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { GiInjustice } from "react-icons/gi";
import { IoIosPeople, IoMdSettings } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdSettingsApplications } from "react-icons/md";

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
  handleClick(e) {
    this.setState({ render: e.key });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "report":
        return <Report />;
      case "educate":
        return <Educate />;
      case "preferences":
        return <Preferences />;
    }
  }
  render() {
    const { current } = this.state;
    return (
      <>
        <Row
          style={{ backgroundColor: "#fffc00" }}
          justify="center"
          align="top"
        >
          <div
            class="centered-title"
            style={{ marginTop: "1px", marginBottom: "-8px" }}
          >
            <Title>JustX</Title>
          </div>
          <Menu
            onClick={this.handleClick.bind(this)}
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
            <Menu.Item key="educate" icon={<AppstoreOutlined />}>
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
            <Menu.Item key="preferences" icon={<AppstoreOutlined />}>
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

class Educate extends React.Component {
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

class Preferences extends React.Component {
  render() {
    return (
      <>
        <div class="centered-label">
          <Checkbox.Group>
            <Row>
              <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title={
                  <div class="centered-label">
                    <BsCameraVideoFill
                      size={20}
                      color="black"
                      style={{ marginRight: "5px" }}
                    />
                    Video preferences
                  </div>
                }
              />
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="A">Capture video using front-camera</Checkbox>
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="B">Turn off screen while recording</Checkbox>
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="C">Double tap screen to stop recording</Checkbox>
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="D">Keep a local copy of videos</Checkbox>
            </Row>

            <Row>
              <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title={
                  <div class="centered-label">
                    <AiFillSound
                      size={20}
                      color="black"
                      style={{ marginRight: "5px" }}
                    />
                    Sound preferences
                  </div>
                }
              />
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="A">
                SOS emergency sound with volume-up key
              </Checkbox>
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="B">Turn off speaker when app is in use</Checkbox>
            </Row>

            <Row>
              <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title={
                  <div class="centered-label">
                    <IoMdSettings
                      size={20}
                      color="black"
                      style={{ marginRight: "5px" }}
                    />
                    App behavior
                  </div>
                }
              />
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="A">Periodically send diagnostic data</Checkbox>
            </Row>
            <Row type="flex" align="middle" style={{ marginLeft: "30px" }}>
              <Checkbox value="B">Enable high-contrast mode</Checkbox>
            </Row>
          </Checkbox.Group>
        </div>
      </>
    );
  }
}

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
