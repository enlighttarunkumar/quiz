import React, { useState } from "react";

function parseMarkdown(text) {
  return text
    .replace(/\*(.*?)\*/g, "<b>$1</b>") // Bold (*bold*)
    .replace(/_(.*?)_/g, "<i>$1</i>") // Italic (_italic_)
    .replace(/~(.*?)~/g, "<s>$1</s>"); // Strikethrough (~cut~)
}

function QuestionCard({ question, onAnswer }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    //background: "radial-gradient(circle, #0f0f0f, #1a1a1a)", // Dark mode background
    padding: "20px",
  };

  const cardStyle = {
    maxWidth: "460px",
    width: "100%",
    padding: "24px",
    background: "rgba(20, 20, 20, 0.85)", // Glassmorphic effect
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#e0e0e0",
    marginBottom: "18px",
    textAlign: "center",
    letterSpacing: "0.8px",
    lineHeight: "1.4",
  };

  const buttonStyle = (isHovered) => ({
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    background: isHovered
      ? "linear-gradient(135deg, #444, #222)"
      : "linear-gradient(135deg, #2a2a2a, #111)", // Gradient shift
    color: "#f5f5f5",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background 0.2s ease-in-out",
    marginBottom: "12px",
    letterSpacing: "0.5px",
    textTransform: "capitalize",
    transform: isHovered ? "scale(1.07)" : "scale(1)",
    boxShadow: isHovered ? "0 5px 20px rgba(255, 255, 255, 0.15)" : "none",
  });

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.5)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.4)")}
      >
        <h2 style={titleStyle} dangerouslySetInnerHTML={{ __html: parseMarkdown(question.description) }} />
        <div>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.is_correct)}
              style={buttonStyle(hoverIndex === index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {option.description}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
