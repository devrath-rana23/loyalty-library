const E = ({
  handleClick: r = () => {
  },
  handleImageLoad: a = () => {
  },
  isLoggedIn: n = !1,
  loyaltyAccount: e,
  SquareSkeleton: m,
  isImageLoading: s = !0,
  classNameOne: t = "",
  classNameTwo: R = "",
  classNameThree: g = "",
  classNameFour: i = ""
}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", { href: "/", onClick: r, className: t }, s && /* @__PURE__ */ React.createElement("div", { className: R }, /* @__PURE__ */ React.createElement(m, null)), n ? /* @__PURE__ */ React.createElement(
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
export {
  E as UnlockRewardLinkWithBanner
};
