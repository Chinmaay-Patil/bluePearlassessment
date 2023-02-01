/** @format */

import { Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useCustomers() {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'cvkp20@gmail.com',
      phone: '88888888',
      dob: '20/09/1992',
      street: 'abc',
      city: 'xys',
      state: 'pqo',
      zip: '444444',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '88888888',
      dob: '20/09/1992',
      street: 'abc',
      city: 'xys',
      state: 'pqo',
      zip: '444444',
    },
  ])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const addCustomer = (name, email, phone, dob, street, city, state, zip) => {
    setCustomers([
      ...customers,
      {
        id: customers.length + 1,
        name,
        email,
        phone,
        dob,
        street,
        city,
        state,
        zip,
      },
    ])
  }

  const removeCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  const Modall = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <form
          onSubmit={(e) => {
            e.preventDefault()

            addCustomer(
              e.target.name.value,
              e.target.email.value,
              e.target.phone.value,
              e.target.dob.value,
              e.target.street.value,
              e.target.city.value,
              e.target.state.value,
              e.target.zip.value
            )
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Customer</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Customer Name"
                  required
                />
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter Date of Birth"
                  required
                />
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  placeholder="Enter Street"
                  required
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  required
                />
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  required
                />
                <label>Zipcode</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zipcode"
                  required
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  toast({
                    title: 'Customer Added Successfully.',
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                  })
                }}
                type="submit"
              >
                Add Customer
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    )
  }

  return { Modall, navigate, onOpen, customers, removeCustomer, toast }
}

export default useCustomers
