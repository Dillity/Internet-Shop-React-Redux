import React from "react";
import {Formik} from "formik";

import {Button, CircularProgress, Grid, TextField, Typography} from "@mui/material";

import {validationSchema} from "../../../validation/validationSchema";

import style from "./Login.module.css";


const LoginForm = (props) => {

    const login = (email, password) => {
        props.logIn(email, password);
    }

    return (
        <Formik initialValues={{email: '', password: ''}}
                validateOnBlur
                onSubmit={(values) => login(values.email, values.password)}
                validationSchema={validationSchema}
        >
            {({values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty}) => (
                <div>
                    <TextField sx={{pb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Username'}
                               placeholder={'Enter username'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.email && errors.email && <p className={style.errorStyle}>{errors.email}</p>}

                    <TextField sx={{pb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="password"
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
                                type={'submit'}>Login</Button>
                    }

                    <h2 className={style.serverError}>{props.serverMessageLog}</h2>
                </div>
            )}
        </Formik>
    );
}

export default LoginForm;