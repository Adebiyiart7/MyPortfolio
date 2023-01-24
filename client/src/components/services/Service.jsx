import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    display: "inline-block",
    width: 120,
    height: 100,
  },
  service: {
    margin: "20px 10px",
    textAlign: "center",
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    margin: "10px 0"
  }
});

const Service = ({ icon, text, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.service}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default Service;
