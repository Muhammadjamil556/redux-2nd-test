import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Avatar,
  Box,
  CircularProgress,
  Popper,
  Typography,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
// import HamBurger from "../HamBurger";
import { makeStyles } from "@material-ui/core";
import Buttons from "../buttons/buttons";
import { useDispatch, useSelector } from "react-redux";
import { inputField } from "../../Redux/creators.Slice";
import { getCreatorsData } from "../../Redux/apiCalls";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    CreatorsData: { filterData, creatorsDataLoading },
  } = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Data, setData] = React.useState([]);
  console.log(filterData, "babile");
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setData(filterData);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const navigate = useNavigate();
  const handleNav = (country) => {
    navigate(`/${country}`);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.headerContainer}>
        <Link to="/" className={classes.underline}>
          <img
            src="https://boax.io/static/media/logo.5f028022.png"
            alt="logo"
            className={classes.logo}
          />
        </Link>
        <Box onClick={handleClick} className={classes.inputHandleContainer}>
          <input
            autoCapitalize="words"
            type="text"
            placeholder="Search here for creators"
            className={classes.inputHandle}
            aria-describedby={id}
            onChange={(e) => {
              if (e.target.value === "") {
              } else {
                dispatch(inputField(e.target.value));
              }
            }}
          />
          <Box>
            <SearchIcon className={classes.SearchIcon} />
          </Box>
        </Box>

        <div>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>
              {creatorsDataLoading ? (
                <Box className={classes.loader}>
                  <CircularProgress />
                </Box>
              ) : (
                filterData.map((element, index) => {
                  return (
                    <div className={classes.outerContainer}>
                      <div
                        onClick={() => handleNav(element.username)}
                        className={classes.creatorContainer}
                      >
                        <Avatar alt="Remy Sharp" src={element.creator_img} />

                        <h5 className={classes.creatorFullName}>
                          {element.fullName}
                        </h5>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Popper>
        </div>
        <Box
          className={classes.HamburgerClosed}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/Market" className={classes.underline}>
            <Typography variant="h6" className={classes.typo} color="inherit">
              <b> Market</b>
            </Typography>
          </Link>
          <Link to="/Artists" className={classes.underline}>
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> Artists</b>
            </Typography>
          </Link>

          <Link to="/AboutUs" className={classes.underline}>
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> About Us</b>
            </Typography>
          </Link>
          <Link to="/Labs" className={classes.underline}>
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> Labs</b>
            </Typography>
          </Link>
          <Link to="/Blog" className={classes.underline}>
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> Blog</b>
            </Typography>
          </Link>
          <Link to="/FAQs" className={classes.underline}>
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> FAQs</b>
            </Typography>
          </Link>
        </Box>
        <Box className={classes.authnavabar}>
          <Box className={classes.buttons}>
            <Buttons variant="outlined">create Nft</Buttons>
            <Buttons>connect to wallet</Buttons>
          </Box>
        </Box>
        {/* <HamBurger /> */}
      </Box>
    </Box>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "0px 2px 4px 2px #8e8c8a87",
    borderRadius: "5px",
    width: "250px",
    backgroundColor: "#FEFDFD",

    position: "relative",
    top: 2,
    left: 9,
  },
  HamburgerClosed: {
    display: "flex",
    listStyle: "none",
    gap: "22px",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    width: 170,
    height: 70,
    objectFit: "contain",
  },
  inputHandleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  inputHandle: {
    position: "relative",
    width: 200,
    height: 35,
    border: "1px solid rgb(156, 154, 154) !important",
    borderRadius: 7,
    padding: "0px 5px",
  },
  outerContainer: {
    padding: "3px 6px",
  },
  creatorContainer: {
    display: "flex",
    padding: 5,
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0px 2px 4px 2px #8e8c8a87",
    },
  },
  creatorFullName: {
    margin: 0,
    padding: 5,
    display: "flex",
    alignItems: "center",
  },

  SearchIcon: {
    position: "relative",
    left: -30,
    top: 1,
    color: "#959595",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "hsl(0, 0%, 100%)",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },

  authnavabar: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  underline: {
    textDecoration: "none",
  },

  typo: {
    color: "#000",
    paddingTop: 20,
    "&:hover": {
      color: "grey",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    width: 310,
  },
}));
