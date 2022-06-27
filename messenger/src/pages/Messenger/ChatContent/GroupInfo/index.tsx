import { FC } from 'react';
import './style.scss';

interface IPropType {
  className: string;
}

const GroupInfo: FC<IPropType> = ({className}) => {
  return (
    <div className={className}>index component ready to use</div>
  );
};

export default GroupInfo;