/** @format */
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import useRegister from './hooks/useRegister'

const Register = ({ setToggle, toggle }) => {
  const {
    handleChange,
    handleSubmit,
    formData,
    validemailmsg,
    valid,
    show,
    handleClick,
  } = useRegister({ setToggle, toggle })
  return (
    <div className="parent">
      <form class="login-box" onSubmit={handleSubmit}>
        <h2>Register Here</h2>
        <p>Enter your details</p>
        <div>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {validemailmsg && <p style={{ color: 'red' }}> {validemailmsg}</p>}
          </div>
          <div class="form-group">
            <InputGroup size="md">
              <Input
                type={show ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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
            {valid && <p style={{ color: 'red' }}>{valid}</p>}
          </div>

          <button class="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
