import { useTheme } from "../context/ThemeContext";
import "./Header.css";
import { IoMdNotifications } from "react-icons/io";
import { BsBroadcast } from "react-icons/bs";

export default function Header() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border,
        color: theme.colors.text,
        position: "sticky",
      }}
    >
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <span style={{ color: "#8D6500", fontSize: "20px", marginTop: "8px" }}>
              <BsBroadcast />
            </span>
            <span>
              Backstage<span style={{ color: "#8D6500" }}>Pass</span>
            </span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-stats">
            <span className="fire-icon">🔥</span>
            <span className="stats-value">30</span>
          </div>

          <button
            className="header-button notification-btn"
            title="Notifications"
            aria-label="Notifications"
            style={{
              color: theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <IoMdNotifications />
          </button>

          <button
            className="header-button theme-toggle"
            onClick={toggleTheme}
            title={isDark ? "Light mode" : "Dark mode"}
            aria-label="Toggle theme"
            style={{ color: theme.colors.text }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <div className="profile-avatar" />
        </div>
      </div>
    </header>
  );
}
