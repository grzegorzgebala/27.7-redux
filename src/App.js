import React from 'react';
import './App.css';
import CommentsListContainer from "./CommentsListContainer";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        Lista Komentarzy:
      </div>
      <CommentsListContainer />
    </div>
  );
};

export default App;