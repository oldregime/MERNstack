// 1. TextUpdater Component
import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
        placeholder="Type something..."
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
};

// 2. Simple Form Component
const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          placeholder="Enter text..."
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// 4. Button Component
const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Click Me
    </button>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

// Example usage in a main App component
const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">React Assignment Solutions</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Text Updater</h2>
        <TextUpdater />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Simple Form</h2>
        <SimpleForm />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. User Card</h2>
        <UserCard name="John Doe" email="john.doe@example.com" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Button Component</h2>
        <Button />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Login Form</h2>
        <LoginForm />
      </section>
    </div>
  );
};

export default App;