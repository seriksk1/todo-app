import React from "react";

import { Button } from "@material-ui/core";

function SubmitButton({ btnText, btnStyles }) {
  return (
    <Button
      className={btnStyles}
      type="submit"
      size="large"
      variant="contained"
      color="primary"
    >
      {btnText}
    </Button>
  );
}

export default SubmitButton;
