import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SortPopup from "./SortPopup";

import { fetchTasks } from "../../redux/actions/tasks-queries";
import { setSortType } from "../../redux/actions/tasks";
import { SORT_BY } from "../../redux/constants";

function SortPopupContainer() {
  const dispatch = useDispatch();

  const sortTypes = [
    { id: 1, type: SORT_BY.DUEDATE },
    { id: 2, type: SORT_BY.STATUS },
  ];

  const { sortType } = useSelector(({ tasks }) => tasks);
  const [anchorEl, setAnchorEl] = useState(null);

  const onMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (type) => {
    onSelectType(type);
    onMenuClose();
  };

  const onSelectType = (id) => {
    dispatch(setSortType(id));
  };

  useEffect(() => {
    dispatch(fetchTasks(sortType));
  }, [sortType]);

  return (
    <SortPopup
      items={sortTypes}
      sortType={sortType}
      anchorEl={anchorEl}
      onSelectType={onSelectType}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      onMenuItemClick={onMenuItemClick}
    />
  );
}

export default SortPopupContainer;
