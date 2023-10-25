import React from "react";

const UnlockRewardLinkWithBanner = ({
  handleClick = () => {},
  handleImageLoad = () => {},
  isLoggedIn = false,
  loyaltyAccount,
  SquareSkeleton,
  isImageLoading = true,
  classNameOne = "",
  classNameTwo = "",
  classNameThree = "",
  classNameFour = "",
}) => {
  return (
    <>
      <a href="/" onClick={handleClick} className={classNameOne}>
        {isImageLoading && (
          <div className={classNameTwo}>
            <SquareSkeleton />
          </div>
        )}
        {isLoggedIn ? (
          <img
            src={loyaltyAccount?.loggedIn}
            alt="LogIN"
            className={classNameThree}
            onLoad={handleImageLoad}
          />
        ) : (
          <img
            src={loyaltyAccount?.nonLoggedIn}
            alt="JoinIN"
            className={classNameFour}
            onLoad={handleImageLoad}
          />
        )}
      </a>
    </>
  );
};

export default UnlockRewardLinkWithBanner;
