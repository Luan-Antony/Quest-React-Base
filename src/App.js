import './App.css';
import Text from "./components/styledText/index"
import Button from "./components/alertButton/index"

function App() {
  return (
    <>
      <Text cor="red" texto="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web"/>

      <Button label="Sobre o React"/>
    </>
  );
}

export default App;
