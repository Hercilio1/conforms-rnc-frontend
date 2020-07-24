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

const filter = createFilterOptions();
export const InputAutocomplete = ({ field, form: { setFieldValue }, ...props }) => (
  <>
    <Autocomplete
      {...field} {...props}
      selectOnFocus
      getOptionLabel={(option) => option.title || ""}
      style={{ width: 300 }}
      defaultValue={{ title: "", year: 1972 }}
      renderInput={(params) => <TextField {...params} label={props.label} variant="outlined" />}

      onChange={(e, value) => setFieldValue(field.name, value)}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }
        return filtered;
      }}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
    />
  </>
)