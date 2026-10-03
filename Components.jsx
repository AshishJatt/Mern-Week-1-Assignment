// Header.jsx
export const Header = ({ title }) => (
  <header style={{ padding: '1rem', background: '#1e293b', color: 'white' }}>
    <h1>{title}</h1>
  </header>
);

// Footer.jsx
export const Footer = ({ year }) => (
  <footer style={{ padding: '1rem', background: '#1e293b', color: 'white', textAlign: 'center' }}>
    <p>&copy; {year} My React App</p>
  </footer>
);

// Card.jsx
export const Card = ({ title, content, tag }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', margin: '0.5rem 0' }}>
    <h3>{title}</h3>
    <p>{content}</p>
    {tag && <small style={{ background: '#e2e8f0', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tag}</small>}
  </div>
);

// Button.jsx
export const Button = ({ label, onClick, variant = 'primary' }) => (
  <button 
    onClick={onClick}
    style={{
      padding: '0.5rem 1rem',
      backgroundColor: variant === 'primary' ? '#2563eb' : '#64748b',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    {label}
  </button>
);

// Form.jsx
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter text..." 
        style={{ padding: '0.5rem', flex: 1 }}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </form>
  );
};
