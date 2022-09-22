import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { KeysOfObjStyled } from "../App.styled";
import { fetchData } from "../fetchdatas";

const KeysOfObj: FC = () => {
  const [location, setLocation] = useState<{}>({});
  const [locationKeys, setLocationKeys] = useState<string[]>();

  useEffect(() => {
    fetchData().then(({ results }) => {
      setLocation(results[0].location);
    });
  }, []);
  useEffect(() => {
    setLocationKeys(Object.keys(location));
  }, [location]);

  //  const keysLength = locationKeys?.length;

  return (
    <KeysOfObjStyled keyslength={locationKeys?.length}>
        {locationKeys?.map((keyName, index) => (
          <div className="item" key={index}>
            {keyName}
          </div>
        ))}
    </KeysOfObjStyled>
  );
};

export default KeysOfObj;
