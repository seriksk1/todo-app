import React, { useState } from "react";
import { useDispatch } from "react-redux";

import themes from "./themes";
import ThemesMenu from "./ThemesMenu";
import { setChatTheme } from "../../redux/actions/chat";

function ThemesMenuContainer() {
  const [selected, setSelected] = useState(1);
  const dispatch = useDispatch();

  const onThemeSelect = (id, chatTheme) => {
    setSelected(id);
    dispatch(setChatTheme(chatTheme));
  };

  return (
    <ThemesMenu
      items={themes}
      onThemeSelect={onThemeSelect}
      selected={selected}
    />
  );
}

export default ThemesMenuContainer;
