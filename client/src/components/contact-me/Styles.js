import { makeStyles } from "@mui/styles";

export const styles = (mediaQueries) => {
  const { tablet } = mediaQueries;

  return {
    body: {
      flex: 1,
      display: tablet ? "initial" : "flex",
      justifyContent: "space-between",
    },
    buttonStyles: {
      padding: "7px 30px",
      borderRadius: 4,
    },
    contactInfo: {
      color: "var(--primaryText)",
    },
    intro: {
      textAlign: "center",
      fontSize: 18,
      color: "var(--primaryText)",
      marginBottom: 20,
    },
    left: {
      flex: 0.3,
      maxWidth: 400,
      margin: "auto",
    },
    right: {
      flex: 0.7,
      width: "100%",
      maxWidth: 400,
      margin: "auto",
    },
    titleStyles: {
      color: "var(--primaryText)",
    },
  };
};

export const useStyles = makeStyles({
  formField: {
    marginBottom: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 20,
    color: "var(--primaryText)",
  },
});
