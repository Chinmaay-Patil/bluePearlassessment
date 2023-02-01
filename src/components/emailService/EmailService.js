/** @format */

import React from 'react'
import { Button, CircularProgress } from '@chakra-ui/react'
import './EmailService.css'
import useEmailService from './hooks/useEmailService'

export const EmailService = () => {
  const { loading, form, sendEmail, data, navigate, setAttachment } =
    useEmailService()
  return (
    <div className="emaill">
      <div className="contactUs">
        <div className="login-box">
          {loading ? (
            <CircularProgress isIndeterminate color="green.300" />
          ) : (
            <div>
              <h2>Send Email</h2>

              <form ref={form} onSubmit={sendEmail}>
                <div class="form-group">
                  <label>Name</label>
                  <input value={data?.name} type="text" name="user_name" />
                  <label>Email</label>
                  <input value={data?.email} type="email" name="user_email" />
                  <label>Message</label>
                  <input required name="message" />
                  <label>File</label>
                  <input
                    type="file"
                    onChange={(e) => setAttachment(e.target.files[0])}
                    name="file"
                  />
                </div>
                <div className="actbtn">
                  <button className="btn" type="submit" value="Send">
                    Send
                  </button>
                  <Button onClick={() => navigate('/customers')}>Back</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
