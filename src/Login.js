import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
const Login = () => {
   //create a function
   const successfullmessageshowing = (Fullmessage) => {
        setSucessMessage(Fullmessage);
    }
    const [successMeassage, setSucessMessage] = useState(false);
    const Change = (() => {
        //call function
        successfullmessageshowing('data  submit')

    });
    const ImpChange = ((event) => {
        event.preventDefault();
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

                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login In</h2>
                    </Grid>
                    <TextField label='Name' placeholder='Enter username' fullWidth required />
                    <TextField label='Email' placeholder='Enter your email' type='Email' fullWidth required />
                    <TextField label='Phone NO' placeholder='Enter your Phone no' type=' text' fullWidth required />

                    <select>

                        <option required>Hobby</option>
                        <option>Reading</option>
                        <option>Travelling</option>
                        <option>Writing</option>
                    </select>
                    <TextField label='AGE' placeholder='Enter your Age' type='number' min="18" max="80" fullWidth required />
                    <TextField label="Address" placeholder="Address" multiline rows={2} rowsMax={4} fullWidth required />
                    <TextField label="State" placeholder="State" type='text' fullWidth required />
                    <TextField label="City" placeholder="city" type='text' fullWidth required />

                    <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={Change} fullWidth>Sumbit</Button>
                    <Button type='reset' color='primary' variant="contained" style={btnstyle} onClick={ImpChange} fullWidth>Cancle</Button>

                </Paper>

            </Grid>

        </>
    )
}

export default Login;
