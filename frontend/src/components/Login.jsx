import { useState } from 'react';

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful form submission
      console.log('Form data:', { email, password });
      // Reset form fields
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <form className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 w-96" onSubmit={handleSubmit}>
        <h2 className="text-white text-2xl text-center mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white bg-opacity-20 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white bg-opacity-20 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Submit</button>
      </form>
    </div>
  );
};

export default Login;