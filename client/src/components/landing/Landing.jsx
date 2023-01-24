import { makeStyles } from "@mui/styles";

import photo from "../../assets/img/photo.png";
import AppButton from "../reusable/AppButton";

const useStyle = makeStyles({
  actionContainer: {
    display: "block",
  },
  greeting: {
    fontSize: 20,
    fontWeight: 500,
    color: "var(--white)",
    textShadow: "0 0 5px #000",
  },
  landingContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  name: {
    fontWeight: 800,
    fontSize: 42,
    textTransform: "uppercase",
    fontFamily: "var(--appFontFamily)",
    color: "var(--white)",
    textShadow: "0 0 5px #000",
  },
  photo: {
    maxWidth: 370,
    width: "100%",
    borderRadius: "50%",
  },
  right: {},
  title: {
    color: "rgb(152, 152, 152)",
    fontWeight: 500,
  },
});

const Landing = ({ mediaQueries }) => {
  const classes = useStyle();
  const { medium, large, tablet, largeUp } = mediaQueries;

  // media queries
  const styles = {
    actionContainer: {
      marginTop: tablet ? 50 : 100,
    },
    landingContainer: {
      flexDirection: tablet ? "column" : "row",
      textAlign: tablet ? "center" : "initial",
      padding: largeUp ? "0 20px" : "initial",
    },
    name: {
      fontWeight: medium && 700,
      fontSize: medium && 35,
      lineHeight: large && 1.2,
    },
  };

  return (
    <div className={classes.landingContainer} style={styles.landingContainer}>
      <div className={classes.left}>
        <div>
          <div>
            <h5 className={classes.greeting}>Hello, Welcome to Xtraaa Technology</h5>
            <h1 className={classes.name} style={styles.name}>
              I am Adeeyo Joseph
            </h1>
            <p className={classes.title}>
              Full Stack Developer
            </p>
          </div>
          <div
            className={classes.actionContainer}
            style={styles.actionContainer}
          >
            <a href="/">
              <AppButton text="Download CV" addShadow />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.photo} src={photo} alt="" />
      </div>
    </div>
  );
};

export default Landing;
