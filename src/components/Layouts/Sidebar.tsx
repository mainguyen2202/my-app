import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="sidebar">
            <div className="sidebar__hamburger" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={`sidebar__container ${isOpen ? 'sidebar__container--active' : ''}`}>
                <button className="sidebar__close-btn" onClick={closeSidebar}>
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="sidebar__title">Management</h2>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-users"></i>
                        <a href="/">People Management</a>
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-cogs"></i>
                        System
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-sliders-h"></i>
                        Configuration
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-folder-open"></i>
                        Commands
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-chart-bar"></i>
                        Analysis
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-cogs"></i>
                        Settings
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-folder-open"></i>
                        Commands
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-sliders-h"></i>
                        Configuration
                    </li>
                    <li className="sidebar__list-item">
                        <i className="sidebar__icon fas fa-cogs"></i>
                        System
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;