import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './../styles/LoginPage.css';

// Import logo
import hcmutLogo from '../assets/images/hcmut_logo.png';

const LoginPage = () => {
    const navigate = useNavigate();
    
    const handleTitleClick = () => {
        navigate('/');
    };

    const handleLogin = () => {
        // Sau này có thể thêm logic xác thực ở đây
        navigate('/dashboard');
    };
    
    return (
        <div className="login-page">
            
            {/* 1. Header: Logo và tên trường - Giống HomePage */}
            <div className="header-bar">
                
                {/* Phần 1: Logo và tên ĐHQG (Cột Trái) */}
                <div className="logo-section">
                    <img src={hcmutLogo} alt="Logo Bách Khoa" className="logo" />
                    <div className="university-names">
                        <p className="main-name">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
                        <p className="sub-name highlight">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
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

            {/* 2. Nội dung chính: Form đăng nhập */}
            <div className="main-content">
                {/* Khi ấn Tutor System sẽ quay về homepage */}
                <h1 className="title" onClick={handleTitleClick}>Tutor System</h1>
                
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Nhập Email:</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Email (@hcmut.edu.vn)"
                            required
                            maxLenght="30"
                            className="form-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            required
                            className="form-input"
                        />
                    </div>
                    
                    <button className="login-submit-button" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>

            {/* 3. Footer: Copyright */}
            <div className="footer">
                <p>© 2025 HCMUT - Tutor System</p>
            </div>
            
        </div>
    );
}

export default LoginPage;
