import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  modal: {
    alignItems: "center",
    margin: "150px auto",
    maxWidth: "350px",
    maxHeight: 450,
    padding: "10px 0",
    backgroundColor: "#f8f8f8",
    border: "2px solid #000",
    boxShadow: "#0f0f0f",
  },
  modalTitle: {
    width: "100%",
    margin: "20px 0",
    fontSize: 32,
    textAlign: "center",
  },
});

export default useStyles;
