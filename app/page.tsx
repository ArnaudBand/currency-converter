"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import countries from "./countries";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [fromCountry, setFromCountry] = useState(countries[0]);
  const [toCountry, setToCountry] = useState(countries[1]);
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCountry.currency}`);
        if (!response.ok) throw new Error("Failed to fetch exchange rate");

        const data = await response.json();
        setExchangeRate(data.rates[toCountry.currency] || 1);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCountry, toCountry]);

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  // Swap the selected countries
  const swapCountries = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setFromCountry(toCountry);
      setToCountry(fromCountry);
      setIsSwapping(false);
    }, 500);
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-2xl rounded-2xl mt-10 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌍 Currency Converter
      </motion.h2>
      <p className="text-center text-sm text-gray-300 mb-6">
        Convert currencies instantly with live exchange rates.
      </p>

      {/* FROM Country */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">From:</label>
        <motion.select
          value={fromCountry.code}
          onChange={(e) => {
            const country = countries.find((c) => c.code === e.target.value);
            if (country) setFromCountry(country);
          }}
          className="mt-1 block w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white"
          whileHover={{ scale: 1.05 }}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name} ({country.currency})
            </option>
          ))}
        </motion.select>
      </div>

      {/* SWAP BUTTON */}
      <motion.button
        className="w-full bg-yellow-500 text-black py-2 rounded-lg font-bold my-4 hover:bg-yellow-400 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={swapCountries}
      >
        <motion.span
          animate={{ rotate: isSwapping ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          🔄
        </motion.span>{" "}
        Swap
      </motion.button>

      {/* TO Country */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">To:</label>
        <motion.select
          value={toCountry.code}
          onChange={(e) => {
            const country = countries.find((c) => c.code === e.target.value);
            if (country) setToCountry(country);
          }}
          className="mt-1 block w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white"
          whileHover={{ scale: 1.05 }}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name} ({country.currency})
            </option>
          ))}
        </motion.select>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Amount ({fromCountry.currency}):</label>
        <motion.input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          className="mt-1 block w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white"
          whileFocus={{ scale: 1.05 }}
        />
      </div>

      {/* Real-Time Exchange Rate */}
      <motion.div
        className="text-lg font-semibold text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-gray-400">1 {fromCountry.currency} =</span>{" "}
        <span className="text-yellow-400 font-bold">{exchangeRate.toFixed(4)}</span>{" "}
        <span className="text-gray-400">{toCountry.currency}</span>
      </motion.div>

      {/* Converted Amount */}
      <motion.div
        className="text-2xl font-semibold text-center bg-gray-800 py-3 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {convertedAmount.toFixed(2)} {toCountry.currency}
      </motion.div>
    </motion.div>
  );
};

export default CurrencyConverter;
