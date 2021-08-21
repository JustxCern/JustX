import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ReactDOM from "react-dom";
import React from "react";
import { Menu, Row, Typography } from "antd";
import { RiCriminalLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const { Title } = Typography;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

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
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="report" icon={<RiCriminalLine />}>
              <div class="centered-label">
                {
                  <RiCriminalLine
                    size={20}
                    color="blue"
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
                    color="black"
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
                Educate
              </div>
            </Menu.Item>
          </Menu>
        </Row>
      </>
    );
  }
}

export default App;
