import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Sidebar.css';
import { FaLock  } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

const Sidebar = () => {
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState(0);

  const lockedDays = [2, 3, 4, 5, 6, 7, 8];
  const days = Array.from({ length: 9 }, (_, i) => i);
  const isCompleted = selectedDay === 0;

  return (
    <aside 
      className="sidebar"
    //   style={{
    //     backgroundColor: theme.colors.card,
    //     borderRightColor: theme.colors.border,
    //     color: theme.colors.text,
    //   }}
    >
      <div className="sidebar-content">
       
        <div className="days-list">
          {days.map((day) => {
            const dayNumber = day + 1;
            const isLocked = lockedDays.includes(dayNumber);
            const isActive = selectedDay === day;
            
            return (
              <button
                key={day}
                className={`day-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                onClick={() => !isLocked && setSelectedDay(day)}
                disabled={isLocked}
                style={{
                  backgroundColor: isActive ? theme.colors.accent : 'transparent',
                  color: isActive ? '#211F26' : theme.colors.text,
                  borderColor: theme.colors.border,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  opacity: isLocked ? 0.5 : 1,
                  fontWeight: isActive ? 'bold' : 'normal',
                }}
                title={isLocked ? `Day ${dayNumber} locked` : `Day ${dayNumber}`}
              >
                <span className="day-label">Day - {dayNumber}</span>
                {isLocked && <span className="lock-icon"><FaLock /></span>}
                {isCompleted && day === 0 && <span className="check-icon" style={{color:'#30A46C'}}>
                  <GoCheckCircleFill /></span>}
              </button>
            );
          })}
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;