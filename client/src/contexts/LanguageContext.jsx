import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

// Mock API để lưu/load ngôn ngữ
const languageAPI = {
    save: (lang) => {
        localStorage.setItem('appLanguage', lang);
    },
    load: () => {
        return localStorage.getItem('appLanguage') || 'vi';
    }
};

// Translations
const translations = {
    vi: {
        // Navbar
        searchPlaceholder: 'Tìm kiếm môn học, tutor...',
        
        // Menu
        home: 'Trang Chủ',
        courses: 'Khóa học',
        schedule: 'Lịch học',
        reviews: 'Đánh giá',
        settings: 'Cài đặt',
        
        // Settings Page
        settingsTitle: 'Cài đặt',
        settingsSubtitle: 'Quản lý thông tin cá nhân và tùy chọn của bạn',
        editButton: '✏️ Chỉnh sửa',
        personalInfo: 'Thông tin cá nhân',
        notifications: 'Thông báo',
        language: 'Ngôn ngữ',
        
        // Profile Form
        fullName: 'Họ và tên',
        email: 'Email',
        phone: 'Số điện thoại',
        studentId: 'MSSV',
        
        // Notifications
        emailNotif: 'Thông báo Email',
        emailNotifDesc: 'Nhận thông báo qua email',
        pushNotif: 'Thông báo Push',
        pushNotifDesc: 'Nhận thông báo trên trình duyệt',
        smsNotif: 'Thông báo SMS',
        smsNotifDesc: 'Nhận thông báo qua tin nhắn SMS',
        
        // Language
        chooseLanguage: 'Chọn ngôn ngữ',
        vietnamese: 'Tiếng Việt',
        english: 'English',
        
        // Buttons
        save: '💾 Lưu thay đổi',
        cancel: 'Hủy',
        
        // Course Detail
        overview: 'Tổng quan',
        curriculum: 'Nội dung',
        reviewsTab: 'Đánh giá',
        instructor: 'Giảng viên',
        aboutCourse: 'Về khóa học này',
        whyChoose: 'Tại sao chọn khóa học này?',
        whatYouLearn: 'Bạn sẽ học được gì',
        requirements: 'Yêu cầu',
        courseDetails: 'Chi tiết khóa học',
        enrollNow: 'Đăng ký ngay',
        
        // Course Info
        lessons: 'bài học',
        detailedContent: 'Nội dung chi tiết',
        onDemandVideo: 'Video theo yêu cầu',
        lifetimeAccess: 'Truy cập trọn đời',
        learnAnywhere: 'Học mọi lúc mọi nơi',
        
        // Course Details
        languageLabel: 'Ngôn ngữ:',
        levelLabel: 'Cấp độ:',
        durationLabel: 'Thời lượng:',
        lessonsLabel: 'Bài học:',
        lessonsCount: 'bài',
        
        // Courses Page
        exploreCourses: 'Khám phá Khóa học',
        discoverCourses: 'Khám phá {count} khóa học để mở rộng kiến thức của bạn',
        showingCourses: 'Hiển thị {count} khóa học',
        
        // Dashboard
        welcome: 'Chào mừng trở lại!',
        upcomingSessions: 'Lịch học sắp tới',
        viewUpcoming: 'Xem 3 buổi học sắp diễn ra của bạn',
        totalCourses: 'Tổng số khóa học',
        enrolledCourses: 'Khóa học đã đăng ký',
        completedCourses: 'Khóa học hoàn thành',
        inProgressCourses: 'Đang học',
        upcomingClasses: 'Lớp học sắp tới',
        confirm: 'Xác nhận',
        waitingConfirm: 'Chờ xác nhận',
        confirmed: 'Đã xác nhận',
        notificationBtn: 'Thông báo',
        messageBtn: 'Tin nhắn',
        
        // Dashboard Stats
        sessionsThisWeek: 'Buổi học tuần này',
        scheduledSessions: 'Buổi học đã đặt',
        connectedTutors: 'Số tutor đã kết nối',
        differentTutors: 'Tutor khác nhau',
        completedSessions: 'Số buổi đã học',
        sessionsCompleted: 'Buổi đã hoàn thành',
        studyHours: 'Số giờ đã học',
        totalTime: 'Tổng thời gian',
        
        // University
        vnuHcm: 'ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH',
        hcmut: 'TRƯỜNG ĐẠI HỌC BÁCH KHOA',
        
        // Schedule/Calendar
        monday: 'Thứ 2',
        tuesday: 'Thứ 3',
        wednesday: 'Thứ 4',
        thursday: 'Thứ 5',
        friday: 'Thứ 6',
        saturday: 'Thứ 7',
        sunday: 'CN',
        month1: 'Tháng 1',
        month2: 'Tháng 2',
        month3: 'Tháng 3',
        month4: 'Tháng 4',
        month5: 'Tháng 5',
        month6: 'Tháng 6',
        month7: 'Tháng 7',
        month8: 'Tháng 8',
        month9: 'Tháng 9',
        month10: 'Tháng 10',
        month11: 'Tháng 11',
        month12: 'Tháng 12',
    },
    en: {
        // Navbar
        searchPlaceholder: 'Search for courses, tutors...',
        
        // Menu
        home: 'Home',
        courses: 'Courses',
        schedule: 'Schedule',
        reviews: 'Reviews',
        settings: 'Settings',
        
        // Settings Page
        settingsTitle: 'Settings',
        settingsSubtitle: 'Manage your personal information and preferences',
        editButton: '✏️ Edit',
        personalInfo: 'Personal Information',
        notifications: 'Notifications',
        language: 'Language',
        
        // Profile Form
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        studentId: 'Student ID',
        
        // Notifications
        emailNotif: 'Email Notifications',
        emailNotifDesc: 'Receive notifications via email',
        pushNotif: 'Push Notifications',
        pushNotifDesc: 'Receive notifications in browser',
        smsNotif: 'SMS Notifications',
        smsNotifDesc: 'Receive notifications via SMS',
        
        // Language
        chooseLanguage: 'Choose Language',
        vietnamese: 'Tiếng Việt',
        english: 'English',
        
        // Buttons
        save: '💾 Save Changes',
        cancel: 'Cancel',
        
        // Course Detail
        overview: 'Overview',
        curriculum: 'Curriculum',
        reviewsTab: 'Reviews',
        instructor: 'Instructor',
        aboutCourse: 'About This Course',
        whyChoose: 'Why Choose This Course?',
        whatYouLearn: "What You'll Learn",
        requirements: 'Requirements',
        courseDetails: 'Course Details',
        enrollNow: 'Enroll Now',
        
        // Course Info
        lessons: 'lessons',
        detailedContent: 'Detailed content',
        onDemandVideo: 'On-demand video',
        lifetimeAccess: 'Lifetime access',
        learnAnywhere: 'Learn anytime, anywhere',
        
        // Course Details
        languageLabel: 'Language:',
        levelLabel: 'Level:',
        durationLabel: 'Duration:',
        lessonsLabel: 'Lessons:',
        lessonsCount: 'lessons',
        
        // Courses Page
        exploreCourses: 'Explore Courses',
        discoverCourses: 'Discover {count} courses to expand your knowledge',
        showingCourses: 'Showing {count} courses',
        
        // Dashboard
        welcome: 'Welcome Back!',
        upcomingSessions: 'Upcoming Sessions',
        viewUpcoming: 'View your next 3 upcoming sessions',
        totalCourses: 'Total Courses',
        enrolledCourses: 'Enrolled Courses',
        completedCourses: 'Completed Courses',
        inProgressCourses: 'In Progress',
        upcomingClasses: 'Upcoming Classes',
        confirm: 'Confirm',
        waitingConfirm: 'Waiting Confirmation',
        confirmed: 'Confirmed',
        notificationBtn: 'Notifications',
        messageBtn: 'Messages',
        
        // Dashboard Stats
        sessionsThisWeek: 'Sessions This Week',
        scheduledSessions: 'Scheduled sessions',
        connectedTutors: 'Connected Tutors',
        differentTutors: 'Different tutors',
        completedSessions: 'Completed Sessions',
        sessionsCompleted: 'Sessions completed',
        studyHours: 'Study Hours',
        totalTime: 'Total time',
        
        // University
        vnuHcm: 'VIETNAM NATIONAL UNIVERSITY HO CHI MINH CITY',
        hcmut: 'HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY',
        
        // Schedule/Calendar
        monday: 'Mon',
        tuesday: 'Tue',
        wednesday: 'Wed',
        thursday: 'Thu',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun',
        month1: 'January',
        month2: 'February',
        month3: 'March',
        month4: 'April',
        month5: 'May',
        month6: 'June',
        month7: 'July',
        month8: 'August',
        month9: 'September',
        month10: 'October',
        month11: 'November',
        month12: 'December',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => languageAPI.load());

    useEffect(() => {
        languageAPI.save(language);
    }, [language]);

    const t = (key, params = {}) => {
        let text = translations[language][key] || key;
        
        // Replace parameters like {count}
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        
        return text;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
