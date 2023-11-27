import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Righbar from "./components/Righbar";

import Stack from '@mui/material/Stack';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
// import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";



function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
<Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Righbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
