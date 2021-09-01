import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Login = () => {
    const [formData, setFormData] = useState([]);

    const handleChangeData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formData, [name]: value });
    }

    const [successMeassage, setSucessMessage] = useState(false);
    const Change = ((event) => {
            console.log('formData', formData)
            event.preventDefault()
            setSucessMessage('data submitted');
    });
    const ImpChange = ((event) => {
        window.location.reload(false);
    })

    const paperStyle = { padding: 20, height: '90vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <>
            <div>
                {
                    <Alert severity="success" variant="filled"  >{successMeassage}</Alert>
                }
            </div>
            <Grid>
                <Paper elevation={5} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login In</h2>
                    </Grid>
                    <TextField label='Name' name='fullName' onChange={handleChangeData} placeholder='Enter username' fullWidth required />
                    <TextField label='Email' name='email_id' onChange={handleChangeData} placeholder='Enter your email' type='email' fullWidth required />
                    <TextField label='Phone NO' name='mobile' onChange={handleChangeData} placeholder='Enter your Phone no' type='number' fullWidth required />

                    <FormControl >
                        <Select
                            onChange={handleChangeData}
                            displayEmpty
                            name='hoby'
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Cricket'}>Cricket</MenuItem>
                            <MenuItem value={'song'}>SOng </MenuItem>
                            <MenuItem value={'footBall'}>foot ball</MenuItem>
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
                    </FormControl>

                    <TextField label='AGE' name='age' onChange={handleChangeData} placeholder='Enter your Age' type='number' min="18" max="80" fullWidth required />
                    <TextField label="Address" name='address' onChange={handleChangeData} placeholder="Address" multiline rows={2} rowsMax={4} fullWidth required />
                    <TextField label="State" name='state' onChange={handleChangeData} placeholder="State" type='text' fullWidth required />
                    <TextField label="City" name='city' onChange={handleChangeData} placeholder="city" type='text' fullWidth required />

                    <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={Change} fullWidth>Sumbit</Button>
                    <Button type='reset' color='primary' variant="contained" style={btnstyle} onClick={ImpChange} fullWidth>Cancle</Button>

                </Paper>

            </Grid>

        </>
    )
}

export default Login;
