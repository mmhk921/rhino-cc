import React from 'react';

import SearchView from './Components/Search/SearchView';


function App() {
  if (typeof console === 'object') {
    console.log(
      '\n'
        + 'Hi guys! Let me know if you have any questions. 🍺\n'
        + '\n'
        + '— Mary\n'
    );
  }
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <SearchView />
    </div>
  );
}

export default App;
