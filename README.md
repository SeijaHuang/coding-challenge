# RewardPay Accounting

This project is a simple project displaying the
five common account metrics

## Features

- Calculate common accounting metrics such as Revenue, Expense, Gross Profit Margin, Net Profit Margin, and Working Capital Ratio.
- Format currency and percentages.
- TypeScript support for type safety.
- Unit tests using Vitest.

## Installation

1. Install dependencies:

- npm install

2. Start the project we will see the printed metrics

- npm run dev

3. Run the unit tests

- npm run test

## Solution Approach for the Challenge:

### Reusability

When I was working on calculating revenue, expenses, GPM, NPM, and WCR, I noticed that the first step in all these calculations was filtering the data from data.json based on a given condition. Only the filtered data would then be used to sum up the total_value.

To make this filtering process reusable across different calculations, I designed a function that takes two parameters: the original data and the filtering condition. The function would return the filtered data based on the provided condition.

Initially, when working on revenue and expenses, the filtering condition was simple — I only needed to check if the account_category was either "revenue" or "expense." However, when I moved on to calculate GPM, I realized that the filtering condition required multiple criteria. To handle this, I modified the filtering condition to be an object and iterated through this object to apply multiple filters.

Later, while calculating WCR, I found that the filtering conditions needed to handle both AND and OR logic. To accommodate this, I extended the object-based filter to include arrays, ensuring that the relationships between different key-value pairs followed AND logic, while the values within an array followed OR logic.

Once all the filtering was complete, the data was summed up to calculate the total_value. This approach allowed me to create a reusable calTotalValue function, which I could use across all my calculations in the file.

### Maintainability

While refactoring my calculation formulas, I realized I could centralize the management of all filter conditions. To achieve this, I created a calculationParams.ts file, where I consolidated all the filtering criteria. This way, if I needed to modify or verify the correctness of any filter condition, I wouldn't have to search through multiple calculation formulas. Instead, I could manage them in one place, making the process more efficient and error-prone.

### Single Responsibility Principle

Additionally, I adhered to the Single Responsibility Principle. Each function was designed to handle a single responsibility:

- The calTotalValue function was solely responsible for summing up data based on the filtering criteria.
- Different calculation functions focused exclusively on their respective mathematical operations.
- Formatting functions were separated into two independent functions: one for formatting currency and another for formatting percentage.

These formatting functions were decoupled from the metric calculation logic, ensuring that all functions adhered to their specific responsibilities. This approach improved code clarity, reduced coupling, and made the functions easier to maintain and extend.

### Type Safety

To ensure type safety, I took the following steps:

- Defining Interfaces:
  I started by defining an interface for the data structure based on the content of data.json. Since the data retrieved from the backend or third-party APIs typically has a well-defined structure, creating an interface ensures type safety when manipulating the data later in the code.

- Using Enums for Filter Conditions:
  I defined enums for all filter conditions. This approach helps maintain a consistent naming convention across the team in a collaborative environment and avoids bugs caused by typos or incorrect string values.

- Explicit Type Annotations for Functions:
  I explicitly defined the types for all function parameters and return values. By doing this, I ensured that every function operates on and outputs data of the expected type, reducing runtime errors and improving code reliability.
