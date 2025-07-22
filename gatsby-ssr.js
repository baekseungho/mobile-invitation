// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="kakao-sdk"
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
      defer
    />,
  ]);
};
