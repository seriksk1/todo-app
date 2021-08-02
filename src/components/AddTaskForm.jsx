import { makeStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textField: {
        width: "80%",
        margin: "20px 0",
    },
    addTaskBtn: {
        width: 150,
        marginTop: 20,
    }
    
  });

function AddTaskForm() {

    const classes = useStyles();

    return (
    <form className={classes.form} noValidate autoComplete="off">
        <TextField className={classes.textField} id="task" label="Task" variant="outlined" />
        <TextField className={classes.textField} id="date" type="date" defaultValue={"02/08/2021"} label="Due-date" InputLabelProps={{
          shrink: true,
        }}/>
        <Button 
        className={classes.addTaskBtn}
        size="large"
        variant="contained"
        color="primary"
        >
            OK
        </Button>
    </form>
    )
}

export default AddTaskForm