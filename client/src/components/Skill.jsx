import { makeStyles } from "@mui/styles";

import AppLinearProgress from "./reusable/AppLinearProgress";

const useStyles = makeStyles({
  skillText: { fontWeight: 500 },
  skillTextContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  skillValue: { fontWeight: "bold" },
});

const Skill = ({ mediaQueries, text, value }) => {
  const classes = useStyles();
  const { large } = mediaQueries;

  const styles = {
    skill: {
      margin: large ? "20px 0" : "20px",
    },
  };

  return (
    <div style={styles.skill}>
      <div className={classes.skillTextContainer}>
        <span className={classes.skillText}>{text}</span>
        <span className={classes.skillValue}>{value}%</span>
      </div>
      <AppLinearProgress value={value} />
    </div>
  );
};

export default Skill;
