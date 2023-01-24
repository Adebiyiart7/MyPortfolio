import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  logo: {
    color: "var(--primaryColor)",
    fontWeight: 800,
  },
});

const title = "Xtraaa";

const Logo = ({ mediaQueries: { tablet } }) => {
  const classes = useStyle();
  const styles = {
    logo: {
      width: tablet ? 200 : "initial",
      fontSize: tablet ? 35 : 50,
    },
  };
  
  return (
    <a className={classes.logo} style={styles.logo} href="/">
      {title}
    </a>
  );
};

export default Logo;
