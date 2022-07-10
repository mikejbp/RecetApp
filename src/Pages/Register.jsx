import React, { useState } from 'react'
import {
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Text
} from '@chakra-ui/react';

import { Formik, Field, Form } from 'formik'
import { Link, useNavigate } from "react-router-dom";
import '../Styles/register.css'

export default function Register() {

    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (selected && allowedTypes.includes(selected.type)) {
          let reader = new FileReader();
          reader.onloadend = () => {
            setImgPreview(reader.result);
          }
          reader.readAsDataURL(selected);
        }
        else {
          setError(true);
        }
      }

    function validate(value) {
        let error
        if (!value) {
            error = 'This field is required'
        }
        return error
    }

    return (

        <VStack className='form-container-main'>

            <VStack>
                <Formik

                    initialValues={{
                        userName: '',
                        name: '',
                        lastName: '',
                        image: '',
                        email: '',
                        age: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={(values, actions) => {

                        console.log(values)
                    }}

                >
                    {(props) => (
                        <Form className='register-main-form'>

                            <VStack id='container-flex-form'>

                                <VStack className='one-division-form'>
                                    <Field name='userName' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.userName && form.touched.userName}>
                                                <FormLabel className='label-form-register' htmlFor='userName'>User name</FormLabel>
                                                <Input className='input-form-register' {...field} id='userName' placeholder='Enter your User Name' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.userName}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='name' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                <FormLabel className='label-form-register' htmlFor='name'>Name</FormLabel>
                                                <Input className='input-form-register' {...field} id='name' placeholder='Enter your name' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.name}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='lastName' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                                <FormLabel className='label-form-register' htmlFor='lastName'>Last Name</FormLabel>
                                                <Input className='input-form-register' {...field} id='lastName' placeholder='Enter your lastName' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.lastName}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='image' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.image && form.touched.image}>
                                                <FormLabel className='label-form-image-register' htmlFor='image'>Image</FormLabel>
                                                <Input type='file' id='fileUpload' onChange={handleImageChange} className='input-image-form-register' {...field} placeholder='Update an imagen' />
                                                <FormErrorMessage className='error-message-image-register'>{form.errors.image}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </VStack>

                                <VStack className='second-division-form'>

                                    <Field name='email' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <FormLabel className='label-form-register' htmlFor='email'>E-mail</FormLabel>
                                                <Input className='input-form-register' {...field} id='email' type="email" placeholder='Enter your email' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='password' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                <FormLabel className='label-form-register' htmlFor='password'>Password</FormLabel>
                                                <Input className='input-form-register' {...field} id='password' type="password" placeholder='Enter your password' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.password}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='passwordConfirm' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.passwordConfirm && form.touched.passwordConfirm}>
                                                <FormLabel className='label-form-register' htmlFor='passwordConfirm'>Password confirm</FormLabel>
                                                <Input className='input-form-register' {...field} id='passwordConfirm' type="password" placeholder='Confirm your password' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.passwordConfirm}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='age' validate={validate}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.age && form.touched.age}>
                                                <FormLabel className='label-form-register' htmlFor='age'>Age</FormLabel>
                                                <Input className='input-form-register' {...field} id='age' type="number" placeholder='Enter your age' />
                                                <FormErrorMessage className='error-message-register'>{form.errors.age}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </VStack>
                            </VStack>

                            <Button
                                className="register-button"
                                mt={4}
                                colorScheme="blue"
                                isLoading={props.isSubmitting}
                                type='submit'
                                width="100%"
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>


                <VStack>
                    <Link to="/">
                        <Text>&lsaquo; Validate</Text>
                    </Link>
                </VStack>
            </VStack>


        </VStack>
    )
}