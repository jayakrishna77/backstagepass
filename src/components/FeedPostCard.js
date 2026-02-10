import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "./FeedPostCard.css";
import { FaRegComment } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

export default function FeedPostCard({ post }) {
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div
        className="confetti-header"
        style={{ backgroundColor: "rgb(230,246,235)" }}
      >
        <div className="confetti-animation">
          <span className="confetti">🎉</span>
          <span className="confetti">✨</span>
          <span className="confetti">🎊</span>
          <span className="confetti">⭐</span>
          <span className="confetti">🎯</span>
        </div>
        <p style={{ color: "#218358", fontWeight: 600, fontSize: "14px" }}>
          Your Submission
        </p>
      </div>

      <article
        className="feed-post-card"
        style={{
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          color: theme.colors.text,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Post Header */}
        <div className="post-header">
          <div className="post-user">
            <div
              className="user-avatar"
              style={{
                backgroundImage: `url('${post.avatar}')`,
                backgroundSize: "cover",
              }}
            />
            <div className="user-info">
              <h4 className="user-name">{post.userName}</h4>
              <p className="post-time" style={{ color: theme.colors.muted }}>
                {post.time}
              </p>
            </div>
          </div>
          <button
            className="post-menu"
            style={{ color: theme.colors.muted }}
            aria-label="Post options"
          >
            ⋯
          </button>
        </div>

        {/* Post Description */}
        <p className="post-description" style={{ color: theme.colors.muted }}>
          {post.description}
        </p>

        {/* Post Image */}
        <div
          className="post-image"
          style={{
            backgroundImage: `url('${post.image}')`,
            opacity: isHovering ? 0.9 : 1,
          }}
        >
          <div className="image-overlay" />
          <button className="play-button" aria-label="Play media">
            ▶
          </button>
        </div>

        {/* Post Interactions */}
        <div className="post-interactions" style={{ color: theme.colors.text }}>
          <div className="interaction-group">
            <div className="feed-footer-item" style={{ borderRadius: "40px" }}>
              <span>🙏</span>
              <span>😍</span>
              <span>18</span>
            </div>
            <div className="feed-footer-item">
              <FaRegSmile />
            </div>
            <div className="feed-footer-item">
              <FaRegComment />
            </div>
          </div>
          <a
            href="#"
            className="view-comments"
            style={{ color: theme.colors.text }}
            aria-label="View comments"
          >
            {post.comments} Comments
          </a>
        </div>
      </article>
    </div>
  );
}
