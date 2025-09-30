import React from 'react';
// Import component LoginPage mà bạn đã tạo trong thư mục components
import LoginPage from './components/HomePage'; 

function App() {
  return (
    // Chúng ta chỉ cần render component LoginPage
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;