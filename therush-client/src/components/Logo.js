import logo from "../static/images/score-logo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    width: 50,
    height: 50,
  },
});

const Logo = () => {
  const classes = useStyles();
  return <img className={classes.logo} src={logo} alt="Logo" />;
};

export default Logo;
