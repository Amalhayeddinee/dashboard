import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="cov19-footer noselect">
      <h1>
        {" "}
     <FavoriteIcon
          fontSize="small"
          style={{ fill: "#ab1515" }}
        />{" "}
       <br />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "small",
          }}
        >
       
        </span>
      </h1>
    </div>
  );
};

export default Footer;
