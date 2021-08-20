import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ThemesMenu from "./ThemesMenu";
import { setChatTheme } from "../../redux/actions/chat";

function ThemesMenuContainer() {
  // Перенести в DB
  const items = [
    {
      id: 1,
      bgColor: "skyblue",
      chatTheme: {
        bgImg:
          "url(https://telegram.org/file/464001326/1/eHuBKzF9Lh4.288899/1f135a074a169f90e5)",
        userMsgBgColor: "skyblue",
        infoMsgBgColor: "#d3ef81",
        msgInfoColor: "#ffffffd4",
      },
    },
    {
      id: 2,
      bgColor: "#5fd7c3",
      chatTheme: {
        bgImg:
          "url(https://i.pinimg.com/originals/d0/54/e1/d054e13a158db0b299a1ba75b2d85ca0.gif)",
        userMsgBgColor: "#5fd7c3",
        infoMsgBgColor: "#f5ffffbd",
        msgInfoColor: "rgb(178 237 247)",
      },
    },
    {
      id: 3,
      bgColor: "rgb(239 255 0)",
      chatTheme: {
        bgImg: "url(https://cdn.wallpapersafari.com/45/74/IF6GTx.gif)",
        userMsgBgColor: "rgb(239 255 0)",
        infoMsgBgColor: "rgb(255 255 255 / 85%)",
        msgInfoColor: "#fff",
      },
    },
  ];

  const [selected, setSelected] = useState(1);
  const dispatch = useDispatch();

  const onThemeSelect = (id, chatTheme) => {
    setSelected(id);
    dispatch(setChatTheme(chatTheme));
  };

  return (
    <ThemesMenu
      items={items}
      onThemeSelect={onThemeSelect}
      selected={selected}
    />
  );
}

export default ThemesMenuContainer;
