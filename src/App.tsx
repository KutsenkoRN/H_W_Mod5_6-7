import React, { createContext, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";
import AuthStore from "./stores/AuthStore";
import { IAppStore } from "./interfaces/appStore";

const store: IAppStore = {
  'authStore': new AuthStore()
}
export const AppStoreContext = createContext(store);

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#866eff",
        main: "#7d63ff",
        dark: "#70679e",
        contrastText: "#000",
      },
      secondary: {
        main: "#7963eb",
        light: "#9481f7",
        dark: "#5c4da8",
        contrastText: "#000",
      },
    },
  });

  const [appStore, setAppStore] = useState(store);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppStoreContext.Provider value={appStore}>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </AppStoreContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
