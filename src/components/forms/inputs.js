import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

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

export const InputAutocomplete = ({ field, form: { setFieldValue }, ...props }) => {
  const filter = createFilterOptions();
  return (
  <>
    <Autocomplete
      {...field} {...props}
      selectOnFocus
      renderInput={(params) => <TextField {...params} label={props.label} variant="outlined" />}
      onChange={(e, value) => setFieldValue(field.name, value)}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            title: `Add "${params.inputValue}"`,
            value: params.inputValue
          });
        }
        return filtered;
      }}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        return option.title;
      }}
    />
  </>
)}