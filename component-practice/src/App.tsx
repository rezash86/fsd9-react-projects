import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ExapndableText from "./components/ExapndableText";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Some value</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        This is my awesome button
      </Button>
      <ExapndableText maxChars={50}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
        quibusdam id dolor, veniam culpa ad earum placeat vel qui error incidunt
        impedit suscipit dignissimos harum porro nesciunt quos similique
        voluptatibus?
      </ExapndableText>
    </>
  );
}

export default App;
