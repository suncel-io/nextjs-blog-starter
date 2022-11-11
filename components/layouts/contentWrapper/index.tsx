import classes from "./styles.module.scss";

export const ContentWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
