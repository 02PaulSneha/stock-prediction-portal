import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction App</h1>
          <p className='text-light lead'>
            A web-based application that allows users to view and predict stock trends using machine learning algorithms. 
            The frontend is built using React for a dynamic and responsive user interface, while Django serves as the backend framework handling APIs, user authentication, and database management. 
            A trained machine learning model predicts future stock prices based on historical data, technical indicators, and news sentiment analysis.
          </p>
          <Button text="Explore Now" className="btn-outline-success" url="/dashboard" />
  </div>
      </div>
    </>
  )
}

export default Main
