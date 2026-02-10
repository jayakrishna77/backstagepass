import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";
import FeedPostCard from "./components/FeedPostCard";
import { useTheme } from "./context/ThemeContext";
import './Layout.css';

const mockFeedPosts = [
  {
    id: 1,
    userName: "Ashraf Idrish",
    avatar: "https://ui-avatars.com/api/?name=Ashraf+Idrish&background=random",
    time: "0s ago",
    description: "Today's challenge workout completed - feeling stronger already!",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    likes: 10,
    flames: 0,
    comments: 0,
  },
];

export default function Layout({ children }) {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className="layout"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <Header />
      <SubHeader />
      <div className="layout-main">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((s) => !s)} />
        <main 
          className="layout-content"
          style={{ backgroundColor: theme.colors.bg }}
        >
          <div className="feed-container">
            <FeedPostCard post={mockFeedPosts[0]} />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}