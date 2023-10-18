import React, { FC, ReactNode, useContext } from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppStoreContext } from "../App";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const appStore = useContext(AppStoreContext);
  
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", 
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
