import { useState as L } from "react";
const c = ({
  handleClick: n = () => {
  },
  isLoggedIn: s = !1,
  loyaltyAccount: e,
  SquareSkeleton: m,
  classNameOne: r = "",
  classNameTwo: t = "",
  classNameThree: g = "",
  classNameFour: i = ""
}) => {
  const [d, I] = L(!0), a = () => {
    I(!1);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", { href: "/", onClick: n, className: r }, d && /* @__PURE__ */ React.createElement("div", { className: t }, /* @__PURE__ */ React.createElement(m, null)), s ? /* @__PURE__ */ React.createElement(
    "img",
    {
      src: e == null ? void 0 : e.loggedIn,
      alt: "LogIN",
      className: g,
      onLoad: a
    }
  ) : /* @__PURE__ */ React.createElement(
    "img",
    {
      src: e == null ? void 0 : e.nonLoggedIn,
      alt: "JoinIN",
      className: i,
      onLoad: a
    }
  )));
};
export {
  c as UnlockRewardLinkWithBanner
};
