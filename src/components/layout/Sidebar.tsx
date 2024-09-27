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
        <div>
            <div className="hamburger" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>
                    <i className="fas fa-times"></i>
                </button>
                <h2>Management</h2>
                <ul>
                    <li><i className="fas fa-users"></i> <a href="/">   People Management</a></li>
                    <li><i className="fas fa-cogs"></i> System</li>
                    <li><i className="fas fa-sliders-h"></i> Configuration</li>
                    <li><i className="fas fa-folder-open"></i> Commands</li>
                    <li><i className="fas fa-chart-bar"></i> Analysis</li>
                    <li><i className="fas fa-cogs"></i> Settings</li>
                    <li>
                        <i className="fas fa-folder-open">
                        </i>
                        Commands
                    </li>
                    <li>
                        <i className="fas fa-sliders-h">
                        </i>
                        Configuration
                    </li>
                    <li>
                        <i className="fas fa-cogs">
                        </i>
                        System
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;