import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/SchedulePage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';

const SchedulePage = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Cập nhật đồng hồ mỗi giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Dữ liệu mẫu cho lịch học
    const [scheduleData] = useState([
        {
            id: 1,
            subject: 'Lập trình hướng đối tượng',
            tutor: 'TS. Nguyễn Văn A',
            date: new Date(2025, 9, 20), // 20/10/2025
            time: '14:00 - 16:00',
            color: '#1565C0'
        },
        {
            id: 2,
            subject: 'Cấu trúc dữ liệu',
            tutor: 'ThS. Trần Thị B',
            date: new Date(2025, 9, 21), // 21/10/2025
            time: '09:00 - 11:00',
            color: '#2E7D32'
        },
        {
            id: 3,
            subject: 'Cơ sở dữ liệu',
            tutor: 'TS. Lê Văn C',
            date: new Date(2025, 9, 22), // 22/10/2025
            time: '15:30 - 17:30',
            color: '#F57C00'
        },
    ]);

    // Lấy tất cả ngày trong tháng
    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay(); // 0 = Chủ nhật

        const days = [];
        
        // Thêm các ngày trống trước ngày đầu tiên
        for (let i = 0; i < (startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1); i++) {
            days.push(null);
        }

        // Thêm các ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        // Đảm bảo luôn có đủ 42 ô (6 hàng x 7 cột) để grid luôn có kích thước cố định
        while (days.length < 42) {
            days.push(null);
        }

        return days;
    };

    // Lấy môn học cho một ngày cụ thể
    const getClassesForDay = (date) => {
        if (!date) return [];
        return scheduleData.filter(item => 
            item.date.getDate() === date.getDate() &&
            item.date.getMonth() === date.getMonth() &&
            item.date.getFullYear() === date.getFullYear()
        );
    };

    // Chuyển tháng
    const changeMonth = (delta) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1));
    };

    const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

    return (
        <div className="schedule-page">
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
                <div className="menu-item" onClick={() => navigate('/dashboard')}>
                    <span className="menu-icon">🏠</span>
                    <span className="menu-text">Trang Chủ</span>
                </div>
                <div className="menu-item">
                    <span className="menu-icon">👨‍🏫</span>
                    <span className="menu-text">Tìm Tutor</span>
                </div>
                <div className="menu-item active">
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
                {/* Calendar Section */}
                <div className="calendar-section">
                    <div className="calendar-header">
                        <button className="month-nav-btn" onClick={() => changeMonth(-1)}>
                            ◀
                        </button>
                        <h2 className="calendar-title">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h2>
                        <button className="month-nav-btn" onClick={() => changeMonth(1)}>
                            ▶
                        </button>
                    </div>

                    <div className="calendar-grid">
                        {/* Tiêu đề các ngày trong tuần */}
                        <div className="calendar-weekday">Thứ 2</div>
                        <div className="calendar-weekday">Thứ 3</div>
                        <div className="calendar-weekday">Thứ 4</div>
                        <div className="calendar-weekday">Thứ 5</div>
                        <div className="calendar-weekday">Thứ 6</div>
                        <div className="calendar-weekday">Thứ 7</div>
                        <div className="calendar-weekday">CN</div>

                        {/* Các ngày trong tháng */}
                        {getDaysInMonth(currentMonth).map((day, index) => {
                            const classes = day ? getClassesForDay(day) : [];
                            const isToday = day && 
                                day.getDate() === new Date().getDate() &&
                                day.getMonth() === new Date().getMonth() &&
                                day.getFullYear() === new Date().getFullYear();

                            return (
                                <div 
                                    key={index} 
                                    className={`calendar-day ${!day ? 'empty' : ''} ${isToday ? 'today' : ''}`}
                                >
                                    {day && (
                                        <>
                                            <div className="day-number">{day.getDate()}</div>
                                            <div className="day-classes">
                                                {classes.map(cls => (
                                                    <div 
                                                        key={cls.id} 
                                                        className="class-item"
                                                        style={{ backgroundColor: cls.color }}
                                                        title={`${cls.subject}\n${cls.time}\nTutor: ${cls.tutor}`}
                                                    >
                                                        <div className="class-name">{cls.subject}</div>
                                                        <div className="class-time">{cls.time}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SchedulePage;
