import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatorsData } from "../../Redux/apiCalls";
import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
export const Cards = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreatorsData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleNav = (country) => {
    navigate(`/${country}`);
  };

  const {
    CreatorsData: { creatorsDataList, creatorsDataLoading },
  } = useSelector((state) => state);

  return (
    <div className={classes.creatorsContainer}>
      {creatorsDataLoading ? (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      ) : (
        creatorsDataList.map((element, index) => {
          return (
            <>
              <div
                onClick={() => handleNav(element.username)}
                className={classes.singleCard}
              >
                <div className={classes.imagesContainer}>
                  {" "}
                  <div>
                    <img
                      className={classes.coverImage}
                      src={element.creator_cover}
                      alt=""
                    />
                    <img
                      className={classes.avatar}
                      src={element.creator_img}
                      alt=""
                    />
                  </div>
                </div>
                <div className={classes.detailsContainer}>
                  {" "}
                  <div>
                    <Typography className={classes.creatorName} variant="h4">
                      {" "}
                      {element.fullName}
                    </Typography>
                  </div>
                  <div>
                    <Typography className={classes.userName} variant="h6">
                      @{element.username}
                    </Typography>
                  </div>
                  <div className={classes.bio}>
                    <Typography variant="h6">{element.bio}</Typography>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  creatorsContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 25,
    marginTop: 60,
  },
  singleCard: {
    margin: "10px",
    borderRadius: 5,
    width: 310,
    height: 470,
    boxShadow: "0px 2px 4px 2px #8e8c8a87",
    backgroundColor: "#B5B5B5",
    transition: " all ease 300ms",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  imagesContainer: { position: "relative" },
  coverImage: {
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 48% 82%, 4% 93%, 0 100%, 0 0)",

    width: 310,
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    objectFit: "cover",
  },

  avatar: {
    width: 100,
    height: 100,

    position: "absolute",
    top: 130,
    left: 20,
    borderRadius: "50%",
    border: "4px solid #c2b489",
  },
  detailsContainer: {
    paddingTop: 35,
    paddingLeft: 20,
  },
  creatorName: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "600",
    paddingBottom: 10,
  },
  userName: {
    color: "#666666",
    fontSize: "1.25rem",
  },
  bio: {
    color: "white",
  },
  loader: {
    position: "absolute",
    top: 330,
    left: 600,
  },
}));
