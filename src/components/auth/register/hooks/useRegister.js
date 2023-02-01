/** @format */
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

function useRegister({ setToggle, toggle }) {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [valid, setValid] = useState()
  const [validemailmsg, setvalidemailmsg] = useState()
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      //regex for email validation-->

      const re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/

      const validEmail = re.test(String(e.target.value).toLowerCase())
      if (!validEmail) setvalidemailmsg('Please Enter valid Email')
      else {
        setvalidemailmsg('')
        setIsEmailValid(true)
      }
    }

    if (e.target.name === 'password') {
      let password = e.target.value
      //checking if password contains uppercase, lowercase, special symbols, and length > 8
      if (password.length < 8) {
        setValid(
          'Password must be 8 character long, must contain one uppercase,one lowercase and one special symbol'
        )
      } else if (!/[A-Z]/.test(password)) {
        setValid(
          '     Password must be 8 character long, must contain one uppercase,one lowercase and one special symbol'
        )
      } else if (!/[a-z]/.test(password)) {
        setValid(
          '     Password must be 8 character long, must contain one uppercase,one lowercase and one special symbol'
        )
      } else if (!/\d/.test(password)) {
        setValid(
          '     Password must be 8 character long, must contain one uppercase,one lowercase and one special symbol'
        )
      } else if (!/[!@#%&]/.test(password)) {
        setValid(
          '     Password must be 8 character long, must contain one uppercase,one lowercase and one special symbol'
        )
      } else {
        setValid('')
        setIsPasswordValid(true)
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEmailValid && isPasswordValid) {
      //need to form API call here once successful msg received we can navigate to login page
      setToggle(!toggle)
      console.log(formData)
      toast({
        title: 'Account Created. Please Login.',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      // navigate('/customers')
    } else {
      toast({
        title: 'Please Enter valid email and password',
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
    }
  }
  const handleClick = () => setShow(!show)

  return {
    handleChange,
    handleSubmit,
    formData,
    validemailmsg,
    valid,
    handleClick,
    show,
  }
}
export default useRegister
