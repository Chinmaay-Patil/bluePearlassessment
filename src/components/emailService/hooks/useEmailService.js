/** @format */
import { useEffect, useRef, useState } from 'react'
import { send, init } from 'emailjs-com'
import { useLocation, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import env from 'react-dotenv'

function useEmailService() {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [loading, setloading] = useState(false)
  const [attachment, setAttachment] = useState()
  const state = useLocation()
  const toast = useToast()

  const form = useRef()

  const sendEmail = async (e) => {
    const serviceId = env.SERVICEID
    const templateId = env.TEMPLATEID
    const userID = env.USERID
    const BASE_URL = env.REACT_APP_BASE_URL
    console.log(BASE_URL)
    e.preventDefault()
    console.log('attac', attachment)
    setloading(true)
    init(userID)
    const toSend = {
      from_name: 'chinmay',
      to_name: e.target.user_name.value,
      to_email: e.target.user_email.value,
      message: e.target.message.value,
      attachment: attachment,
    }
    await send(serviceId, templateId, toSend)
      .then((res) => {
        console.log(res)
        setloading(false)
        toast({
          title: 'Email Sent.',
          description: "We've Send the email for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((err) => {
        console.log(err)
        setloading(false)
        toast({
          title: 'Email Not Sent.',
          description:
            'We were not able to  Send the email. Please try after Sometime.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  useEffect(() => {
    setData(state?.state)
  }, [state])

  return { loading, form, sendEmail, data, navigate, setAttachment }
}

export default useEmailService
