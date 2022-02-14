import { AppBar, Typography } from "@mui/material";

import Logo from "../Logo";
import StatsTable from "./modules/StatsTable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerContent: {
    display: "flex",
  },
  appName: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

const RushStats = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#013778" }}>
        <div className={classes.headerContent}>
          <Logo />
          <Typography
            style={{ fontFamily: "NeueAachen" }}
            className={classes.appName}
            variant="h3"
          >
            The Rush
          </Typography>
        </div>
      </AppBar>
      <StatsTable />
    </>
  );
};

export default RushStats;
