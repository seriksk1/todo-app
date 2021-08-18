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
  msgField: {
    marginRight: "10px",
  },

  msgList: {
    background:
      "url(https://telegram.org/file/464001326/1/eHuBKzF9Lh4.288899/1f135a074a169f90e5)",

    padding: "15px",
    maxWidth: "100%",
    height: "400px",
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
});

export default useStyles;
