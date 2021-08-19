import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ThemesMenu from "./ThemesMenu";
import { setChatTheme } from "../../redux/actions/chat";

function ThemesMenuContainer() {
  const items = [
    {
      id: 1,
      bgColor: "cornflowerblue",
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
      bgColor: "pink",
      chatTheme: {
        bgImg: "",
        userMsgBgColor: "",
        infoMsgBgColor: "",
        msgInfoColor: "",
      },
    },
    {
      id: 3,
      bgColor: "#dadada",
      chatTheme: {
        bgImg: "",
        userMsgBgColor: "",
        infoMsgBgColor: "",
        msgInfoColor: "",
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
