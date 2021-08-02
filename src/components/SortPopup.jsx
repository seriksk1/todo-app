import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles({
  sortPopup: {
    margin: "20px 0",
  },
  paper: {
    border: "1px solid #000",
  },
  menuItem: {
    "&:focus": {
      backgroundColor: "#d4d7ff",
    },
  },
});

function SortPopup({}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.sortPopup}>
      <Button
        variant="contained"
        color="secondary"
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Sort by...
      </Button>
      <Menu
        id="sort-menu"
        className={classes.paper}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Due-date" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
          <ListItemIcon>
            <HourglassEmptyIcon />
          </ListItemIcon>
          <ListItemText primary="Status" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SortPopup;
