import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SortPopup from "./SortPopup";

import { fetchTasks } from "../../redux/actions/queries";
import { setSortType } from "../../redux/actions/tasks";

function SortPopupContainer() {
  const dispatch = useDispatch();
  const { sortType } = useSelector(({ tasks }) => tasks);

  const sortTypes = [
    { id: 1, type: "Due-date" },
    { id: 2, type: "Status" },
  ];

  const onSelectType = (id) => {
    dispatch(setSortType(id));
  };

  useEffect(() => {
    dispatch(fetchTasks(sortType));
  }, [sortType]);

  return (
    <SortPopup
      sortType={sortType}
      items={sortTypes}
      onSelectType={onSelectType}
    />
  );
}

export default SortPopupContainer;
