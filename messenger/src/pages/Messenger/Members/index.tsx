import { FC } from "react";
import { useGetGroupsQuery } from "storage/services/groupApi";
import Header from "./Header";
import List from "./List";
import "./style.scss";
import SearchGroup from './SearchGroup';

const Members: FC = () => {

  return (
    <div className="chat-content">
      <Header />

      <SearchGroup />

      <List />
    </div>
  );
};

export default Members;
