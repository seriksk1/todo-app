import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  msgItemLeft: {
    display: "flex",
    flexDirection: "column",
  },

  msgItemRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  userMsg: {
    width: "fit-content",
    maxWidth: "50vw",
    padding: "10px 15px",
    backgroundColor: "skyblue",
    borderRadius: "20px",
    "& p": {
      wordBreak: "break-word",
    },
  },
  infoMsg: {
    width: "fit-content",
    margin: "5px auto",
    textAlign: "center",
    padding: "5px 10px",
    borderRadius: "20px",
    backgroundColor: "#d3ef81",
    "& p": {
      wordBreak: "break-word",
    },
  },

  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  msgInfo: {
    color: "#ffffffd4",
  },
  msgWithAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px 0px 15px",
  },
});

export default useStyles;
