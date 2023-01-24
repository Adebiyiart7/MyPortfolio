import { createTheme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import "@coreui/coreui/dist/css/coreui.min.css";

import AppContainer from "./components/AppContainer";

export const theme = createTheme();

function App() {
  const theme = useTheme();
  const mediaQueries = {
    small: useMediaQuery(theme.breakpoints.down(320)),
    medium: useMediaQuery(theme.breakpoints.down(375)),
    large: useMediaQuery(theme.breakpoints.down(425)),
    tablet: useMediaQuery(theme.breakpoints.down(768)),

    smallUp: useMediaQuery(theme.breakpoints.up(320)),
    mediumUp: useMediaQuery(theme.breakpoints.up(375)),
    largeUp: useMediaQuery(theme.breakpoints.up(425)),
    tabletUp: useMediaQuery(theme.breakpoints.up(768)),
  };

  return <AppContainer mediaQueries={mediaQueries} />;
}

export default App;
