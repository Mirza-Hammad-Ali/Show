import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
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
