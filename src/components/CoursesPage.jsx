import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/CoursesPage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';
import { getAllCourses } from '../data/coursesData';
import SearchBar from './SearchBar';
import { useLanguage } from '../contexts/LanguageContext';

const CoursesPage = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('All Levels');
    const [selectedPrice, setSelectedPrice] = useState('All Prices');

    // Cập nhật đồng hồ
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Load courses
    useEffect(() => {
        const allCourses = getAllCourses();
        setCourses(allCourses);
        setFilteredCourses(allCourses);
    }, []);

    // Filter courses
    useEffect(() => {
        let filtered = courses;

        // Filter by level
        if (selectedLevel !== 'All Levels') {
            filtered = filtered.filter(course => course.level === selectedLevel);
        }

        // Filter by price
        if (selectedPrice !== 'All Prices') {
            if (selectedPrice === 'Under 1.5M') {
                filtered = filtered.filter(course => course.price < 1500000);
            } else if (selectedPrice === '1.5M - 2M') {
                filtered = filtered.filter(course => course.price >= 1500000 && course.price <= 2000000);
            } else if (selectedPrice === 'Over 2M') {
                filtered = filtered.filter(course => course.price > 2000000);
            }
        }

        setFilteredCourses(filtered);
    }, [selectedLevel, selectedPrice, courses]);

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    return (
        <div className="courses-page">
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
                <div className="menu-item active">
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
                <div className="courses-header">
                    <h1 className="courses-title">{t('exploreCourses')}</h1>
                    {/*<p className="courses-subtitle">Khám phá {filteredCourses.length} khóa học để mở rộng kiến thức của bạn</p>*/}
                </div>

                {/* Filters Only */}
                <div className="courses-controls">
                    <div className="filters">
                        <select 
                            className="filter-select"
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                        >
                            <option>All Levels</option>
                            <option>BEGINNER</option>
                            <option>INTERMEDIATE</option>
                            <option>ADVANCED</option>
                        </select>
                        <select 
                            className="filter-select"
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}
                        >
                            <option>All Prices</option>
                            <option>Under 1.5M</option>
                            <option>1.5M - 2M</option>
                            <option>Over 2M</option>
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="results-info">
                    <p>Hiển thị {filteredCourses.length} khóa học</p>
                </div>

                {/* Courses Grid */}
                <div className="courses-grid">
                    {filteredCourses.map(course => (
                        <div 
                            key={course.id} 
                            className="course-card"
                            onClick={() => handleCourseClick(course.id)}
                        >
                            <div className="course-image">
                                <img src={course.thumbnail} alt={language === 'en' ? course.title_en : course.title} />
                                <span className="course-level">{course.level}</span>
                            </div>
                            <div className="course-content">
                                <p className="course-instructor">{language === 'en' ? course.instructor.name_en : course.instructor.name}</p>
                                <h3 className="course-title">{language === 'en' ? course.title_en : course.title}</h3>
                                <p className="course-description">{language === 'en' ? course.shortDescription_en : course.shortDescription}</p>
                                
                                <div className="course-stats">
                                    <span className="stat">
                                        ⭐ {course.rating} ({course.reviewCount})
                                    </span>
                                    <span className="stat">
                                        👥 {course.studentCount.toLocaleString()}
                                    </span>
                                    <span className="stat">
                                        ⏱️ {course.duration}
                                    </span>
                                </div>

                                <div className="course-footer">
                                    <span className="course-lessons">{course.lessonCount} bài học • {course.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="no-results">
                        <p>Không tìm thấy khóa học nào phù hợp với tiêu chí tìm kiếm.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CoursesPage;
