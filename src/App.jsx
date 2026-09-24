import { useState } from "react";

function App() {
  // Password ki value store karne ke liye
  const [password, setPassword] = useState("");

  // Password show/hide karne ke liye
  const [showPassword, setShowPassword] = useState(false);

  // Input ki value change hone par
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Show/Hide button
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Password App</h1>

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter Password"
      />

      <button onClick={togglePassword}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default App;