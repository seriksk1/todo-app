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
    backgroundColor: ({ userMsgBgColor }) => userMsgBgColor,
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
    backgroundColor: ({ infoMsgBgColor }) => infoMsgBgColor,
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
    color: ({ msgInfoColor }) => msgInfoColor,
  },
  msgWithAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px 0px 15px",
  },
  msgMenu: {
    "& ul": {
      padding: 0,
      backgroundColor: "transparent",
    },
  },

  replyBlock: {
    display: "flex",
    padding: 0,
    margin: "0 0 3px 0",
    "&:before": {
      width: "3px",
      height: "35px",
      content: `""`,
      backgroundColor: "#0489e2",
      marginRight: "10px",
    },
  },

  reply: {
    padding: 0,
    margin: 0,
  },

  replyUser: {
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "100%",
    padding: 0,
    margin: 0,
  },

  replyText: {
    maxWidth: "47vw",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: "175%",
    fontSize: "14px",
    padding: 0,
    margin: 0,
  },
});

export default useStyles;
