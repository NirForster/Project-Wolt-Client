import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./providers/userContext.tsx";
import { store } from "./state-redux/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserProvider>
);
