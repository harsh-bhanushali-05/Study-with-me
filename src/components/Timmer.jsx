import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "../Timmer.css";
function valuetext(value) {
    return `${value}°C`;
}

function Timmer(props) {
    const [t,setT]=React.useState(props.def);
    function change(event, value) {
        setT(value);
        props.break(value*60);
    }

    return (
        <div className='flex2'>
        <Box sx={{ width: '60%' }}>
            <Slider
                onChange={change}
                aria-label="Small steps"
                defaultValue={props.def}
                getAriaValueText={valuetext}
                step={1}
                min={props.min}
                max={props.max}
                valueLabelDisplay="auto"
                sx={{ color: '#E2A3C7' }}
            />
        </Box>
        <h2 className='value'>{t}</h2>
        </div>
    );
}

export default Timmer;
