import React from "react";

function ThemeItem({ item, classes, bgColor, onThemeSelect }) {
  const handleThemeSelect = () => {
    console.log(item.chatTheme);
    onThemeSelect(item.id, item.chatTheme);
  };

  return (
    <li
      className={classes}
      style={{ backgroundColor: bgColor }}
      onClick={handleThemeSelect}
    ></li>
  );
}

export default ThemeItem;
