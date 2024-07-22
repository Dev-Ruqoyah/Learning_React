import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    <div className="dropdown-item" onClick={() => setIsOpen(false)}>Option 1</div>
                    <div className="dropdown-item" onClick={() => setIsOpen(false)}>Option 2</div>
                    <div className="dropdown-item" onClick={() => setIsOpen(false)}>Option 3</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
