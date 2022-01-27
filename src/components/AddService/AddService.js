import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //   add a new service
    fetch('https://aqueous-tundra-75877.herokuapp.com/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Service added successfully');
          reset();
        }
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="service-form">
        <h3 className="text-center primary-text">Add a New Service</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="service-input"
            {...register('name', { required: true })}
            type="text"
            placeholder="Service Name"
          />
          {errors.name && <span className="errors">Name is required</span>}
          <input
            className="service-input"
            {...register('cost', { required: true })}
            type="text"
            placeholder="Service Fee"
          />
          {errors.cost && (
            <span className="errors">Shipping fee is required</span>
          )}
          <textarea
            className="service-input"
            {...register('description', { required: true })}
            placeholder="Service Description"
          />
          {errors.description && (
            <span className="errors">Email is required</span>
          )}
          <input
            className="service-input"
            {...register('img', { required: true })}
            placeholder="image url"
          />
          {errors.img && <span className="errors">Image is required</span>}
          <input className="service-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
