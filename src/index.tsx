import * as ReactDOM from "react-dom/client";
import App from "./App";

const rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(<App />);
