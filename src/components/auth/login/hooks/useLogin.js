/** @format */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

function useLogin() {
  const toast = useToast()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      e.preventDefault()
      console.log(formData)
      //need to form API call here once successful msg received we can navigate to customers page
      toast({
        title: 'You are successfully logged in.',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      navigate('/customers')
    } else {
      toast({
        title: 'Please Enter Valid Details',
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
    }
  }

  const handleClick = () => setShow(!show)

  return { handleChange, show, handleClick, handleSubmit, toast }
}

export default useLogin
