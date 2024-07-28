# Daily Expenses Sharing Application

## Setup Instructions

1. Clone the repository

2. Install dependencies

3. Create a `.env` file in the root directory with the following content:

4. Start the server

5. The server will run on `http://localhost:5000`

## API Endpoints

### User Endpoints

- Create User
- `POST /users/create`
- Request Body:
 ```json
 {
   "name": "John Doe",
   "email": "john.doe@example.com",
   "mobile": "1234567890"
 }
 ```

- Retrieve User Details
- `GET /users/:id`

### Expense Endpoints

- Add Expense
- `POST /expenses/create`
- Request Body:
 ```json
 {
   "description": "Dinner",
   "amount": 3000,
   "paidBy": "user_id",
   "splitMethod": "equal",
   "participants": [
     { "user": "user_id_1" },
     { "user": "user_id_2" },
     { "user": "user_id_3" }
   ]
 }
 ```

- Retrieve Individual User Expenses
- `GET /expenses/user/:userId`

- Retrieve Overall Expenses
- `GET /expenses/all`

- Download Balance Sheet
- `GET /expenses/balance-sheet`
