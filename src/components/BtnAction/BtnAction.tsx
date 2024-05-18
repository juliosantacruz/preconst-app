import { ReactNode } from "react";
import './BtnAction.scss'


type BtnActionType = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

const BtnAction = ({ icon, onClick, className }: BtnActionType) => {
  return (
    <button className={className ? `btnAction ${className}` : "btnAction"} onClick={onClick}>
      {icon}
    </button>
  );
};

export default BtnAction;
