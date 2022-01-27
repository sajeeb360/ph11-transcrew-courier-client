import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { name, description, img, cost, _id } = service;

  const { user } = useAuth();
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //
  const { id } = useParams();

  // handle on submit and send data to server
  const onSubmit = (data) => {
    const orderDetails = {
      serviceName: name,
      serviceFee: cost,
      img,
      id: _id,
      userName: data.name,
      userEmail: data.email,
      userPhone: data.phone,
      userAddress: data.address,
      status: 'pending',
    };
    fetch('https://aqueous-tundra-75877.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Service added successfully');
          reset();
        }
      });
  };

  // load service
  useEffect(() => {
    fetch(`https://aqueous-tundra-75877.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center primary-color">Place Order Now</h1>
        <Row className="pt-4">
          <Col md={6} sm={12} xs={12}>
            <div className="service-container">
              <div className="service-details">
                <div className="text-center">
                  <img src={img} alt="" />
                </div>
                <h2 className="mt-3">{name}</h2>
                <p>{description}</p>
                <h5>Shipping Cost : ${cost}</h5>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className="order-form">
              <h2 className="text-secondary text-center mb-5">
                Give us some details
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="order-input"
                  defaultValue={user.displayName}
                  {...register('name')}
                  type="text"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="errors">Name is required</span>
                )}
                <input
                  className="order-input"
                  defaultValue={user.email}
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="errors">Email is required</span>
                )}
                <input
                  className="order-input"
                  {...register('phone', { required: true })}
                  type="number"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <span className="errors">Password is required</span>
                )}
                <input
                  className="order-input"
                  {...register('address', { required: true })}
                  type="text"
                  placeholder="Address"
                />
                {errors.address && (
                  <span className="errors">Address is required</span>
                )}
                <input className="order-btn" type="submit" value="Submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;

// const services = [
//   {
//     "name": "Standard Courier",
//     "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
//     "img": "https://i.ibb.co/XtNsDfT/service1.jpg",
//      "cost":140
//   },
//   {
//     "name":"Door to Door",
//     "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
//     "img":"https://i.ibb.co/4j6Q2hp/Home-delivery-services-Online-delivery-concept-of-buying-grocery-food-medicine-essential-items-to-th.jpg",
//     "cost":230

//   },
//   {
//     "name":"Express Courier",
//     "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
//     "img":"https://i.ibb.co/nLW45XM/service3.jpg",
//     "cost":249
//   },
//   {"name":"Corporate Service",
// "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
// "img":"https://i.ibb.co/Sc9Ksvm/service4.jpg",
// "cost":190

// },
// {
//   "name":"Ware House",
//   "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
//   "img":"https://i.ibb.co/P5jxKH7/Equipment-delivery-process-of-the-warehouse-Warehouse-interior-logisti-and-factory-building-warehous.jpg",
//   "cost":330
// },
// {"name":"International Courier",
// "description":"We provide you the option of real time delivery state with which you can know the current status of product delivery.",
// "img":"https://i.ibb.co/rf7rqM9/service6.jpg"},
//  "cost",500
// ];
