import { ReactNode } from "react";

type BtnActionType = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

const BtnAction = ({ icon, onClick, className }: BtnActionType) => {
  return (
    <button className={className ? className : ""} onClick={onClick}>
      {icon}
    </button>
  );
};

export default BtnAction;
