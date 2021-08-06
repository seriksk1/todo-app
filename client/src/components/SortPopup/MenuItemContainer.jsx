import { makeStyles, ListItemText, MenuItem } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  menuItem: {
    "&:focus": {
      backgroundColor: "#d4d7ff",
    },
  },
});

function MenuItemContainer({ type, onMenuItemClick }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sortType } = useSelector(({ tasks }) => tasks);

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
