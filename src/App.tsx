import "./App.css";
import { ConfigProvider, Button } from "antd";
import Layouts from "./Components/Layout";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Layouts />
    </ConfigProvider>
  );
}

export default App;
