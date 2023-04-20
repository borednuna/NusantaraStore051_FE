import React from "react";
import './product_header.scss';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import StarIcon from '@mui/icons-material/Star';

const ProductHeader = () => {
    const [color, setColor] = React.useState('');
    const [size, setSize] = React.useState('');

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };

    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };

    return(
        <div className="productheader">
            <h1>Sepatu Ngabers</h1>
            <h2>Footwear</h2>
            <div className="line"></div>

            <div className="rating">
                <p><StarIcon fontSize="small" sx={{color: '#FFD600'}} />3.5</p>
                <p>Terjual 1975 kali</p>
            </div>

            <div className="formcontrol">
                <FormControl sx={{ m: 1, width: '100%' }} size="small">
                    <InputLabel id="selectcolor">Color</InputLabel>
                    <Select
                        labelId="selectcolor-label"
                        id="selectcolor"
                        value={color}
                        label="Color"
                        onChange={handleChangeColor}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value='Red'>Red</MenuItem>
                        <MenuItem value='Blue'>Blue</MenuItem>
                        <MenuItem value='Gray'>Gray</MenuItem>
                        <MenuItem value='Black'>Black</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: '100%' }} size="small">
                    <InputLabel id="selectsize">Size</InputLabel>
                    <Select
                        labelId="selectsize-label"
                        id="selectsize"
                        value={size}
                        label="Size"
                        onChange={handleChangeSize}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={46}>46</MenuItem>
                        <MenuItem value={47}>47</MenuItem>
                        <MenuItem value={48}>48</MenuItem>
                        <MenuItem value={49}>49</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default ProductHeader;
