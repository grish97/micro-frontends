import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Messenger.scss";

export default function Messenger() {
  useEffect(() => {
    //... load memners
    //... store in redux state
  }, []);

  return <div className="messenger-app"></div>;
}
