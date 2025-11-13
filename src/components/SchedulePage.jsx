import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/SchedulePage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';
import SearchBar from './SearchBar';
import { getCoursesForCalendar } from '../data/coursesData';
import { useLanguage } from '../contexts/LanguageContext';

const SchedulePage = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [scheduleData, setScheduleData] = useState([]);

    // Cập nhật đồng hồ mỗi giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Lấy dữ liệu lịch học từ coursesData
    useEffect(() => {
        const courseSessions = getCoursesForCalendar();
        setScheduleData(courseSessions);
    }, []);

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

    const getMonthName = (monthIndex) => {
        const monthKeys = ['month1', 'month2', 'month3', 'month4', 'month5', 'month6',
                          'month7', 'month8', 'month9', 'month10', 'month11', 'month12'];
        return t(monthKeys[monthIndex]);
    };

    return (
        <div className="schedule-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={hcmutLogo} alt="Logo HCMUT" className="navbar-logo" />
                    <div className="navbar-university-names">
                        <p className="navbar-main-name">{t('vnuHcm')}</p>
                        <p className="navbar-sub-name">{t('hcmut')}</p>
                    </div>
                </div>

                <div className="navbar-center">
                    <SearchBar />
                </div>

                <div className="navbar-right">
                    <button className="notification-btn" title={t('notificationBtn')}>
                        🔔
                    </button>
                    <button className="message-btn" title={t('messageBtn')}>
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
                    <span className="menu-text">{t('home')}</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/courses')}>
                    <span className="menu-icon">📚</span>
                    <span className="menu-text">{t('courses')}</span>
                </div>
                <div className="menu-item active">
                    <span className="menu-icon">📅</span>
                    <span className="menu-text">{t('schedule')}</span>
                </div>
                <div className="menu-item">
                    <span className="menu-icon">⭐</span>
                    <span className="menu-text">{t('reviews')}</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/settings')}>
                    <span className="menu-icon">⚙️</span>
                    <span className="menu-text">{t('settings')}</span>
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
                            {getMonthName(currentMonth.getMonth())} {currentMonth.getFullYear()}
                        </h2>
                        <button className="month-nav-btn" onClick={() => changeMonth(1)}>
                            ▶
                        </button>
                    </div>

                    <div className="calendar-grid">
                        {/* Tiêu đề các ngày trong tuần */}
                        <div className="calendar-weekday">{t('monday')}</div>
                        <div className="calendar-weekday">{t('tuesday')}</div>
                        <div className="calendar-weekday">{t('wednesday')}</div>
                        <div className="calendar-weekday">{t('thursday')}</div>
                        <div className="calendar-weekday">{t('friday')}</div>
                        <div className="calendar-weekday">{t('saturday')}</div>
                        <div className="calendar-weekday">{t('sunday')}</div>

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
                                                        title={`${cls.title}\n${cls.time}\nGiảng viên: ${cls.instructor}`}
                                                        onClick={() => navigate(`/course/${cls.courseId}`)}
                                                    >
                                                        <div className="class-name">{cls.shortName}</div>
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
