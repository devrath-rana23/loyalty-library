import e from "react";
const L = ({
  handleClick: n = () => {
  },
  handleImageLoad: m = () => {
  },
  isLoggedIn: a = !1,
  loyaltyAccount: r,
  SquareSkeleton: s,
  isImageLoading: i = !0,
  classNameOne: g = "",
  classNameTwo: E = "",
  classNameThree: N = "",
  classNameFour: d = ""
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("a", { href: "/", onClick: n, className: g }, i && /* @__PURE__ */ e.createElement("div", { className: E }, /* @__PURE__ */ e.createElement(s, null)), a ? /* @__PURE__ */ e.createElement(
  "img",
  {
    src: r == null ? void 0 : r.loggedIn,
    alt: "LogIN",
    className: N,
    onLoad: m
  }
) : /* @__PURE__ */ e.createElement(
  "img",
  {
    src: r == null ? void 0 : r.nonLoggedIn,
    alt: "JoinIN",
    className: d,
    onLoad: m
  }
)));
export {
  L as UnlockRewardLinkWithBanner
};
