import React from "react";
import './category_list.scss';
import Theme from '../../../application/globals/theme'

import { ThemeProvider } from "styled-components";
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HandymanIcon from '@mui/icons-material/Handyman';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CountertopsIcon from '@mui/icons-material/Countertops';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const CategoryList = () => {
    return(
        <div className="category-list">
            <ThemeProvider theme={Theme}>
                <div className="category1">
                    <IconButton aria-label="hobby" size="large" color="black">
                        <ColorLensIcon fontSize="inherit"/>
                        <h2>Hobby</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <HandymanIcon fontSize="inherit"/>
                        <h2>Houseware</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <DesignServicesIcon fontSize="inherit"/>
                        <h2>Stationery</h2>
                    </IconButton>
                </div>

                <div className="category2">
                    <IconButton aria-label="hobby" size="large" color="black">
                        <DevicesOtherIcon fontSize="inherit"/>
                        <h2>Electronics</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <CheckroomIcon fontSize="inherit"/>
                        <h2>Fashion</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <CountertopsIcon fontSize="inherit"/>
                        <h2>Kitchenware</h2>
                    </IconButton>
                </div>

                <div className="category3">
                    <IconButton aria-label="hobby" size="large" color="black">
                        <FaceRetouchingNaturalIcon fontSize="inherit"/>
                        <h2>Beauty</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <RollerSkatingIcon fontSize="inherit"/>
                        <h2>Footwear</h2>
                    </IconButton>

                    <IconButton aria-label="hobby" size="large" color="black">
                        <AutoStoriesIcon fontSize="inherit"/>
                        <h2>Books</h2>
                    </IconButton>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default CategoryList;
