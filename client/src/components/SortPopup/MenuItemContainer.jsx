import React from "react";
import { useSelector } from "react-redux";

import { makeStyles, ListItemText, MenuItem } from "@material-ui/core";

import { tasksSelector } from "../../redux/selectors";

const useStyles = makeStyles({
  menuItem: {
    "&:focus": {
      backgroundColor: "#d4d7ff",
    },
  },
});

function MenuItemContainer({ type, onMenuItemClick }) {
  const classes = useStyles();

  const { sortType } = useSelector(tasksSelector);

  const handleMenuItemClick = () => {
    onMenuItemClick(type);
  };

  return (
    <MenuItem
      key={`${type}_`}
      className={classes.menuItem}
      onClick={handleMenuItemClick}
      selected={sortType === type}
    >
      <ListItemText primary={type} />
    </MenuItem>
  );
}

export default MenuItemContainer;
