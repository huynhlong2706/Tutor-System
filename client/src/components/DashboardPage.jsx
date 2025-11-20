import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/DashboardPage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';
import SearchBar from './SearchBar';
import { getUpcomingCourses, formatDate } from '../data/coursesData';
import { useLanguage } from '../contexts/LanguageContext';

const DashboardPage = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [upcomingSessions, setUpcomingSessions] = useState([]);
    
    // Cập nhật đồng hồ mỗi giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Lấy 3 khóa học gần nhất
    useEffect(() => {
        const courses = getUpcomingCourses(3);
        const sessions = courses.map(course => ({
            id: course.id,
            subject: language === 'en' ? course.title_en : course.title,
            tutor: language === 'en' ? course.instructor_en : course.instructor,
            time: course.timeSlot,
            date: formatDate(course.startDate),
            status: 'pending',
            avatar: course.thumbnail
        }));
        setUpcomingSessions(sessions);
    }, [language]);

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
            case 'pending': return t('confirm');
            case 'waiting': return t('waitingConfirm');
            case 'confirmed': return t('confirmed');
            default: return t('confirm');
        }
    };

    return (
        <div className="dashboard-page">
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
                <div className="menu-item active">
                    <span className="menu-icon">🏠</span>
                    <span className="menu-text">{t('home')}</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/courses')}>
                    <span className="menu-icon">📚</span>
                    <span className="menu-text">{t('courses')}</span>
                </div>
                <div className="menu-item" onClick={() => navigate('/schedule')}>
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
                <div className="welcome-section">
                    <h1 className="welcome-title">{t('welcome')}</h1>
                    {/*<p className="welcome-subtitle">Đây là tổng quan về hoạt động học tập của bạn</p>*/}
                </div>

                {/* Stats Boxes */}
                <div className="stats-container">
                    <div className="stat-box">
                        <div className="stat-number">8</div>
                        <div className="stat-label">{t('sessionsThisWeek')}</div>
                        <div className="stat-description">{t('scheduledSessions')}</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">12</div>
                        <div className="stat-label">{t('connectedTutors')}</div>
                        <div className="stat-description">{t('differentTutors')}</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">45</div>
                        <div className="stat-label">{t('completedSessions')}</div>
                        <div className="stat-description">{t('sessionsCompleted')}</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">90</div>
                        <div className="stat-label">{t('studyHours')}</div>
                        <div className="stat-description">{t('totalTime')}</div>
                    </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="upcoming-sessions">
                    <h2 className="section-title">{t('upcomingSessions')}</h2>
                    <p className="section-subtitle">{t('viewUpcoming')}</p>
                    
                    <div className="sessions-list">
                        {upcomingSessions.map(session => (
                            <div 
                                key={session.id} 
                                className="session-card"
                                onClick={() => navigate(`/course/${session.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
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
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleConfirmClick(session.id);
                                        }}
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
