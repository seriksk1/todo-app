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
    cursor: "pointer",
    width: "fit-content",
    maxWidth: "50vw",
    padding: "10px 15px",
    wordBreak: "break-word",
    //userMsgBgColor
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
    wordBreak: "break-word",
    //infoMsgBgColor
    backgroundColor: "#d3ef81",
    "& p": {
      wordBreak: "break-word",
    },
  },

  avatar: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
  },
  msgInfo: {
    //msgInfoColor
    color: "#ffffffd4",
  },
  msgWithAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px 0px 15px",
  },
  msgMenu: {
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default useStyles;
