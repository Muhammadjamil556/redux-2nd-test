import React from "react";

import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { alpha, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const ProfileCard = (props) => {
  const {
    CreatorsByName: { CreatorsByNameData },
  } = useSelector((state) => state);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.media}>
        <img
          src={CreatorsByNameData.img}
          alt=""
          style={{}}
          className={classes.image}
        />
      </Box>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardMedia />

          <CardContent className={classes.cardTitleContainer}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.avatarLink}
            >
              {CreatorsByNameData.walletAddress}
            </Typography>
            <Typography variant="h5" component="h2">
              {CreatorsByNameData.fullName}
            </Typography>
            <Typography variant="body1" component="h2">
              @{CreatorsByNameData.username}
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.avatarLink}
            >
              <Box className={classes.cardLink} mt={1}>
                {" "}
                {CreatorsByNameData.bio}
              </Box>
            </Typography>
            <Divider className={classes.cardDivider} variant="middle" />
            <Box mt={1}>
              <Typography variant="body2" component="p">
                {CreatorsByNameData.email}
              </Typography>
            </Box>

            <Box className={classes.cardButton}>
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </Box>
            <Divider className={classes.cardDivider} />
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </>
  );
};

export default ProfileCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    boxShadow: "0px 0px 10px rgb(0 0 0 / 15%)",
    borderRadius: 16,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },
  media: {
    position: "relative",
    top: 95,
    left: 2,
    margin: "20px 50px",
    zIndex: 1,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      left: 5,
    },
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "100%",
    border: "5px solid #fff",
    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
  },
  cardTitleContainer: {
    textAlign: "center",

    marginTop: 108,
    width: "250px",
    padding: "10px",
  },

  cardLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0px",
  },

  avatarLink: {
    fontSize: 14,

    padding: "10px",
    overflow: "hidden",
  },
  cardDivider: { margin: 0 },
  cardButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "30px 0px",
  },
}));
