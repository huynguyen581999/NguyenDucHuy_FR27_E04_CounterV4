import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './components/counter/class_components/Counter';
import Counter from './components/counter/function_components/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter heading='Bộ đếm Kmin' startC={0} endC={3} />
)