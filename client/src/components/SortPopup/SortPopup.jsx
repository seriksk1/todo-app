import { makeStyles } from "@material-ui/core/styles";

import { Menu, MenuItem, ListItemText, Button } from "@material-ui/core";

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

function SortPopup({
  items,
  sortType,
  anchorEl,
  onMenuOpen,
  onMenuClose,
  onMenuItemClick,
}) {
  const classes = useStyles();

  const handleMenuOpen = (e) => {
    onMenuOpen(e);
  };

  const handleMenuClose = () => {
    onMenuClose();
  };

  const handleMenuItemClick = (type) => {
    onMenuItemClick(type);
  };

  return (
    <div className={classes.sortPopup}>
      <Button
        variant="contained"
        color="secondary"
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        Sort by...
      </Button>
      <Menu
        id="sort-menu"
        className={classes.paper}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
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
        {items &&
          items.map(({ id, type }) => {
            return (
              <MenuItem
                key={id}
                className={classes.menuItem}
                onClick={() => handleMenuItemClick(type)}
                selected={sortType === type}
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
