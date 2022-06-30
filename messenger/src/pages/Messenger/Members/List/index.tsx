import { FC } from "react";
import "./style.scss";
import { useGetConversationsQuery } from "storage/services/groupApi";
import Member from './Member';

const List: FC = () => {
  const { data } = useGetConversationsQuery();

  console.log(data);

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
