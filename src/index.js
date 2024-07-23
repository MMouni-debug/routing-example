
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the import change
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
