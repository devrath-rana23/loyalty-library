import { useState } from "react";

const UnlockRewardLinkWithBanner = ({
  handleClick = () => {},
  isLoggedIn = false,
  loyaltyAccount,
  SquareSkeleton,
  classNameOne = "",
  classNameTwo = "",
  classNameThree = "",
  classNameFour = "",
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

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
