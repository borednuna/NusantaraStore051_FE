import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const [gender, setGender] = useState('female');
  const [tabs, setTabs] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const [name, setName] = useState(sessionUser.name);
  const [email, setEmail] = useState(sessionUser.email);
  const [phone, setPhone] = useState(sessionUser.phone);
  const [data, setData] = useState({ sessionUser });
  // console.log(sessionUser);

  const handleInputName = (event) => {
    setName(event.target.value);
    setData({
      id: sessionUser.id,
      name: event.target.value,
      email: email,
      phone: phone,
      is_seller: sessionUser.is_seller,
      password: sessionUser.password,
      createdAt: sessionUser.createdAt,
      updatedAt: sessionUser.updatedAt,
    });
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
    setData({
      id: sessionUser.id,
      name: name,
      email: event.target.value,
      phone: phone,
      is_seller: sessionUser.is_seller,
      password: sessionUser.password,
      createdAt: sessionUser.createdAt,
      updatedAt: sessionUser.updatedAt,
    });
  };

  const handleInputPhone = (event) => {
    setPhone(event.target.value);
    setData({
      id: sessionUser.id,
      name: name,
      email: email,
      phone: event.target.value,
      is_seller: sessionUser.is_seller,
      password: sessionUser.password,
      createdAt: sessionUser.createdAt,
      updatedAt: sessionUser.updatedAt,
    });
  };

  const sendData = () => {
    const url = 'http://localhost:3001/users/' + sessionUser.id;
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const fetchData = () => {
    const url = 'http://localhost:3001/users/' + sessionUser.id;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: 'SET_USER', payload: data });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = () => {
    sendData();
    fetchData();
  };

  useEffect(() => {
    setName(sessionUser.name);
    setEmail(sessionUser.email);
    setPhone(sessionUser.phone);
  }, [sessionUser]);

  const handleLogout = () => {
    fetch('http://localhost:3001/auth/logout', {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));

    dispatch({ type: 'LOGOUT' });
  };

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
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  if (sessionUser === null || sessionUser === undefined) {
    return (
      <div className="profilepage">
        <h1>My Profile</h1>
        <h2>Please login to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="profilepage">
      <h1>My Profile</h1>
      <Box className="boxcontainer">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabs}
            onChange={handleChangeTabs}
            aria-label="basic tabs example"
            variant="scrollable"
          >
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
              placeholder={'User id: ' + sessionUser.id}
              variant="filled"
              size="small"
              sx={{ margin: '0.5rem' }}
            />
            <TextField
              hiddenLabel
              placeholder="Username"
              defaultValue={name}
              size="small"
              sx={{ margin: '0.5rem' }}
              onChange={handleInputName}
            />
            <TextField
              hiddenLabel
              placeholder="Email"
              defaultValue={email}
              size="small"
              sx={{ margin: '0.5rem' }}
              onChange={handleInputEmail}
            />
            <TextField
              hiddenLabel
              placeholder="Phone Number"
              defaultValue={phone}
              size="small"
              sx={{ margin: '0.5rem' }}
              onChange={handleInputPhone}
            />
            <FormControl sx={{ margin: '0.5rem' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={handleChangeGender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <p sx={{ margin: '0.5rem' }}>Date of birth</p>
            <DatePicker
              sx={{ margin: '0.5rem' }}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <div className="button-container">
              <Button variant="contained" onClick={handleSubmit}>
                <p>Save</p>
              </Button>
              <a href="/">
                <Button variant="contained" onClick={handleLogout}>
                  <p>Logout</p>
                </Button>
              </a>
            </div>
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
};

export default ProfilePage;
