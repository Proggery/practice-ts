import {FC} from "react";
import {UserName} from "../interfaces";

interface IProps {
  name: UserName;
}

const FullUserName: FC<IProps> = ({ name }) => {
  const { first, last } = name;
  return (
    <>
      <h4>
        First Name: <span>{first}</span>
      </h4>
      <h4>
        Last Name: <span>{last}</span>
      </h4>
    </>
  );
};

export default FullUserName;
