import React from "react";
import "./styles.css";

export const HomeCardAvatarButton = (props) => {
  return (
    <>
      <div className="button___container">
        <button className="buttoncontainer">
          <img className="button_image" src={props.img} />
          <h4 className="button_title">@{props.name}</h4>
        </button>
      </div>
    </>
  );
};
