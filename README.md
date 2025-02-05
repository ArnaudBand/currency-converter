# Currency Converter

A simple and interactive currency converter built with **React**, **TypeScript**, and **Tailwind CSS**. This tool allows users to convert currencies in real-time using live exchange rates. The user can select their source and destination countries and instantly see the converted value.

---

## Features

- **Real-time Exchange Rates**: Fetches live exchange rates for currency conversion.
- **Country Selection**: Users can select their source and destination countries.
- **Swap Countries**: Users can easily swap source and destination countries.
- **Search Functionality**: Easily search for countries or currencies by name, code, or currency.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Smooth Animations**: Powered by **Framer Motion** for smooth transitions and UI animations.

---

## Demo

View a live demo of the Currency Converter [here](#).

---

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed. If not, download and install it.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/ArnaudBand/currency-converter.git
    cd currency-converter
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to see the app in action.

---

## Technologies Used

- **React**: Front-end framework for building user interfaces.
- **TypeScript**: A strongly typed language built on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Framer Motion**: A library for creating animations in React.
- **ExchangeRate-API**: For fetching live exchange rates (or use any other similar API).

---

## How It Works

1. **Country Selection**:
   - Users can select the source and destination countries from a dropdown list.
   - You can also search for countries or currencies by name, code, or currency.
   
2. **Live Exchange Rates**:
   - When a user selects a country, the corresponding currency is fetched.
   - The exchange rate is fetched in real-time from the ExchangeRate-API.

3. **Currency Conversion**:
   - Users can input an amount in the source currency.
   - The app calculates and displays the equivalent amount in the destination currency.

4. **Swap Functionality**:
   - Users can swap the source and destination countries with a simple button click.

---

## Code Structure

- **`src/`**: Contains the source code for the application.
  - **`components/`**: Contains all the reusable UI components.
  - **`App.tsx`**: The main entry point for the application.
  - **`countries.ts`**: A file that holds the list of countries and their respective currencies.

- **`tailwind.config.js`**: Configuration file for Tailwind CSS.

- **`package.json`**: Contains dependencies and scripts for the app.

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome for any features, bug fixes, or enhancements.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **ExchangeRate-API**: For providing the exchange rate API.
- **Tailwind CSS**: For the awesome utility-first CSS framework.
- **Framer Motion**: For creating smooth and beautiful animations.
- **React**: For the powerful JavaScript library for building user interfaces.
- **TypeScript**: For the strongly typed language built on JavaScript.