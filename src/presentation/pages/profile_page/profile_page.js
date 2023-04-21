import React from "react";
import { useState } from "react";
import './profile_page.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const ProfilePage = () => {
    const [gender, setGender] = useState('female');
    const [tabs, setTabs] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

    const handleChangeTabs = (event, newValue) => {
        setTabs(newValue);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
      };

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
            </div>
        );
    }

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
          };
    }

    return (
        <div className="profilepage">
            <h1>My Profile</h1>
            <Box className="boxcontainer">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabs} onChange={handleChangeTabs} aria-label="basic tabs example" variant="scrollable">
                        <Tab label="General" {...a11yProps(0)} />
                        <Tab label="Addresses" {...a11yProps(1)} />
                        <Tab label="Shopping History" {...a11yProps(2)} />
                        <Tab label="Manage Store" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={tabs} index={0}>
                    <div className="general">
                        <TextField
                            disabled
                            hiddenLabel
                            placeholder="Username"
                            variant="filled"
                            size="small"
                            sx={{margin: '0.5rem'}}
                        />
                        <TextField
                            hiddenLabel
                            placeholder="User Nickname"
                            size="small"
                            sx={{margin: '0.5rem'}}
                        />
                        <TextField
                            hiddenLabel
                            placeholder="Email"
                            size="small"
                            sx={{margin: '0.5rem'}}
                        />
                        <TextField
                            hiddenLabel
                            placeholder="Phone Number"
                            size="small"
                            sx={{margin: '0.5rem'}}
                        />
                        <FormControl sx={{margin: '0.5rem'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={gender}
                                onChange={handleChangeGender}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <p sx={{margin: '0.5rem'}}>Date of birth</p>
                        <DatePicker sx={{margin: '0.5rem'}} selected={startDate} onChange={(date) => setStartDate(date)} />
                        <Button variant="contained" >
                            <p>Save</p>
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel value={tabs} index={1}>
                    Addresses
                </TabPanel>
                <TabPanel value={tabs} index={2}>
                    Shopping History
                </TabPanel>
                <TabPanel value={tabs} index={3}>
                    Manage Store
                </TabPanel>
            </Box>
        </div>
    );
}

export default ProfilePage;
