import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";

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
    </>
  );
}

export default App;
