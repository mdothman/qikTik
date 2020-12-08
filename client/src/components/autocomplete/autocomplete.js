import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

// ticker 3166-1 alpha-2
// ⚠️ No support for IE 11
function stockToFlag(tickerSymbol) {
  return typeof String.fromSymbolPoint !== "undefined"
    ? tickerSymbol
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromSymbolPoint(char.charSymbolAt(0) + 127397)
        )
    : tickerSymbol;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function StockSelect({stocks}) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={stocks}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span>{stockToFlag(option.symbol)}</span>
          {option.name} ({option.symbol})
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Stock Name"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}