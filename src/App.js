import React from 'react';
import { useEffect } from 'react';
import './style.css';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>fdgffdgfgf</p>
    </div>
  );
}
