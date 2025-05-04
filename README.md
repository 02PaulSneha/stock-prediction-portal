# 📈 Stock Prediction Portal

A full-stack web application that leverages Long Short-Term Memory (LSTM) neural networks to predict stock prices. Built with Django and React, the portal provides users with insightful visualizations, including 100-day and 200-day moving averages, and evaluates model performance using RMSE and R² metrics.

## 🚀 Features : 

#### 1)Full-Stack Architecture: Django backend with a React frontend for a seamless user experience.

#### 2)LSTM Model: Utilizes LSTM networks built with Keras for time series forecasting.
#### 3)Financial Data Integration: Fetches real-time stock data from financial APIs.
#### 4)Moving Averages: Displays 100-day and 200-day moving averages for selected stocks.
#### 5)Next-Day Price Prediction: Predicts the next day's stock price based on historical data.
#### 6)Model Evaluation: Presents RMSE and R² scores to assess prediction accuracy.
#### 7)Interactive Visualizations: Graphical representation of stock trends and predictions.

## 🛠️ Technologies Used : 

#### 1)Backend: Django
#### 2)Frontend: React
#### 3)Machine Learning: Keras, TensorFlow
#### 4)Data Manipulation: Pandas, NumPy
#### 5)Data Visualization: Matplotlib
#### 6)API Integration: Financial data APIs (e.g., Yahoo Finance)
#### 7)Styling: CSS, Bootstrap

## 📷 Screenshots : 


### 1)Home page of the Stock Prediction Portal :

![image](https://github.com/user-attachments/assets/062e3f5d-bfcd-4ea0-85ef-fe5719d1154e)


### 3)Stock analysis with moving averages and prediction :

#### Closing Price Plot for past 10 years :

![image](https://github.com/user-attachments/assets/f841ecbf-5053-4204-afbd-b74bf3b3300e)


#### 100 Days Moving Average(100_DMA) of selected ticker :

![image](https://github.com/user-attachments/assets/9ab938d2-5be8-4552-8b57-ac5e3749d90d)



#### 200 Days Moving Average(200_DMA) of selected ticker : 

![image](https://github.com/user-attachments/assets/73d73709-7499-49a9-bee8-f4461965f16e)



#### Final Prediction for ticker :

![image](https://github.com/user-attachments/assets/75598330-d01a-4d33-9ae8-4e980851b109)



#### Model Evaluation Metrics : 


![image](https://github.com/user-attachments/assets/dc942b93-b581-4b7c-bfd1-2272b79a2e4c)



Model evaluation metrics: RMSE,MSE and R².


## ⚙️ Installation : 

### Backend (Django)

1) Clone the repository:

#### git clone https://github.com/02PaulSneha/stock-prediction-portal.git 
#### cd stock-prediction-portal/backend

2) Create a virtual environment:

#### python -m venv venv
#### source venv/bin/activate  # On Windows: venv\Scripts\activate

3) Install dependencies:

pip install -r requirements.txt

4) Apply migrations:

python manage.py migrate

5) Run the development server:

python manage.py runserver


### Frontend (React)

1) Navigate to the frontend directory:

cd ../frontend

2) Install dependencies:

npm install

3) Start the React development server:

npm run dev

4) Access the application:

Open your browser and navigate to http://localhost:5173

## 📈 Usage : 

### 1) Enter Stock Symbol:
Input the desired stock ticker symbol (e.g., AAPL, GOOGL).

### 2) View Analysis:
Observe the 100-day and 200-day moving averages.

### 3) Review the predicted next-day stock price.

### 4) Model Evaluation:
Check RMSE and R² scores to assess prediction accuracy.

## 🤝 Contributing : 

### Contributions are welcome! Please follow these steps:

### 1) Fork the repository.
### 2) Create a new branch: git checkout -b feature/your-feature-name.
### 3) Commit your changes: git commit -m 'Add your feature'.
### 4) Push to the branch: git push origin feature/your-feature-name.
### 5) Open a pull request.

## 📄 License : 

This project is licensed under the MIT License. See the LICENSE file for details.

## 📬 Contact : 

For any inquiries or feedback, please contact:

#### Name: Sneha Paul
#### Email: snehabghs0@gmail.com
#### GitHub: 02PaulSneha






