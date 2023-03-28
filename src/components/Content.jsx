import { Badge } from '@mui/material'
import React, { useState } from 'react'
import classes from './Content.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomStepper from './stepper/CustomStepper';
import Form from './form/Form';
import Alert from '@mui/material/Alert';

const Content = () => {
    const [isFormSubmited, setFormSubmited] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false);
    const handleSubmit = (v) => {        
        setAlertOpen(v)
        setFormSubmited(v)

    }

    return (
        <div className={classes.wrapper}>
            {alertOpen && <Alert sx={{ marginTop: '1rem', opacity: 1 }} onClose={() => setAlertOpen(false)} severity="success">Step One Succesfully Completed !</Alert>}
            <div className={classes.top}>
                <div><Badge color="error" badgeContent={isFormSubmited ? 1 : 0} showZero>
                    <ErrorOutlineIcon color='error' />
                </Badge></div>
                <div><SettingsIcon style={{ color: 'white' }} className={classes.settingIcon} /></div>
            </div>
            <div className={classes.stepper}>
                <CustomStepper isFormSubmited={isFormSubmited} />
            </div>
            <div className={classes.formWrapper}>
                <div className={classes.header}>
                    After <span className={classes.time}>04.54</span> This Page Will be Refreshed
                </div>
                <div className={classes.formTitle}>Enter Clock In Information</div>
                <div className={classes.formContainer}>

                    <Form handleFormSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Content
