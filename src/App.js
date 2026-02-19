import React from 'react';

// This component intentionally contains a syntax error
function App() {
  return (
    <div>
      <h1>Broken React App</h1>
      <p>This app will not build due to a syntax error.
    </div>
  ); // Missing closing </p> tag and parenthesis
}

export default App;
