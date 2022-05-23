import React, { useEffect } from "react";

import "./styles.css";
import { HomeCardAvatarButton } from "../buttons/homeCardAvatarButton";
import { getFeaturedArt } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@material-ui/core";

export const HomeCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturedArt());
  }, []);

  const {
    FeaturedArt: { featuredArt, featuredArtLoading },
  } = useSelector((state) => state);

  // console.log(featuredArt.data.nfts, "asdasd");
  return (
    <>
      {" "}
      {featuredArtLoading ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        featuredArt.map(
          ({
            art_name,
            art_price,
            creator_name,
            creator_img,
            owner_img,
            owner_name,
          }) => {
            return (
              <>
                <div className="containerHome">
                  <div className="imageContainer">
                    <img src={creator_img} alt={creator_name} />
                  </div>
                  <div>
                    <HomeCardAvatarButton
                      name={creator_name}
                      img={creator_img}
                    />
                    <div className="titleContainer">
                      <h4>{art_name}</h4>
                    </div>

                    <div className="priceContainer">
                      <div className="price">
                        <div>
                          <p className="priceTitle">Reserved price</p>
                          <h1>{art_price}</h1>
                        </div>
                        <hr className="hrTag" />
                      </div>

                      <div className="ownerContainer">
                        <p className="priceTitle">Owned By</p>
                        <HomeCardAvatarButton
                          name={owner_name}
                          img={owner_img}
                        />
                      </div>
                    </div>
                    <div className="viewartButton">
                      <button>View Art Work </button>
                    </div>
                  </div>
                </div>
                <div className="auctionView">
                  <h3 className="auctionFooter"> Arts On Auction</h3>
                </div>
                <hr className="divider" />
              </>
            );
          }
        )
      )}
    </>
  );
};
