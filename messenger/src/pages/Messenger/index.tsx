import { FC } from "react";
import { Row, Col } from "antd";
import Toolbar from "./components/Toolbar";
import Members from "./components/Members";
import ChatContent from "./components/ChatContent";
import "./style.scss";

interface IPropType {
}

const Messenger: FC<IPropType> = () => {
  return (
    <Row className="messenger">
      {/** Toolbar */}
      <Col  lg={1} className="app-toolbar">
        <Toolbar />
      </Col>

      {/** Members */}
      <Col lg={4} className="app-members">
        <Members />
      </Col>

      {/** Content */}
      <Col lg={19} className="app-content">
        <ChatContent />
      </Col>
    </Row>
  );
};

export default Messenger;