import {FC, lazy, useEffect} from "react";
import { Row, Col } from "antd";
import Toolbar from "./Toolbar";
import Members from "./Members";
import ChatContent from "./ChatContent";
import "./style.scss";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../storage/slices/authSlice";

interface IPropType {}

const Messenger: FC<IPropType> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCredentials({
      user: "Grisha",
      token: "42a2sd1a2s1d2a1sd2a13da654d3a4d65a4e63431441eqweqweqwe34235425(&^&()&)_("
    }));
  }, []);

  return (
    <Row className="messenger">
      {/** Toolbar */}
      <Col span={2} className="app-toolbar">
        <Toolbar />
      </Col>

      {/** Members */}
      <Col span={5} className="app-members">
        <Members />
      </Col>

      {/** Content */}
      <Col span={17} className="app-content">
        <ChatContent />
      </Col>
    </Row>
  );
};

export default Messenger;
