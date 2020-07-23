import React from "react"
import TextField from "@material-ui/core/TextField"

export const InputText = ({ field, ...props }) => (
  <>
    <TextField
      {...field} {...props}
      variant="outlined"
    />
  </>
)

export const InputNumber = ({ field, ...props }) => (
  <>
    <TextField
      {...field} {...props}
      type="number"
      variant="outlined"
    />
  </>
)