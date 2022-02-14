import loadingGif from "../assets/loading-football.gif";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  loader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <img src={loadingGif} alt="loading..." />
    </div>
  );
};

export default Loading;
