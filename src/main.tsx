import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./layout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Layout>
    <App />
  </Layout>
);
