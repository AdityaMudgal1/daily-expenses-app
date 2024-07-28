# Daily Expenses Sharing Application

## Overview
This is a backend service for a daily-expenses sharing application. The application allows users to add expenses and split them based on three different methods: exact amounts, percentages, and equal splits. It manages user details, validates inputs, and generates downloadable balance sheets.

## Features
- User Management: Create and manage users with email, name, and mobile number.
- Expense Management: Add and manage expenses.
  - Equal: Split expenses equally among all participants.
  - Exact: Specify the exact amount each participant owes.
  - Percentage: Specify the percentage each participant owes.
- Balance Sheet: View individual and overall expenses and download balance sheets.

## Requirements
- Node.js
- MongoDB

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd daily-expenses-app
