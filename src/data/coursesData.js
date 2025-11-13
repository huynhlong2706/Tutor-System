// Dữ liệu khóa học - API giả
const coursesData = [
    {
        id: 1,
        title: 'Phát triển Web toàn diện 2025',
        title_en: 'Full-Stack Web Development 2025',
        shortName: 'Web',
        instructor: {
            name: 'TS. Nguyễn Văn Minh',
            name_en: 'Dr. Nguyen Van Minh',
            title: 'Giảng viên chuyên gia',
            title_en: 'Expert Instructor',
            description: 'Chuyên gia trong ngành với nhiều năm kinh nghiệm giảng dạy sinh viên trên toàn thế giới.',
            description_en: 'Industry expert with many years of experience teaching students worldwide.',
            avatar: 'https://via.placeholder.com/80/1976D2/FFFFFF?text=M'
        },
        description: 'Học phát triển web từ đầu với HTML, CSS, JavaScript, React, Node.js và nhiều hơn nữa. Xây dựng các dự án thực tế và trở thành lập trình viên full-stack.',
        description_en: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js and more. Build real projects and become a full-stack developer.',
        shortDescription: 'Học phát triển web từ đầu với HTML, CSS, JavaScript, React, Node.js và nhiều hơn nữa.',
        shortDescription_en: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js and more.',
        level: 'BEGINNER',
        rating: 4.8,
        reviewCount: 2543,
        studentCount: 15678,
        duration: '52 giờ',
        lessonCount: 245,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
        tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React'],
        
        // Thông tin buổi học
        schedule: {
            startDate: new Date(2025, 10, 15), // 15/11/2025
            endDate: new Date(2026, 1, 28),     // 28/02/2026
            daysOfWeek: [1, 3, 5], // Thứ 2, 4, 6
            timeSlot: '14:00 - 16:00'
        },

        // Yêu cầu
        requirements: [
            'Kỹ năng máy tính cơ bản',
            'Không cần kinh nghiệm lập trình',
            'Máy tính có kết nối internet'
        ],
        requirements_en: [
            'Basic computer skills',
            'No programming experience required',
            'Computer with internet connection'
        ],

        // Tại sao chọn khóa học này
        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        // Nội dung học
        whatYouLearn: [
            'Xây dựng website responsive với HTML5 và CSS3',
            'Thành thạo JavaScript và ES6+',
            'Tạo ứng dụng web động với React',
            'Xây dựng API backend với Node.js và Express',
            'Làm việc với cơ sở dữ liệu (MongoDB, PostgreSQL)',
            'Triển khai ứng dụng lên cloud'
        ],
        whatYouLearn_en: [
            'Build responsive websites with HTML5 and CSS3',
            'Master JavaScript and ES6+',
            'Create dynamic web applications with React',
            'Build backend APIs with Node.js and Express',
            'Work with databases (MongoDB, PostgreSQL)',
            'Deploy applications to the cloud'
        ],

        // Curriculum
        curriculum: [
            {
                section: 'Giới thiệu về phát triển Web',
                lessons: [
                    { title: 'Chào mừng đến với khóa học', duration: '10 phút', type: 'video' },
                    { title: 'Thiết lập môi trường phát triển', duration: '20 phút', type: 'video' }
                ]
            },
            {
                section: 'Cơ bản HTML',
                lessons: [
                    { title: 'HTML căn bản', duration: '15 phút', type: 'video' },
                    { title: 'Form và Input HTML', duration: '25 phút', type: 'video' },
                    { title: 'Dự án thực hành', duration: '30 phút', type: 'assignment' }
                ]
            }
        ],

        // Featured reviews
        reviews: [
            {
                id: 1,
                studentName: 'Nguyễn Văn A',
                rating: 5,
                date: '15/10/2025',
                comment: 'Khóa học rất chi tiết và dễ hiểu. Giảng viên nhiệt tình!'
            }
        ]
    },
    {
        id: 2,
        title: 'Lập trình Python toàn diện',
        title_en: 'Complete Python Programming',
        shortName: 'Python',
        instructor: {
            name: 'PGS.TS. Trần Hồng Sơn',
            name_en: 'Assoc. Prof. Dr. Tran Hong Son',
            title: 'Lập trình viên cao cấp',
            title_en: 'Senior Programmer',
            description: 'Chuyên gia Python với 15 năm kinh nghiệm phát triển phần mềm.',
            description_en: 'Python expert with 15 years of software development experience.',
            avatar: 'https://via.placeholder.com/80/388E3C/FFFFFF?text=S'
        },
        description: 'Thành thạo Python từ cơ bản đến nâng cao. Học cấu trúc dữ liệu, OOP, web scraping, tự động hóa và nhiều hơn nữa.',
        description_en: 'Master Python from basic to advanced. Learn data structures, OOP, web scraping, automation and more.',
        shortDescription: 'Thành thạo Python từ cơ bản đến nâng cao. Học cấu trúc dữ liệu, OOP và tự động hóa.',
        shortDescription_en: 'Master Python from basic to advanced. Learn data structures, OOP and automation.',
        level: 'BEGINNER',
        rating: 4.7,
        reviewCount: 1876,
        studentCount: 12456,
        duration: '35 giờ',
        lessonCount: 180,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
        tags: ['Python', 'Programming', 'Data Science', 'Automation'],
        
        schedule: {
            startDate: new Date(2025, 10, 18), // 18/11/2025
            endDate: new Date(2026, 2, 15),     // 15/03/2026
            daysOfWeek: [2, 4], // Thứ 3, 5
            timeSlot: '09:00 - 11:00'
        },

        requirements: [
            'Kiến thức máy tính cơ bản',
            'Không cần kinh nghiệm lập trình',
            'Sẵn sàng học hỏi'
        ],
        requirements_en: [
            'Basic computer knowledge',
            'No programming experience required',
            'Willingness to learn'
        ],

        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        whatYouLearn: [
            'Cú pháp và nền tảng Python',
            'Lập trình hướng đối tượng',
            'Cấu trúc dữ liệu và giải thuật',
            'Xử lý file và cơ sở dữ liệu',
            'Web scraping và tự động hóa',
            'Xây dựng dự án thực tế'
        ],
        whatYouLearn_en: [
            'Python syntax and fundamentals',
            'Object-oriented programming',
            'Data structures and algorithms',
            'File handling and databases',
            'Web scraping and automation',
            'Build real-world projects'
        ],

        curriculum: [
            {
                section: 'Python cơ bản',
                lessons: [
                    { title: 'Giới thiệu Python', duration: '12 phút', type: 'video' },
                    { title: 'Biến và kiểu dữ liệu', duration: '18 phút', type: 'video' }
                ]
            }
        ],

        reviews: []
    },
    {
        id: 3,
        title: 'Thiết kế UI/UX toàn diện',
        title_en: 'Complete UI/UX Design',
        shortName: 'UI/UX',
        instructor: {
            name: 'ThS. Lê Thu Hằng',
            name_en: 'MSc. Le Thu Hang',
            title: 'Trưởng nhóm thiết kế',
            title_en: 'Design Team Lead',
            description: 'Học thiết kế giao diện và trải nghiệm người dùng từ chuyên gia trong ngành.',
            description_en: 'Learn UI/UX design from industry experts.',
            avatar: 'https://via.placeholder.com/80/D32F2F/FFFFFF?text=H'
        },
        description: 'Học thiết kế giao diện và trải nghiệm người dùng từ chuyên gia trong ngành. Thành thạo Figma, design thinking và nhiều hơn nữa.',
        description_en: 'Learn UI/UX design from industry experts. Master Figma, design thinking and more.',
        shortDescription: 'Học thiết kế UI/UX từ chuyên gia trong ngành. Thành thạo Figma và design thinking.',
        shortDescription_en: 'Learn UI/UX design from industry experts. Master Figma and design thinking.',
        level: 'BEGINNER',
        rating: 4.9,
        reviewCount: 3421,
        studentCount: 18234,
        duration: '28 giờ',
        lessonCount: 156,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
        tags: ['UI/UX', 'Design', 'Figma', 'User Experience'],
        
        schedule: {
            startDate: new Date(2025, 10, 20), // 20/11/2025
            endDate: new Date(2026, 1, 28),     // 28/02/2026
            daysOfWeek: [1, 3], // Thứ 2, 4
            timeSlot: '15:30 - 17:30'
        },

        requirements: [
            'Kỹ năng máy tính cơ bản',
            'Đam mê thiết kế',
            'Không cần kinh nghiệm thiết kế'
        ],
        requirements_en: [
            'Basic computer skills',
            'Passion for design',
            'No design experience required'
        ],

        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        whatYouLearn: [
            'Nền tảng thiết kế UI/UX',
            'Thành thạo Figma',
            'Quy trình design thinking',
            'Phương pháp nghiên cứu người dùng',
            'Prototyping và wireframing',
            'Phát triển portfolio'
        ],
        whatYouLearn_en: [
            'UI/UX design fundamentals',
            'Master Figma',
            'Design thinking process',
            'User research methods',
            'Prototyping and wireframing',
            'Build your portfolio'
        ],

        curriculum: [
            {
                section: 'Giới thiệu UI/UX',
                lessons: [
                    { title: 'UI/UX Design là gì?', duration: '15 phút', type: 'video' },
                    { title: 'Nguyên tắc thiết kế', duration: '22 phút', type: 'video' }
                ]
            }
        ],

        reviews: []
    },
    {
        id: 4,
        title: 'Cấu trúc dữ liệu và giải thuật',
        title_en: 'Data Structures and Algorithms',
        shortName: 'DSA',
        instructor: {
            name: 'TS. Phạm Minh Tuấn',
            name_en: 'Dr. Pham Minh Tuan',
            title: 'Chuyên gia thuật toán',
            title_en: 'Algorithm Expert',
            description: 'Chuyên gia về cấu trúc dữ liệu và giải thuật với hơn 10 năm kinh nghiệm.',
            description_en: 'Expert in data structures and algorithms with over 10 years of experience.',
            avatar: 'https://via.placeholder.com/80/7B1FA2/FFFFFF?text=T'
        },
        description: 'Thành thạo cấu trúc dữ liệu và giải thuật, nền tảng quan trọng cho lập trình viên.',
        description_en: 'Master data structures and algorithms, essential foundation for programmers.',
        shortDescription: 'Thành thạo cấu trúc dữ liệu và giải thuật, nền tảng quan trọng cho lập trình viên.',
        shortDescription_en: 'Master data structures and algorithms, essential foundation for programmers.',
        level: 'INTERMEDIATE',
        rating: 4.6,
        reviewCount: 892,
        studentCount: 8456,
        duration: '40 giờ',
        lessonCount: 120,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        tags: ['DSA', 'Algorithms', 'Data Structures', 'Programming'],
        
        schedule: {
            startDate: new Date(2025, 10, 22), // 22/11/2025
            endDate: new Date(2026, 1, 20),     // 20/02/2026
            daysOfWeek: [2, 5], // Thứ 3, 6
            timeSlot: '09:00 - 11:00'
        },

        requirements: [
            'Biết lập trình cơ bản',
            'Hiểu biết về logic',
            'Sẵn sàng thử thách'
        ],
        requirements_en: [
            'Basic programming knowledge',
            'Understanding of logic',
            'Ready for challenges'
        ],

        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        whatYouLearn: [
            'Mảng, danh sách liên kết, stack, queue',
            'Cây, đồ thị, heap',
            'Các thuật toán sắp xếp và tìm kiếm',
            'Quy hoạch động',
            'Thuật toán tham lam',
            'Phân tích độ phức tạp'
        ],
        whatYouLearn_en: [
            'Arrays, linked lists, stacks, queues',
            'Trees, graphs, heaps',
            'Sorting and searching algorithms',
            'Dynamic programming',
            'Greedy algorithms',
            'Complexity analysis'
        ],

        curriculum: [],
        reviews: []
    },
    {
        id: 5,
        title: 'Học máy với Python',
        title_en: 'Machine Learning with Python',
        shortName: 'ML',
        instructor: {
            name: 'PGS.TS. Võ Thị Mai',
            name_en: 'Assoc. Prof. Dr. Vo Thi Mai',
            title: 'Nhà nghiên cứu AI',
            title_en: 'AI Researcher',
            description: 'Tiến sĩ về Machine Learning với 10 năm kinh nghiệm nghiên cứu.',
            description_en: 'PhD in Machine Learning with 10 years of research experience.',
            avatar: 'https://via.placeholder.com/80/0288D1/FFFFFF?text=M'
        },
        description: 'Học các thuật toán machine learning, mạng neural và ứng dụng AI với Python.',
        description_en: 'Learn machine learning algorithms, neural networks and AI applications with Python.',
        shortDescription: 'Học các thuật toán machine learning và ứng dụng AI với Python.',
        shortDescription_en: 'Learn machine learning algorithms and AI applications with Python.',
        level: 'INTERMEDIATE',
        rating: 4.8,
        reviewCount: 1654,
        studentCount: 9876,
        duration: '45 giờ',
        lessonCount: 200,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
        tags: ['Machine Learning', 'AI', 'Python', 'Data Science'],
        
        schedule: {
            startDate: new Date(2025, 11, 1), // 01/12/2025
            endDate: new Date(2026, 3, 15),    // 15/04/2026
            daysOfWeek: [3, 5], // Thứ 4, 6
            timeSlot: '19:00 - 21:00'
        },

        requirements: [
            'Kiến thức lập trình Python',
            'Toán học và thống kê cơ bản',
            'Hiểu biết về thuật toán'
        ],
        requirements_en: [
            'Python programming knowledge',
            'Basic mathematics and statistics',
            'Understanding of algorithms'
        ],

        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        whatYouLearn: [
            'Nền tảng Machine learning',
            'Học có giám sát và không giám sát',
            'Mạng neural',
            'Deep learning với TensorFlow',
            'Xử lý ngôn ngữ tự nhiên',
            'Computer vision'
        ],
        whatYouLearn_en: [
            'Machine learning fundamentals',
            'Supervised and unsupervised learning',
            'Neural networks',
            'Deep learning with TensorFlow',
            'Natural language processing',
            'Computer vision'
        ],

        curriculum: [],
        reviews: []
    },
    {
        id: 6,
        title: 'Phát triển ứng dụng Mobile với React Native',
        title_en: 'Mobile App Development with React Native',
        shortName: 'App',
        instructor: {
            name: 'ThS. Đặng Quốc Huy',
            name_en: 'MSc. Dang Quoc Huy',
            title: 'Lập trình viên Mobile',
            title_en: 'Mobile Developer',
            description: 'Chuyên gia phát triển ứng dụng đa nền tảng.',
            description_en: 'Expert in cross-platform app development.',
            avatar: 'https://via.placeholder.com/80/F57C00/FFFFFF?text=H'
        },
        description: 'Xây dựng ứng dụng iOS và Android với React Native. Học UI mobile, điều hướng và triển khai.',
        description_en: 'Build iOS and Android apps with React Native. Learn mobile UI, navigation and deployment.',
        shortDescription: 'Xây dựng ứng dụng iOS và Android với React Native.',
        shortDescription_en: 'Build iOS and Android apps with React Native.',
        level: 'BEGINNER',
        rating: 4.7,
        reviewCount: 1234,
        studentCount: 7654,
        duration: '38 giờ',
        lessonCount: 175,
        language: 'Tiếng Việt',
        thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
        tags: ['React Native', 'Mobile', 'iOS', 'Android'],
        
        schedule: {
            startDate: new Date(2025, 11, 5), // 05/12/2025
            endDate: new Date(2026, 3, 10),    // 10/04/2026
            daysOfWeek: [1, 4], // Thứ 2, 5
            timeSlot: '17:00 - 19:00'
        },

        requirements: [
            'Kiến thức JavaScript',
            'Hiểu biết cơ bản về React',
            'Mac hoặc PC có công cụ phát triển'
        ],
        requirements_en: [
            'JavaScript knowledge',
            'Basic understanding of React',
            'Mac or PC with development tools'
        ],

        whyChoose: 'Khóa học toàn diện này bao gồm mọi thứ bạn cần để trở thành một chuyên gia. Với các dự án thực hành và hướng dẫn từ chuyên gia, bạn sẽ có được kỹ năng thực tế mà nhà tuyển dụng tìm kiếm.',
        whyChoose_en: 'This comprehensive course covers everything you need to become an expert. With hands-on projects and expert guidance, you will gain practical skills that employers are looking for.',

        whatYouLearn: [
            'Nền tảng React Native',
            'Các component UI mobile',
            'Mẫu điều hướng',
            'Tích hợp API',
            'Thông báo đẩy',
            'Triển khai lên App Store'
        ],
        whatYouLearn_en: [
            'React Native fundamentals',
            'Mobile UI components',
            'Navigation patterns',
            'API integration',
            'Push notifications',
            'Deploy to App Store'
        ],

        curriculum: [],
        reviews: []
    }
];

