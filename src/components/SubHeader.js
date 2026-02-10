import { useTheme } from "../context/ThemeContext";
import "./Header.css";
import { MdArrowBackIos, MdInfoOutline } from "react-icons/md";

export default function SubHeader() {
  const { theme } = useTheme();

  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border,
        color: theme.colors.text,
        position: 'sticky',
        top: '54px',
      }}
    >
      <div className="header-container sub-header">
        <div className="header-left">
          <div>
            <MdArrowBackIos />
            Back
          </div>
          <div>Day 1 of 9</div>
        </div>

        <div className="header-right">
          <div>9-Day Fitness Challenge</div>
          <div>
            <MdInfoOutline />
          </div>
        </div>
      </div>
    </header>
  );
}
