import React from "react";

import ThemeItem from "./ThemeItem";
import useStyles from "./themes-menu-style";

function ThemesMenu({ items, onThemeSelect, selected }) {
  const classes = useStyles();

  return (
    <ul className={classes.menuList}>
      {items &&
        items.map((item) => {
          return (
            <ThemeItem
              key={item.id}
              item={item}
              onThemeSelect={onThemeSelect}
              selected={selected === item.id ? classes.selected : null}
              classes={classes.menuItem}
              bgColor={item.bgColor}
            />
          );
        })}
    </ul>
  );
}

export default ThemesMenu;
