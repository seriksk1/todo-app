import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  sortPopup: {
    margin: '20px 0',
  },
  paper: {
    border: '1px solid #000',
  },
  menuItem: {
    '&:focus': {
      backgroundColor: '#d4d7ff',
    },
  },
});

function SortPopup({ sortType, items, onSelectType }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (type) => {
    onSelectType(type);
    handleMenuClose();
  };

  return (
    <div className={classes.sortPopup}>
      <Button
        variant="contained"
        color="secondary"
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleOpenPopup}>
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        {items &&
          items.map(({ id, type }) => {
            return (
              <MenuItem
                key={`${type}_`}
                className={classes.menuItem}
                onClick={() => handleMenuItemClick(type)}
                selected={sortType === type}>
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}

export default SortPopup;
