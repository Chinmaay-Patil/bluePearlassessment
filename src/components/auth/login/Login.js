/** @format */

import React from 'react'

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import './Login.css'
import useLogin from './hooks/useLogin'

const Login = () => {
  const { handleChange, show, handleClick, handleSubmit, toast } = useLogin()
  return (
    <div className="parent">
      <div class="login-box">
        <h2>Welcome back</h2>
        <p>Enter your details</p>

        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <i class="fa-solid fa-user"></i>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <i class="fa-solid fa-lock"></i>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                id="password"
                placeholder="Enter Password"
                onChange={handleChange}
                name="password"
                required
              />
              <InputRightElement width="4.5rem">
                <Button
                  className="inpass"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </form>
        <div>
          <button onClick={handleSubmit} class="btn">
            Log In
          </button>
        </div>
        <div
          onClick={() => {
            toast({
              title: 'Functionality not implemented yet',
              status: 'error',
              duration: 1000,
              isClosable: true,
            })
          }}
        ></div>
      </div>
    </div>
  )
}

export default Login
