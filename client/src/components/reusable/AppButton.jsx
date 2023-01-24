import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    display: "inline-block",
    padding: "10px 30px",
    border: "2px solid var(--primaryColor)",
    borderRadius: 30,
    backgroundColor: "var(--primaryColor)",
    color: "var(--white)",
    textShadow: "none !important",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "var(--primaryColor)",
    backgroundColor: "unset",
    },
  },
});

const AppButton = ({ text, addShadow = false, customStyles, onClick, otherProps }) => {
  const classes = useStyles();

  return (
    <button
      type="submit"
      className={classes.button}
      style={{
        textShadow: addShadow && "0 2px 5px #000",
        ...customStyles,
      }}
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default AppButton;
