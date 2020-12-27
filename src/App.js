import {
  Button,
  createMuiTheme,
  Paper,
  Switch,
  ThemeProvider,
} from "@material-ui/core";
import { green, lime } from "@material-ui/core/colors";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: lime[500],
      },
      secondary: {
        main: green["A400"],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ width: "100%", height: "100vh" }}>
        <Switch checked={dark} onChange={(e) => setDark(e.target.checked)} />
        <Button>Default Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary" variant="contained">
          Secondary Button
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary Button
        </Button>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
