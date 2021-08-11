import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    textAlign: "center",
    margin: "30px 0",
    color: "#ff0000",
  },
});

function Error() {
  const classes = useStyles();
  return (
    <Typography className={classes.error} variant="h3" component="h3">
      PAGE NOT FOUND
    </Typography>
  );
}

export default Error;
