import { styled, TextField } from "@mui/material"

import './TimeForm.scss'

export const TimeForm: React.FC = () => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#2496FF',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#2496FF',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white'
          },
          '&:hover fieldset': {
            borderColor: '#2496FF',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#2496FF',
          },
        },
        '& label': {
            color: 'white'
        },
        '& input': {
            color: 'white',
            background: 'linear-gradient(180deg, #303035, #1D1D28)',
            colorScheme: 'dark',
            height : '5px'
        }
    });

    return(
        <form className="calculator-form">
            <CssTextField
                className="calculator-date" 
                label='Monday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Tuesday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Wednesday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Thursday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Friday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Saturday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Sunday' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <input type="submit" className="calculator-submit" placeholder="Calculate"/>
        </form>
    )
}