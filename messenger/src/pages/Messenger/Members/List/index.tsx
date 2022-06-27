import { FC } from "react";
import "./style.scss";
import Member from './Member';

const List: FC = () => {
  return (
    <div className="members-list">
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  );
};

export default List;
