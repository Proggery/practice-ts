import {FC} from "react";
import {AppStyled} from "./App.styled";
import Counter from "./components/Counter";
import KeysOfObj from "./components/KeysOfObj";
import Users from "./components/Users";

const App: FC = () => {
  return (
    <AppStyled>
      <Counter />
      <Users />
      <KeysOfObj />
    </AppStyled>
  );
};

export default App;
