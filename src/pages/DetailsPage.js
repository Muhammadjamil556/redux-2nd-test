import { alpha, Box, CircularProgress, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/cards/userProfile";
import { getCreatorsDataByName } from "../Redux/apiCalls";
export const DetailsPage = () => {
  const classes = useStyles();
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreatorsDataByName(params.CreatorsByName));
  }, [params]);

  const {
    CreatorsByName: { CreatorsByNameData, CreatorsByNameDataLoading },
  } = useSelector((state) => state);

  return (
    <>
      {CreatorsByNameDataLoading ? (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={classes.backgroundColor}>
          <Box
            className={classes.backgroundImage}
            style={{ backgroundImage: `url('${CreatorsByNameData.cover}')` }}
          ></Box>
          <Box className={classes.Arraybuttoncontainer}>
            <Box className={classes.avatarCard}>
              <ProfileCard />
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    position: "relative",
    width: "100%",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "35vh",
    },
  },
  loader: {
    position: "absolute",
    top: 330,
    left: 600,
  },

  avatarCard: {
    position: "relative",
    bottom: "11.9rem",
    left: "5rem",
    width: 250,

    [theme.breakpoints.down("sm")]: {
      left: "15rem",
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      left: "2.4em",
    },
  },
}));
