import React, { useState } from "react";

function DiscountCalculator() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDiscount = () => {
    setError("");
    setResult(null);

    const amt = parseFloat(amount);
    const disc = parseFloat(discount);

    if (isNaN(amt) || isNaN(disc)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (amt <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    if (disc < 0 || disc > 100) {
      setError("Discount must be between 0 and 100.");
      return;
    }

    const saved = (amt * disc) / 100;
    const final = amt - saved;

    setResult({
      saved: saved.toFixed(2),
      final: final.toFixed(2),
    });
  };

  const resetFields = () => {
    setAmount("");
    setDiscount("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <i className="fas fa-tags text-purple-500 text-3xl mb-3"></i>
          <h1 className="text-3xl font-bold text-purple-400">
            Discount Calculator
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Smart savings made simple
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-purple-600/20 border border-purple-500 text-purple-300 text-center text-sm py-2 rounded-lg mb-6">
          <i className="fas fa-fire mr-2"></i>
          Special Sale Tool – Calculate Instantly
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            {/* <i className="fas fa-indian-rupee-sign mr-2 text-purple-400"></i> */}
            Amount (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter total amount"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </div>

        {/* Discount Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            {/* <i className="fas fa-percent mr-2 text-purple-400"></i> */}
            Discount (%)
          </label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter discount percentage"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-400 text-sm mb-4 text-center">
            <i className="fas fa-circle-exclamation mr-2"></i>
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={calculateDiscount}
            className="flex-1 bg-purple-600 hover:bg-purple-700 py-2 rounded-xl font-semibold transition shadow-lg shadow-purple-600/30"
          >
            <i className="fas fa-calculator mr-2"></i>
            Calculate
          </button>

          <button
            onClick={resetFields}
            className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-xl font-semibold transition"
          >
            <i className="fas fa-rotate-right mr-2"></i>
            Reset
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5">

            <h2 className="text-lg font-semibold text-purple-400 mb-4 text-center">
              <i className="fas fa-chart-line mr-2"></i>
              Savings Summary
            </h2>

            <div className="flex justify-between mb-2 text-gray-300">
              <span>
                <i className="fas fa-money-bill-wave mr-2 text-gray-400"></i>
                You Saved
              </span>
              <span className="text-red-400 font-semibold">
                ₹{result.saved}
              </span>
            </div>

            <div className="border-t border-gray-700 my-3"></div>

            <div className="flex justify-between text-green-400 font-bold text-lg">
              <span>
                <i className="fas fa-wallet mr-2"></i>
                Final Price
              </span>
              <span>₹{result.final}</span>
            </div>

          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-xs">
          <i className="fab fa-react mr-2 text-blue-400"></i>
          Built with React & Tailwind CSS
        </div>

      </div>
    </div>
  );
}

export default DiscountCalculator;