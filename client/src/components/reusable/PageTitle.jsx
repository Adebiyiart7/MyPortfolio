import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const PageTitle = ({ title, titleStyles }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(768));

  const styles = {
    lines: {
      fontSize: 20,
      fontWeight: 500,
      display: tablet ? "none" : "initial",
    },
    title: {
      fontWeight: 700,
      fontSize: tablet ? 35 : 42,
      textAlign: "center",
      padding: 20,
      textTransform: "uppercase",
      color: "var(--primaryText)",
      ...titleStyles,
    },
  };

  return (
    <h1 style={styles.title}>
      <span style={styles.lines}>----------------</span> {title}{" "}
      <span style={styles.lines}>----------------</span>
    </h1>
  );
};

export default PageTitle;
