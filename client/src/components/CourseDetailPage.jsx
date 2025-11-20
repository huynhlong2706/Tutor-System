import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './../styles/CourseDetailPage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';
import { getCourseById } from '../data/coursesData';
import SearchBar from './SearchBar';
import { useLanguage } from '../contexts/LanguageContext';

const CourseDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [course, setCourse] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    // Cập nhật đồng hồ
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Load course
    useEffect(() => {
        const courseData = getCourseById(id);
        if (courseData) {
            setCourse(courseData);
        } else {
            navigate('/courses');
        }
    }, [id, navigate]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-detail-page">
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
                {/* Course Hero */}
                <div className="course-hero">
                    <div className="hero-content">
                        <span className="course-badge">{course.level}</span>
                        <h1 className="course-hero-title">{language === 'en' ? course.title_en : course.title}</h1>
                        <p className="course-hero-description">{language === 'en' ? course.description_en : course.description}</p>
                        
                        <div className="course-hero-stats">
                            <span className="hero-stat">
                                ⭐ {course.rating} ({course.reviewCount} reviews)
                            </span>
                            <span className="hero-stat">
                                👥 {course.studentCount.toLocaleString()} students
                            </span>
                        </div>

                        <div className="course-meta">
                            <span>Created by <strong>{language === 'en' ? course.instructor.name_en : course.instructor.name}</strong></span>
                            <span>🌐 {course.language}</span>
                        </div>
                    </div>

                    <div className="hero-sidebar">
                        <div className="hero-info-box">
                            <div className="course-info-item">
                                <span className="info-icon">📄</span>
                                <div>
                                    <strong>{course.lessonCount} {t('lessons')}</strong>
                                    <p>{t('detailedContent')}</p>
                                </div>
                            </div>
                            <div className="course-info-item">
                                <span className="info-icon">⏱️</span>
                                <div>
                                    <strong>{course.duration}</strong>
                                    <p>{t('onDemandVideo')}</p>
                                </div>
                            </div>
                            <div className="course-info-item">
                                <span className="info-icon">📊</span>
                                <div>
                                    <strong>{t('lifetimeAccess')}</strong>
                                    <p>{t('learnAnywhere')}</p>
                                </div>
                            </div>
                            <button className="enroll-btn">{t('enrollNow')}</button>
                        </div>
                    </div>
                </div>

                {/* Instructor Info - Moved before tabs */}
                <div className="instructor-section">
                    <div className="instructor-container">
                        <h3 className="section-title">{t('instructor')}</h3>
                        <div className="instructor-card">
                            <div className="instructor-avatar">
                                {course.instructor.avatar.includes('placeholder') ? (
                                    <div className="avatar-placeholder" style={{
                                        background: course.instructor.avatar.match(/\/([A-F0-9]{6})/)?.[1] 
                                            ? `#${course.instructor.avatar.match(/\/([A-F0-9]{6})/)[1]}` 
                                            : '#1976D2'
                                    }}>
                                        {(language === 'en' ? course.instructor.name_en : course.instructor.name).charAt(0)}
                                    </div>
                                ) : (
                                    <img src={course.instructor.avatar} alt={language === 'en' ? course.instructor.name_en : course.instructor.name} />
                                )}
                            </div>
                            <div>
                                <h4>{language === 'en' ? course.instructor.name_en : course.instructor.name}</h4>
                                <p className="instructor-role">{language === 'en' ? course.instructor.title_en : course.instructor.title}</p>
                                <p className="instructor-desc">{language === 'en' ? course.instructor.description_en : course.instructor.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="course-tabs-container">
                    <div className="course-tabs">
                        <button 
                            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            {t('overview')}
                        </button>
                        <button 
                            className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
                            onClick={() => setActiveTab('curriculum')}
                        >
                            {t('curriculum')}
                        </button>
                        <button 
                            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            {t('reviewsTab')} ({course.reviewCount})
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === 'overview' && (
                        <div className="overview-content">
                            <div className="content-section">
                                <h2 className="section-heading">{t('aboutCourse')}</h2>
                                <p className="section-text">{language === 'en' ? course.description_en : course.description}</p>
                            </div>

                            <div className="content-section">
                                <h2 className="section-heading">{t('whyChoose')}</h2>
                                <p className="section-text">
                                    {language === 'en' ? course.whyChoose_en : course.whyChoose}
                                </p>
                            </div>

                            <div className="content-section">
                                <h2 className="section-heading">{t('whatYouLearn')}</h2>
                                <div className="learn-grid">
                                    {(language === 'en' ? course.whatYouLearn_en : course.whatYouLearn).map((item, index) => (
                                        <div key={index} className="learn-item">
                                            ✓ {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="content-section">
                                <h2 className="section-heading">{t('requirements')}</h2>
                                <ul className="requirements-list">
                                    {(language === 'en' ? course.requirements_en : course.requirements).map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-section">
                                <h2 className="section-heading">{t('courseDetails')}</h2>
                                <div className="details-grid">
                                    <div className="detail-item">
                                        <span className="detail-icon">🌐</span>
                                        <div>
                                            <strong>{t('languageLabel')}</strong> {course.language}
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📊</span>
                                        <div>
                                            <strong>{t('levelLabel')}</strong> {course.level}
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">⏱️</span>
                                        <div>
                                            <strong>{t('durationLabel')}</strong> {course.duration}
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📄</span>
                                        <div>
                                            <strong>{t('lessonsLabel')}</strong> {course.lessonCount} {t('lessonsCount')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'curriculum' && (
                        <div className="curriculum-content">
                            <p className="curriculum-info">
                                {course.curriculum.length} chương • {course.lessonCount} bài học • {course.duration} tổng thời lượng
                            </p>
                            
                            {course.curriculum.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="curriculum-section">
                                    <div className="section-header">
                                        <h3>
                                            <span className="section-arrow">▼</span>
                                            {section.section}
                                        </h3>
                                        <span className="section-info">{section.lessons.length} bài học</span>
                                    </div>
                                    <div className="lessons-list">
                                        {section.lessons.map((lesson, lessonIndex) => (
                                            <div key={lessonIndex} className="lesson-item">
                                                <span className="lesson-icon">
                                                    {lesson.type === 'video' ? '▶️' : '📝'}
                                                </span>
                                                <span className="lesson-title">{lesson.title}</span>
                                                <span className="lesson-duration">{lesson.duration}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews-content">
                            <div className="reviews-header">
                                <h2 className="section-heading">Đánh giá ({course.reviewCount})</h2>
                                <p>Xem sinh viên nói gì về khóa học này</p>
                            </div>
                            
                            {course.reviews.length > 0 ? (
                                course.reviews.map(review => (
                                    <div key={review.id} className="review-card">
                                        <div className="review-header">
                                            <strong>{review.studentName}</strong>
                                            <span className="review-rating">{'⭐'.repeat(review.rating)}</span>
                                        </div>
                                        <p className="review-date">{review.date}</p>
                                        <p className="review-comment">{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-reviews">Chưa có đánh giá. Hãy là người đầu tiên đánh giá khóa học này!</p>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CourseDetailPage;
