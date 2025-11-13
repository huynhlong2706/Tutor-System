import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchCourses } from '../data/coursesData';
import './../styles/SearchBar.css';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const searchRef = useRef(null);

    // Đóng dropdown khi click bên ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Tìm kiếm khi người dùng gõ
    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            const results = searchCourses(searchTerm);
            setSearchResults(results);
            setShowDropdown(true);
        } else {
            setSearchResults([]);
            setShowDropdown(false);
        }
    }, [searchTerm]);

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
        setSearchTerm('');
        setShowDropdown(false);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === query.toLowerCase() ? 
                <mark key={index}>{part}</mark> : part
        );
    };

    return (
        <div className="search-bar-container" ref={searchRef}>
            <input 
                type="text" 
                placeholder="Tìm kiếm môn học, tutor..." 
                className="search-box"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
            />
            
            {showDropdown && searchResults.length > 0 && (
                <div className="search-dropdown">
                    <div className="dropdown-header">
                        Tìm thấy {searchResults.length} kết quả
                    </div>
                    {searchResults.map(course => (
                        <div 
                            key={course.id} 
                            className="search-result-item"
                            onClick={() => handleCourseClick(course.id)}
                        >
                            <div className="result-thumbnail">
                                <img src={course.thumbnail} alt={course.title} />
                            </div>
                            <div className="result-info">
                                <h4 className="result-title">
                                    {highlightText(course.title, searchTerm)}
                                </h4>
                                <p className="result-instructor">
                                    {highlightText(course.instructor.name, searchTerm)}
                                </p>
                                <p className="result-time">
                                    {course.schedule.timeSlot} • {course.schedule.daysOfWeek.length} buổi/tuần
                                </p>
                            </div>
                            <div className="result-arrow">→</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
