module.exports = {
  // Set environments
  env: {
    node: true,         // Enables Node.js global variables (require, module, etc.)
    es2021: true,       // Enables modern JavaScript globals
  },

  // Base configurations to extend
  extends: [
    "airbnb-base",      // Airbnb style guide for base JavaScript (no React)
    "prettier"          // Disables ESLint rules that conflict with Prettier
  ],

  // Plugins used
  plugins: [
    "prettier"          // Integrates Prettier with ESLint
  ],

  // ESLint rules
  rules: {
    "prettier/prettier": "error",        // Show Prettier issues as ESLint errors
    "no-console": "off",                 // Allow console.log (useful in backend dev)
    "no-underscore-dangle": "off",       // Allow _id and other mongoose field patterns
    "no-param-reassign": "off",          // Allow modifying req/res objects (common in Express)
    "consistent-return": "off",          // Allow flexibility in returning from functions
  },

  // Parser options
  parserOptions: {
    ecmaVersion: "latest",               // Use latest ECMAScript syntax
    sourceType: "module",                // CommonJS module (require/export)
  }
};
