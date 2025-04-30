import DefaultHeader from "./DefaultHeader";
import React from "react";

const Header = ({ header, contactButton, cartButton }) => {
  switch (header) {
    case 1:
      return (
        <DefaultHeader
          contactButton={contactButton}
          cartButton={cartButton}
        />
      );

    default:
      return (
        <DefaultHeader
          contactButton={contactButton}
          cartButton={cartButton}
        />
      );
  }
};
export default Header;
