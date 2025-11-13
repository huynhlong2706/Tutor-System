import React from 'react';
// 
import { useNavigate } from 'react-router-dom';
// Đảm bảo đường dẫn này đúng
import './../styles/HomePage.css'; 

// Đảm bảo logo nằm đúng vị trí trong assets/images
import hcmutLogo from '../assets/images/hcmut_logo.png'; 

function HomePage() {
  // Sử dụng useNavigate để điều hướng khi nút được nhấn
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-page">
      
      {/* 1. Header: Logo và tên trường - Dùng Flexbox để căn 3 cột */}
      <div className="header-bar">
        
        {/* Phần 1: Logo và tên ĐHQG (Cột Trái) */}
        <div className="logo-section">
          <img src={hcmutLogo} alt="Logo Bách Khoa" className="logo" />
          <div className="university-names">
            <p className="main-name">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
            <p className="sub-name ">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
          </div>
        </div>


        {/* Phần 2: Chữ tiếng Anh (Cột Phải) */}
        <div className="english-text">
          <div className="english-names">
            <p className="english-main-name">VIETNAM NATIONAL UNIVERSITY</p>
            <p className="english-sub-name">HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY</p>
          </div>
        </div>
      </div>

      {/* 2. Nội dung chính: Title và nút Đăng nhập */}
      <div className="main-content">
        <h1 className="title">Tutor System</h1>
        
        <button className="login-button" onClick={handleLoginClick}>
          Đăng nhập
        </button>
      </div>

      {/* 3. Footer: Copyright */}
      <div className="footer">
        <p>© 2025 HCMUT - Tutor System</p>
      </div>
      
    </div>
  );
}

export default HomePage;