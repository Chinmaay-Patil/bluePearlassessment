/** @format */

import { DeleteIcon, EmailIcon } from '@chakra-ui/icons'
import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import './Customers.css'
import useCustomers from './hooks/useCustomers'

const Customers = () => {
  const { Modall, navigate, onOpen, customers, removeCustomer, toast } =
    useCustomers()
  return (
    <div>
      <div className="modal">
        <Modall />
      </div>
      <div className="navbar">
        <Button colorScheme="purple" onClick={() => navigate('/')}>
          HOME
        </Button>
        <Button onClick={onOpen} colorScheme="purple">
          Add Customer
        </Button>
      </div>

      <div className="container">
        <Heading size="xl" noOfLines={1}>
          Customer List
        </Heading>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.dob}</td>
                  <td>{customer.street}</td>
                  <td>{customer.city}</td>
                  <td>{customer.state}</td>
                  <td>{customer.zip}</td>
                  <td>
                    <div className="actions">
                      <button
                        onClick={() => {
                          removeCustomer(customer.id)
                          toast({
                            title: `Customer ${customer.name}  Deleted Successfully.`,
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                          })
                        }}
                      >
                        <DeleteIcon />
                      </button>
                      <button
                        onClick={() => navigate('/mail', { state: customer })}
                      >
                        <EmailIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customers
