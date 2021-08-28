import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "300px",
    maxWidth: "400px",
    paddingBottom: "30px",

    "& h4": {
      margin: "20px 0",
      fontSize: "32px",
      textAlign: "center",
    },
  },
  textField: {
    width: "80%",
    marginBottom: "30px",
    "&:last-of-type": {
      marginBottom: "15px",
    },
  },
  btnSubmit: {
    width: 150,
    marginTop: "15px",
  },
  authHelperText: {
    fontSize: "14px",
    "&:hover": {
      color: "red",
    },
  },
});

export default useStyles;
