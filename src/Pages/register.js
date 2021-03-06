import React, {useContext, useState} from 'react'
import {Button, Form, FormInput} from 'semantic-ui-react'
import gql from 'graphql-tag'
import {useMutation} from "@apollo/client";

import {useForm} from "../util/hooks";
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import DisplayErrorGroup from "../Components/DisplayErrorGroup";

function Register(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const initialState = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    }

    const {onChange, onSubmit, values} = useForm(registerUser, initialState)

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, {data: {register: userData}}) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    function registerUser() {
        addUser()
    }

    return (
        <div>
            <Banner bigheader='Register to Make Your Account!' subtext=''/>
            <div className='form-container'>
                <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : '-'}>
                    <h1> Register </h1>
                    <FormInput
                        label='Username'
                        placeholder='Username...'
                        name='username'
                        value={values.username}
                        error={!!errors.username}
                        onChange={onChange}
                    />
                    <FormInput
                        label='Password'
                        placeholder='Password...'
                        name='password'
                        type='password'
                        value={values.password}
                        error={!!errors.password}
                        onChange={onChange}
                    />
                    <FormInput
                        label='Confirm Password'
                        placeholder='Confirm Password...'
                        name='confirmPassword'
                        type='password'
                        value={values.confirmPassword}
                        error={!!errors.confirmPassword}
                        onChange={onChange}
                    />
                    <FormInput
                        label='Email'
                        placeholder='Email...'
                        name='email'
                        value={values.email}
                        error={!!errors.email}
                        onChange={onChange}
                    />
                    <Button type='submit' primary>
                        Register!
                    </Button>
                </Form>
                <DisplayErrorGroup errors={errors}/>
            </div>
        </div>
    )
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $password: String!
        $confirmPassword: String!
        $email: String!
    ) {
        register(
            registerInput: {
                username: $username
                password: $password
                confirmPassword: $confirmPassword
                email: $email
            }
        ) {
            id email token username createdAt admin
        }
    }
`

export default Register
