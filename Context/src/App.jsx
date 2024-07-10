import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import { BookProvider } from "./BookContext";
import "./index.scss";

function App() {
  return (
    <BookProvider>
      <div>
        <h1 className="h1" >Library App</h1>
        <BookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
