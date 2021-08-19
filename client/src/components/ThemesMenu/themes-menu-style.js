import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menuList: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    padding: 0,
    margin: "0 0 20px",
  },
  menuItem: {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    margin: "0 5px",
    borderRadius: "50%",

    "&:hover": {
      transition: "0.1s ease-in",
      transform: "scale(1.2)",
    },
  },
  selectedItem: {
    boxShadow: "0px 1px 4px 0px #9a9a9a",
  },
});

export default useStyles;
