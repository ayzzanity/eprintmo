import React from "react"
import SideDrawer from "../layout/sidedrawer"
// Material Core
import { Button, Checkbox, Container,
    FormControl, FormControlLabel, FormLabel,
    FormHelperText, MenuItem, Radio, RadioGroup, 
    Select, TextField, Typography
} from "@material-ui/core"
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'inherit',
    },
  },
  input: {
      display: 'none',
  },
  button: {
      background: 'primary',
  }
}))

function Request() {
  const classes = useStyles();
  const [size, setSize] = React.useState('short');
  const [value, setValue] = React.useState('document');
  const [type, setType] = React.useState('grayscale');
  const [checked, setChecked] = React.useState(true);

  const radioHandleChange = (event) => {
    setValue(event.target.value);
  };
  const typeHandleChange = (event) => {
    setType(event.target.type);
  };
  const checkHandleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  
  return (
    <div className={ classes.root }>
      <SideDrawer />
      <Container maxWidth="sm">
          <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
              PRINTING REQUEST
          </Typography>                                                                                                         
          <FormControl component="fieldset">
            <FormLabel component="legend">Please select printing type:</FormLabel>
            <RadioGroup 
                row aria-label="size" 
                name="size" 
                value={value} 
                onChange={radioHandleChange}
            >
                <FormControlLabel 
                    value="document" 
                    control={<Radio />} 
                    label="Document" 
                />
                <FormControlLabel 
                    value="shirt" 
                    control={<Radio />} 
                    label="Shirt" 
                />
                <FormControlLabel 
                    value="tarp" 
                    control={<Radio />} 
                    label="Tarp" 
                />
            </RadioGroup>
        </FormControl>
        <br />
        <div className="mt-3 mb-3">
            <TextField
                label="Upload File"
                defaultValue="File"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
                size="small"
                className="mr-2"
            />
            <input
                accept=".doc,.docx,.pdf,.psd"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" color="primary">
                    BROWSE
                </Button>
            </label> 
        </div>
        <br />
        <Typography variant="body2" className="mb-1">
            Printing Specifications
        </Typography>
        <FormControl className={classes.formControl}>
            <Select
                value={size}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="short">Short</MenuItem>
                <MenuItem value="long">Long</MenuItem>
                <MenuItem value="a4">A4</MenuItem>
            </Select>
            <FormHelperText>Paper Size</FormHelperText>
            <TextField
                className="mt-3"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormHelperText>Number of Copies</FormHelperText>
            <TextField
                className="mt-3"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormHelperText>Location</FormHelperText>
        </FormControl>
        <RadioGroup 
            row aria-label="type" 
            name="type" 
            value={type} 
            onChange={typeHandleChange}
        >
            <FormControlLabel 
                value="grayscale" 
                control={<Radio />} 
                label="Grayscale" 
            />
            <FormControlLabel 
                value="colored" 
                control={<Radio />} 
                label="Colored" 
            />
        </RadioGroup>
        <FormControlLabel
        control={<Checkbox checked={checked.checkedA} onChange={checkHandleChange} name="checkedA" />}
        label="Rush (Request only till 12PM)"
      />
      </Container>
    </div>
  )
}

export default Request;