// Helper functions
export const getAllCourses = () => {
    return coursesData;
};

export const getCourseById = (id) => {
    return coursesData.find(course => course.id === parseInt(id));
};

export const getUpcomingCourses = (limit = 3) => {
    const now = new Date();
    
    // Lọc các khóa học sắp diễn ra và sắp xếp theo ngày bắt đầu
    return coursesData
        .filter(course => course.schedule.startDate >= now)
        .sort((a, b) => a.schedule.startDate - b.schedule.startDate)
        .slice(0, limit)
        .map(course => ({
            id: course.id,
            title: course.title,
            title_en: course.title_en,
            instructor: course.instructor.name,
            instructor_en: course.instructor.name_en,
            startDate: course.schedule.startDate,
            timeSlot: course.schedule.timeSlot,
            thumbnail: course.thumbnail
        }));
};

export const searchCourses = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    return coursesData.filter(course => 
        course.title.toLowerCase().includes(term) ||
        course.instructor.name.toLowerCase().includes(term) ||
        course.tags.some(tag => tag.toLowerCase().includes(term))
    );
};

export const getCoursesForCalendar = () => {
    return coursesData.map(course => {
        const sessions = [];
        const { startDate, endDate, daysOfWeek, timeSlot } = course.schedule;
        
        // Tạo các buổi học dựa trên lịch
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            if (daysOfWeek.includes(currentDate.getDay())) {
                sessions.push({
                    id: `${course.id}-${currentDate.getTime()}`,
                    courseId: course.id,
                    title: course.title,
                    shortName: course.shortName,
                    instructor: course.instructor.name,
                    date: new Date(currentDate),
                    time: timeSlot,
                    color: getColorByCourseId(course.id)
                });
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return sessions;
    }).flat();
};

// Helper để lấy màu theo courseId
const getColorByCourseId = (courseId) => {
    const colors = {
        1: '#1565C0',  // Web - Xanh dương
        2: '#2E7D32',  // Python - Xanh lá
        3: '#D32F2F',  // UI/UX - Đỏ
        4: '#7B1FA2',  // DSA - Tím
        5: '#0288D1',  // ML - Xanh da trời
        6: '#F57C00'   // App - Cam
    };
    return colors[courseId] || '#1565C0';
};

export const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

export default coursesData;
