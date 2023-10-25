import { useState } from "react";
import css from "./index.module.scss";

const UnlockRewardLinkBanner = ({
  handleClick = () => {},
  isLoggedIn = false,
  loyaltyAccount,
  SquareSkeleton = <></>,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <>
      <a href="/" onClick={handleClick} className={css.unlockRewards}>
        {isImageLoading && (
          <div className={css.mainBox}>
            <SquareSkeleton />
          </div>
        )}
        {isLoggedIn ? (
          <img
            src={loyaltyAccount?.loggedIn}
            alt="LogIN"
            className={isImageLoading ? css.imgLoading : ""}
            onLoad={handleImageLoad}
          />
        ) : (
          <img
            src={loyaltyAccount?.nonLoggedIn}
            alt="JoinIN"
            className={isImageLoading ? css.imgLoading : ""}
            onLoad={handleImageLoad}
          />
        )}
      </a>
    </>
  );
};

export default UnlockRewardLinkBanner;
