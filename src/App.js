import React from 'react';
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
          <main className="content" style={{ marginLeft: isSmallScreen && isSidebar ? '50px' : '0' }}>
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/" element={ <Dashboard />}/>
              <Route path="/team" element={ <Team />}/> 
              
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>  
    </ColorModeContext.Provider>
   
  );
}
export default App;