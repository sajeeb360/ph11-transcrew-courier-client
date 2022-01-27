import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrders.css';
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [statusId, setStatusId] = useState();

  // delete order
  const handleDelete = (id) => {
    const proceed = window.confirm('Delete this order ?');
    if (proceed) {
      fetch(`https://aqueous-tundra-75877.herokuapp.com/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('order deleted successfully');
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  // update status (pending to approve)
  const handleStatus = (id) => {
    fetch(`https://aqueous-tundra-75877.herokuapp.com/orders/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatusId(id);
        }
      });
  };
  // load all orders
  useEffect(() => {
    fetch('https://aqueous-tundra-75877.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div className="manage-orders">
      <h1 className="primary-color text-center pb-5">Manage Orders</h1>
      <Table hover borderless responsive="md">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.userName}</td>
              <td>{order.userEmail}</td>
              <td>{order.userPhone}</td>
              <td>{order.serviceName}</td>
              <td>
                {order.status === 'pending' ? (
                  <span className="text-danger">Pending</span>
                ) : (
                  <span className="text-success">Approved</span>
                )}
              </td>
              <td>
                {order.status === 'pending' ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleStatus(order._id)}
                  >
                    Approve
                  </button>
                ) : (
                  <button className="btn btn-success btn-sm disabled">
                    Approve
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm ms-3 mt-2 mt-md-0"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
