/** @format */

import { nanoid } from '@reduxjs/toolkit';
import React, { useRef, useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SingleCartShop from '../components/cart/SingleCartShop';
import {
  buyProducts,
  addCart,
  removeCart,
  total,
  totalTax,
  updateTaxAndTotalWithTax,
  removeFromWishlist,
  amount,
  emptyCart,
  iva,
} from '../reducers/CartSlice';
import MainLayout from '../layout/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAddSripeMutation } from '../api/apiSlice';
import { useSession } from '../hooks/AuthSession';
import '../components/style/cart.css';

const CartShop = () => {
  const session = useSession();
  const dispatch = useDispatch();
  const totalAmount = useSelector(amount);
  console.log('Total', totalAmount);
  const totalItems = useSelector(total);
  const productsCart = useSelector(buyProducts);
  const tax = useSelector(iva);
  const [error, setError] = useState(null);

  const [addStripe] = useAddSripeMutation();

  console.log(totalAmount);
  console.log(tax);

  const totalWithTax = (totalAmount + (totalAmount * tax) / 100).toFixed(2);

  const handleRemove = productId => {
    const removedProduct = productsCart.find(
      product => product.id === productId
    );
    if (removedProduct) {
      dispatch(removeCart(productId));

      dispatch(updateTaxAndTotalWithTax); // Aggiorna la tassa e il totale con tasse

      toast.success('Prodotto rimosso dal carrello con successo');
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await addStripe({ productsCart, userdId: session?.id });

      if (response.data) {
        window.location.href = response.data.url;
      } else {
        setError('Error intern redirect');
      }
    } catch (error) {
      console.log(error);
      setError('Error internal fetch rtk query ');
    }
  };

  return (
    <MainLayout>
      <div>
        <Container>
          <div className='sfondo-cart content'>
            <h1 className='h1-cart'>
              <span class='right'>-Cart Shop-</span>
            </h1>
          </div>
          <Row>
            <Col
              xs={12}
              md={8}>
              <Card className='shadow my-5'>
                <Card.Body>
                  <Card.Title>Cart ({productsCart.length} Items)</Card.Title>
                  {productsCart &&
                    productsCart?.map(item => {
                      return (
                        <>
                          <Button
                            className='my-2'
                            onClick={() => handleRemove(item.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                          <ToastContainer />
                          {/* <span>{item.title} ({item.quantity})</span> */}

                          <SingleCartShop
                            key={nanoid()}
                            img={item.img}
                            title={item.title}
                            id={item._id}
                            description={item.description}
                            price={item.price}
                          />
                        </>
                      );
                    })}
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={4}>
              <Card className='shadow my-5'>
                <Card.Body>
                  <Card.Title>The total amount of</Card.Title>
                  <Row>
                    <Col
                      xs={8}
                      md={8}>
                      Temporary amount
                    </Col>
                    <Col
                      xs={4}
                      md={4}
                      className='text-right'>
                      ${totalAmount}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={8}
                      md={8}>
                      Tax {tax}%
                    </Col>
                    <Col
                      xs={4}
                      md={4}
                      className='text-right'>
                      ${(tax * totalAmount) / 100}
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col
                      xs={8}
                      md={8}>
                      <strong>Total amount of (including VAT {tax}%)</strong>
                    </Col>
                    <Col
                      xs={4}
                      md={4}
                      className='text-right'>
                      <strong>${totalWithTax}</strong>
                    </Col>
                  </Row>
                  <div className='text-center pt-3'>
                    <Button
                      onClick={handleCheckout}
                      variant='primary'
                      className='w-100'>
                      Go To Checkout
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card className='mt-2 shadow'>
                <Card.Body>
                  <Row>
                    <Col
                      xs={8}
                      md={8}>
                      Add a discount code (optional)
                    </Col>
                    <Col
                      xs={4}
                      md={4}
                      className='text-right'>
                      <i class='fa fa-chevron-down'></i>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  );
};

export default CartShop;
