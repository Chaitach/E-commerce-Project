import { useState, useRef, useEffect } from 'react'
import { Nav, Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useLocalStorage } from 'react-use'
import Quotation from './Component/Quotation'
import ProductManagement from './Component/ProductManagement'
import Order from './Component/Order'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>E-commerce</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/react=quotation'>Home</Nav.Link>
            <Nav.Link href='/react=quotation/product-management'>Product</Nav.Link>
            <Nav.Link href='/Order'>Order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='react=quotation/product-management' element={<ProductManagement />} />
        <Route path='/react=quotation' element={<Quotation />} />
        <Route path='/Order' element={<Order />} />
      </Routes>
    </Router>
  )
}

export default App
