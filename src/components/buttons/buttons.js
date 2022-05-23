import { alpha, Button, withStyles } from "@material-ui/core";

/**
 * @dev custom button designed upon Material UI's Button component. It accepts all props the MuI button accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
export default withStyles((theme) => ({
  root: {
    // boxShadow: "0 0 10px -5px",
    borderRadius: 15,
    fontSize: 14,
    height: 45,
    fontWeight: 600,
    color: "white",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#101b72",
    "&:hover": {
      backgroundColor: alpha("#101b72", 0.8),
      transform: "translateY(-4px)",
      boxShadow: "1px 1px 7px 5px #afafaf78",
    },
  },

  outlined: {
    borderRadius: 15,
    fontSize: 14,
    height: 45,
    fontWeight: 600,
    color: "white",
    backgroundColor: "#b3a16c",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: alpha("#b3a16c", 0.8),
      transform: "translateY(-4px)",
      boxShadow: "1px 2px 7px 5px #afafaf78",
    },
  },
}))(Button);
