import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  roomsList: {
    margin: 0,
    padding: "0 35px",
    listStyle: "none",
    maxWidth: "330px",
  },
  roomsListItem: {
    display: "flex",
    maxWidth: "200px",
    wordBreak: "break-word",
    backgroundColor: "aliceblue",
    padding: "10px 20px",
    margin: "15px 0",
  },
  joinBtn: {
    padding: 0,
  },
  link: {
    alignSelf: "center",
  },
  lockIcon: {
    alignSelf: "center",
    width: "20px",
    height: "20px",
    margin: "0 5px 0 10px",
  },
});
