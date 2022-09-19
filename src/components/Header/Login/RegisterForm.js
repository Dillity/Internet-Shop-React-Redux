import React from "react";
import {Formik} from "formik";

import {Button, CircularProgress, Grid, Link, TextField, Typography} from "@mui/material";
import {validationSchema} from "../../../validation/validationSchema";

import style from "./Login.module.css";


const RegistrationForm = (props) => {

    const register = (email, password) => {
        props.register(email, password);
    }

    return (
        <Formik initialValues={{email: '', password: ''}}
                validateOnBlur
                onSubmit={(values) => register(values.email, values.password)}
                validationSchema={validationSchema}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <div>
                    <TextField sx={{pb: 1}}
                               fullWidth
                               variant={'filled'}
                               required
                               type={'text'}
                               label={'Username'}
                               placeholder={'Enter username'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.email && errors.email && <p className={style.errorStyle}>{errors.email}</p>}


                    <TextField sx={{pb: 1}}
                               fullWidth
                               variant={'filled'}
                               required
                               type={'password'}
                               label={'Password'}
                               placeholder={'Enter password'}
                               name={'password'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.password && errors.password && <p className={style.errorStyle}>{errors.password}</p>}

                    {props.isFetching ?
                        <Grid align={'center'}>
                            <CircularProgress className={style.loadingStyle}/>
                        </Grid> :

                        <Button color='primary'
                                fullWidth
                                variant='contained'
                                className={style.btnStyle}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}>Register</Button>
                    }

                    <h2 className={style.serverError}>{props.serverMessageReg}</h2>
                </div>
            )}
        </Formik>
    )
}

export default RegistrationForm;