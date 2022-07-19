import { styled, TextField } from "@mui/material"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useTypesSelector } from "../../hooks/useTypesSelector";

import './TimeForm.scss'

dayjs.extend(relativeTime);

const date = new Date();
const futureDate = date.getDate()
date.setDate(futureDate);
const defaultValue = date.toLocaleDateString('en-CA')


export const TimeForm: React.FC = () => {

    const {choosenTitle} = useTypesSelector(state => state.anime)

    const episodes = choosenTitle?.episodes ? choosenTitle?.episodes : 0
    
    const b: any = choosenTitle?.duration ? choosenTitle?.duration.match(/\d/g)?.join('') : '0'
    console.log("🚀 ", b)
    console.log("🚀 ", episodes)

    const formatTime = (totalmins: number) =>  {
        const absTotal= Math.abs(totalmins);
        const mins = absTotal % 60;
        const hours = Math.floor(absTotal / 60);
        const days= Math.floor(hours / 24);
        const hourss = hours % 24;
        /* if(mins < 10){
            let minutes: any = `0${mins}`
            console.log("🚀 ~ file: TimeForm.tsx ~ line 32 ~ formatSeconds ~ minutes", minutes)
            return mins = minutes
        }
        if(hourss < 10){
            let hours: any = `0${hourss}`
            console.log("🚀 ~ file: TimeForm.tsx ~ line 35 ~ formatSeconds ~ hours", hours)
            return hourss = hours
        }
        console.log(`${days}:${hourss}:${mins}`); */
        return `${days}:${hourss}:${mins}`
    }

    if(b.length > 2){
        const time = Number((b.charAt(0) * 60)) + Number(b.slice(1)) * episodes
        console.log(time, 'timeee')
        console.log(formatTime(time))
    } else if (b.length <= 2){
        const time = Number(b) * episodes
        console.log(time, 'timeee')
        console.log(formatTime(time))
    }

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
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Tuesday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Wednesday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Thursday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Friday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Saturday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Sunday' 
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <CssTextField
                className="calculator-date" 
                label='Start watch from' 
                type="date"
                defaultValue={defaultValue}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <input type="submit" className="calculator-submit" value="Calculate"/>
        </form>
    )
}