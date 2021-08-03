import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ScheduleIcon from "@material-ui/icons/Schedule";

import { setTasks, setSortType } from "../redux/actions/tasks";

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

function SortPopup() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const { sortType } = useSelector(({ tasks }) => tasks);
  const sortTypes = ["Due-date", "Status"];

  const handleOpenPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (type) => {
    dispatch(setSortType(type));
    handleMenuClose();
  };

  useEffect(() => {
    dispatch(setSortType(sortTypes[0]));
  }, []);

  return (
    <div className={classes.sortPopup}>
      <Button
        variant="contained"
        color="secondary"
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleOpenPopup}
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
        {sortTypes &&
          sortTypes.map((type) => {
            return (
              <MenuItem
                key={`${type}_`}
                className={classes.menuItem}
                onClick={() => handleMenuItemClick(type)}
              >
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}

export default SortPopup;
