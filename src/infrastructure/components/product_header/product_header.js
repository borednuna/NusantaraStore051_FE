import React, { useEffect, useState } from 'react';
import './product_header.scss';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import StarIcon from '@mui/icons-material/Star';

const ProductHeader = (props) => {
  const [item, setItem] = useState({});
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');

  useEffect(() => {
    if (props !== undefined || Object.keys(props).length !== 0) {
      setItem(props.props);
    }
  }, [props]);

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="productheader">
      <h1>{item === undefined ? '' : item.name}</h1>
      <h2>{item === undefined ? '' : item.category}</h2>
      <div className="line"></div>

      <div className="rating">
        <p>
          <StarIcon fontSize="small" sx={{ color: '#FFD600' }} />
          3.5
        </p>
        <p>{item === undefined ? '' : 'Sold ' + item.sold + ' times'}</p>
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
            <MenuItem value="Red">Red</MenuItem>
            <MenuItem value="Blue">Blue</MenuItem>
            <MenuItem value="Gray">Gray</MenuItem>
            <MenuItem value="Black">Black</MenuItem>
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
  );
};

export default ProductHeader;
