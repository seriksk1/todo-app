import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  roomsList: {
    margin: 0,
    marginTop: "10px",
    padding: "0 20px",
    listStyle: "none",
    maxWidth: "330px",
  },
  roomsListItem: {
    display: "flex",

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
  usersIcon: { paddingRight: "5px" },
  usersCount: {
    display: "flex",
    alignSelf: "center",

    margin: "0 15px",
  },
  lockIcon: {
    alignSelf: "center",
    width: "20px",
    height: "20px",
  },
});
