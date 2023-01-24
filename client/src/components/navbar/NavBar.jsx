import { makeStyles } from "@material-ui/core";

import Logo from "./Logo";
import Navigations from "./Navigations";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
  },
}));

const NavBar = ({ mediaQueries }) => {
  const classes = useStyles();
  const {tablet} = mediaQueries

  return (
    <nav
      className={classes.container}
      style={{
        flexDirection: tablet ? "column" : "row",
        alignItems: tablet ? "initial" : "center",
      }}
    >
      <Logo mediaQueries={mediaQueries} />
      <Navigations mediaQueries={mediaQueries} />
    </nav>
  );
};

export default NavBar;
