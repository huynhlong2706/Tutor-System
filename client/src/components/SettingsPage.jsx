import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/SettingsPage.css';
import hcmutLogo from '../assets/images/hcmut_logo.png';
import SearchBar from './SearchBar';
import { useLanguage } from '../contexts/LanguageContext';

const SettingsPage = () => {
    const navigate = useNavigate();
    const { language, changeLanguage, t } = useLanguage();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    // Settings state
    const [profile, setProfile] = useState({
        name: 'Nguyễn Văn A',
        email: 'student@hcmut.edu.vn',
        phone: '0123456789',
        studentId: '2012345'
    });

    const [originalProfile, setOriginalProfile] = useState({
        name: 'Nguyễn Văn A',
        email: 'student@hcmut.edu.vn',
        phone: '0123456789',
        studentId: '2012345'
    });

    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        sms: false
    });

    // Cập nhật đồng hồ
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleProfileChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleNotificationChange = (field) => {
        setNotifications(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleEdit = () => {
        setIsEditing(true);
        setOriginalProfile({...profile});
    };

    const handleCancel = () => {
        setIsEditing(false);
        setProfile({...originalProfile});
    };

    const handleSave = () => {
        setIsEditing(false);
        setOriginalProfile({...profile});
        alert(t('save'));
    };

    return (
        <div className="settings-page">
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
                    <SearchBar />
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
                <div className="menu-item active">
                    <span className="menu-icon">⚙️</span>
                    <span className="menu-text">{t('settings')}</span>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <div className="settings-header">
                    <div className="settings-header-content">
                        <div>
                            <h1 className="settings-title">{t('settingsTitle')}</h1>
                            <p className="settings-subtitle">{t('settingsSubtitle')}</p>
                        </div>
                    </div>
                </div>

                <div className="settings-container">
                    <div className="settings-left-column">
                        {/* Profile Settings */}
                        <div className="settings-section">
                            <h2 className="section-title">
                                <span className="section-icon">👤</span>
                                {t('personalInfo')}
                            </h2>
                            <div className="settings-content">
                                <div className="form-group">
                                    <label>{t('fullName')}</label>
                                    <input
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => handleProfileChange('name', e.target.value)}
                                        className="form-input"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('email')}</label>
                                    <input
                                        type="email"
                                        value={profile.email}
                                        onChange={(e) => handleProfileChange('email', e.target.value)}
                                        className="form-input"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('phone')}</label>
                                    <input
                                        type="tel"
                                        value={profile.phone}
                                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                                        className="form-input"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('studentId')}</label>
                                    <input
                                        type="text"
                                        value={profile.studentId}
                                        onChange={(e) => handleProfileChange('studentId', e.target.value)}
                                        className="form-input"
                                        disabled
                                    />
                                </div>
                            </div>
                            {isEditing && (
                                <div className="section-actions">
                                    <button className="cancel-btn" onClick={handleCancel}>
                                        {t('cancel')}
                                    </button>
                                    <button className="save-section-btn" onClick={handleSave}>
                                        {t('save')}
                                    </button>
                                </div>
                            )}
                            {!isEditing && (
                                <div className="section-actions">
                                    <button className="edit-btn" onClick={handleEdit}>
                                        {t('editButton')}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="settings-right-column">
                        {/* Notification Settings */}
                        <div className="settings-section">
                            <h2 className="section-title">
                                <span className="section-icon">🔔</span>
                                {t('notifications')}
                            </h2>
                            <div className="settings-content">
                                <div className="toggle-group">
                                    <div className="toggle-item">
                                        <div>
                                            <h4>{t('emailNotif')}</h4>
                                            <p>{t('emailNotifDesc')}</p>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.email}
                                                onChange={() => handleNotificationChange('email')}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                    <div className="toggle-item">
                                        <div>
                                            <h4>{t('pushNotif')}</h4>
                                            <p>{t('pushNotifDesc')}</p>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.push}
                                                onChange={() => handleNotificationChange('push')}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                    <div className="toggle-item">
                                        <div>
                                            <h4>{t('smsNotif')}</h4>
                                            <p>{t('smsNotifDesc')}</p>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.sms}
                                                onChange={() => handleNotificationChange('sms')}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Language Settings */}
                        <div className="settings-section">
                            <h2 className="section-title">
                                <span className="section-icon">🌐</span>
                                {t('language')}
                            </h2>
                            <div className="settings-content">
                                <div className="form-group">
                                    <label>{t('chooseLanguage')}</label>
                                    <select
                                        value={language}
                                        onChange={(e) => changeLanguage(e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="vi">{t('vietnamese')}</option>
                                        <option value="en">{t('english')}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
