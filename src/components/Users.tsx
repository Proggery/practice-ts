import {FC, useEffect, useState} from "react";
import {UsersStyled} from "../App.styled";
import {fetchNextData} from "../fetchdatas";
import {UserInfo} from "../interfaces";
import {useAppSelector} from "../redux/hooks";
import FullUserName from "./FullUserName";

const Users: FC = () => {
  const { page } = useAppSelector((state) => state.pages);

  const [userInfos, setUserInfos] = useState<any>([]);

  useEffect(() => {
    fetchNextData(page).then((nextPage) => {
      setUserInfos([...userInfos, ...nextPage.results]);
    });
  }, [page]);

  return (
    <>
      {userInfos.map(({ picture, name }: UserInfo, index: number) => (
        <UsersStyled key={index}>
          <img src={picture.thumbnail} alt={picture.thumbnail} />
          <FullUserName name={name} />
        </UsersStyled>
      ))}
    </>
  );
};

export default Users;
