Modern React Calculator

This is a fully functional calculator built with React and TypeScript. It features both Normal and Scientific modes, with support for basic arithmetic operations and advanced mathematical functions. The application also has responsive design support for both mobile and desktop views.

---

Features:
- Normal Mode: Basic arithmetic operations (addition, subtraction, multiplication, division).
- Scientific Mode: Trigonometric functions (sin, cos, tan), square root, exponentiation, and constants like π and e.
- Backspace Key: Delete one digit at a time using the backspace key.
- Keyboard Support: Supports full keyboard input for numbers and operations.
- Responsive Design: Optimized for mobile and desktop.
- Error Handling: Displays "Error" if an invalid operation occurs.

---

Installation Instructions:

1. Clone the repository:
   git clone https://github.com/your-username/modern-react-calculator.git

2. Navigate to the project directory:
   cd modern-react-calculator

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

   The app will be running at http://localhost:3000.

---

Key Features:

- Normal Mode: Includes basic operations: +, -, *, /, =, AC, and %.
- Scientific Mode: Includes advanced operations like sin, cos, tan, square root, x², x³, reciprocal, π, and e.
- Backspace: Deletes one digit at a time.
- Keyboard Support: Supports numeric keys (0-9), operators (+, -, *, /), decimal (.), and backspace key.

---

File Structure:

src/
├── components/
│   ├── Button.tsx         # Button component
│   ├── Display.tsx        # Display component
│   ├── History.tsx        # History component
│   ├── NormalMode.tsx     # Normal mode layout
│   ├── ScientificMode.tsx # Scientific mode layout
│   └── Calculator.tsx     # Main Calculator component
├── hooks/
│   └── useCalculatorLogic.ts # Custom hook for managing calculator logic
├── App.css                # Styles
├── App.tsx                 # Main entry point
└── index.tsx               # ReactDOM render entry point

---

Technologies Used:

- React
- TypeScript
- math.js (for evaluating math expressions)
- CSS (for styling and responsiveness)

---

How to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix: git checkout -b feature-name
3. Make your changes and commit them: git commit -am 'Add new feature'
4. Push your branch to your forked repository: git push origin feature-name
5. Open a Pull Request to merge your changes.

---

License:

This project is open-source and licensed under the MIT License.

---

Enjoy using the Modern React Calculator! 🎉
