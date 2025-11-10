import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/DashboardPage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';

const DashboardPage = () => {
    const navigate = useNavigate();
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    
    // Cập nhật đồng hồ mỗi giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Dữ liệu mẫu cho các buổi học
    const [upcomingSessions, setUpcomingSessions] = useState([
        {
            id: 1,
            subject: 'Lập trình hướng đối tượng',
            tutor: 'TS. Nguyễn Văn A',
            time: '14:00 - 16:00',
            date: '20/10/2025',
            status: 'pending', // pending, waiting, confirmed
            avatar: 'https://via.placeholder.com/60'
        },
        {
            id: 2,
            subject: 'Cấu trúc dữ liệu và giải thuật',
            tutor: 'ThS. Trần Thị B',
            time: '09:00 - 11:00',
            date: '21/10/2025',
            status: 'pending',
            avatar: 'https://via.placeholder.com/60'
        },
        {
            id: 3,
            subject: 'Cơ sở dữ liệu',
            tutor: 'TS. Lê Văn C',
            time: '15:30 - 17:30',
            date: '22/10/2025',
            status: 'confirmed',
            avatar: 'https://via.placeholder.com/60'
        }
    ]);

    // Xử lý click nút xác nhận
    const handleConfirmClick = (sessionId) => {
        console.log('Button clicked! Session ID:', sessionId);
        
        setUpcomingSessions(sessions => {
            const updatedSessions = sessions.map(session => {
                if (session.id === sessionId) {
                    console.log('Current status:', session.status);
                    
                    if (session.status === 'pending') {
                        console.log('Changing to waiting...');
                        return { ...session, status: 'waiting' };
                    } else if (session.status === 'waiting') {
                        console.log('Changing to confirmed...');
                        return { ...session, status: 'confirmed' };
                    }
                }
                return session;
            });
            
            console.log('Updated sessions:', updatedSessions);
            return updatedSessions;
        });
    };

    // Hiển thị text button dựa vào trạng thái
    const getButtonText = (status) => {
        switch (status) {
            case 'pending': return 'Xác nhận';
            case 'waiting': return 'Chờ xác nhận';
            case 'confirmed': return 'Đã xác nhận';
            default: return 'Xác nhận';
        }
    };

    return (
        <div className="dashboard-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={hcmutLogo} alt="Logo HCMUT" className="navbar-logo" />
                    <div className="navbar-university-names">
                        <p className="navbar-main-name">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
                        <p className="navbar-sub-name">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
                    </div>
                </div>

                <div className="navbar-center">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm môn học, tutor..." 
                        className="search-box"
                    />
                </div>

                <div className="navbar-right">
                    <button className="notification-btn" title="Thông báo">
                        🔔
                    </button>
                    <button className="message-btn" title="Tin nhắn">
                        💬
                    </button>
                    <div className="analog-clock">
                        <div className="clock-face">
                            <div 
                                className="hour-hand" 
                                style={{
                                    transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)`
                                }}
                            ></div>
                            <div 
                                className="minute-hand" 
                                style={{
                                    transform: `rotate(${currentTime.getMinutes() * 6}deg)`
                                }}
                            ></div>
                            <div 
                                className="second-hand" 
                                style={{
                                    transform: `rotate(${currentTime.getSeconds() * 6}deg)`
                                }}
                            ></div>
                            <div className="clock-center"></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div 
                className={`sidebar ${isMenuExpanded ? 'expanded' : ''}`}
                onMouseEnter={() => setIsMenuExpanded(true)}
                onMouseLeave={() => setIsMenuExpanded(false)}
            >
                <div className="menu-item">
                    <span className="menu-icon">🏠</span>
                    <span className="menu-text">Trang Chủ</span>
                </div>
                <div className="menu-item">
                    <span className="menu-icon">👨‍🏫</span>
                    <span className="menu-text">Tìm Tutor</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/schedule')}>
                    <span className="menu-icon">📅</span>
                    <span className="menu-text">Lịch học</span>
                </div>
                <div className="menu-item">
                    <span className="menu-icon">⭐</span>
                    <span className="menu-text">Đánh giá</span>
                </div>
                <div className="menu-item">
                    <span className="menu-icon">⚙️</span>
                    <span className="menu-text">Cài đặt</span>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <div className="welcome-section">
                    <h1 className="welcome-title">Chào mừng bạn trở lại</h1>
                    <p className="welcome-subtitle">Đây là tổng quan về hoạt động học tập của bạn</p>
                </div>

                {/* Stats Boxes */}
                <div className="stats-container">
                    <div className="stat-box">
                        <div className="stat-number">8</div>
                        <div className="stat-label">Buổi học tuần này</div>
                        <div className="stat-description">Buổi học đã đặt</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">12</div>
                        <div className="stat-label">Số tutor đã kết nối</div>
                        <div className="stat-description">Tutor khác nhau</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">45</div>
                        <div className="stat-label">Số buổi đã học</div>
                        <div className="stat-description">Buổi đã hoàn thành</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">90</div>
                        <div className="stat-label">Số giờ đã học</div>
                        <div className="stat-description">Tổng thời gian</div>
                    </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="upcoming-sessions">
                    <h2 className="section-title">Buổi học sắp tới</h2>
                    <p className="section-subtitle">Các buổi học đã được lên lịch</p>
                    
                    <div className="sessions-list">
                        {upcomingSessions.map(session => (
                            <div key={session.id} className="session-card">
                                <div className="session-left">
                                    <div className="tutor-avatar">
                                        <img src={session.avatar} alt={session.tutor} />
                                    </div>
                                    <div className="session-info">
                                        <h3 className="session-subject">{session.subject}</h3>
                                        <p className="session-tutor">Tutor: {session.tutor}</p>
                                    </div>
                                </div>
                                <div className="session-right">
                                    <div className="session-time">{session.time}</div>
                                    <div className="session-date">{session.date}</div>
                                    <button 
                                        className={`confirm-btn status-${session.status}`}
                                        onClick={() => handleConfirmClick(session.id)}
                                        disabled={session.status === 'confirmed'}
                                    >
                                        {getButtonText(session.status)}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
