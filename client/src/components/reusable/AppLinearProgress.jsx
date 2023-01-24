export default function AppLinearProgress({thickness=6, value=100}) {
  const styles = {
    inner: {
      borderBottom: `${thickness}px solid var(--primaryColor)`,
      borderRadius: 20,
      width: `${value}%`,
    },
    outer: {
      backgroundColor: "var(--appBackground)",
    },
  };

  return (
    <div style={styles.outer}>
      <div style={styles.inner}></div>
    </div>
  );
}
