import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <h2>
          Management
        </h2>


        <ul>
          <li>
            <i className="fas fa-users">
            </i>

            <a href="/">   People Management</a>
          </li>

          <li>
            <i className="fas fa-cogs">
            </i>
            System
          </li>
          <li>
            <i className="fas fa-sliders-h">
            </i>
            Configuration
          </li>
          <li>
            <i className="fas fa-folder-open">
            </i>
            Commands
          </li>
          <li>
            <i className="fas fa-chart-bar">
            </i>
            Analysis
          </li>
          <li>
            <i className="fas fa-cogs">
            </i>
            Configuration
          </li>
          <li>
            <i className="fas fa-cog">
            </i>
            Settings
          </li>
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
  )
}

export default Sidebar;
