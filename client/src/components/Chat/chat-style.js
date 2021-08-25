import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  chat: {
    width: "90%",
  },

  msgItem: {
    maxWidth: "300px",
    padding: "20px",
  },
  msgInputContainer: {
    display: "flex",
    alignItems: "center",
  },
  msgField: {},

  msgList: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: ({ bgImg }) => bgImg,
    padding: "15px",
    maxWidth: "100%",
    height: "450px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  paper: {
    margin: "0 auto",
    maxWidth: "1280px",
    borderRadius: "20px",
    padding: "15px 15px",
  },

  repliedText: {
    wordBreak: "break-word",
    backgroundColor: "#d8ebfb",
    marginTop: "10px",
    padding: "10px 24px",
    textAlign: "center",
  },
});

export default useStyles;
