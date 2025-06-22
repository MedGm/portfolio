import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, projects, achievements } from '../data/portfolioData';

const BOT_AVATAR = "/me.png";

const SECTION_SHORTCUTS = [
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Skills", section: "skills" },
  { label: "Achievements", section: "achievements" },
  { label: "Contact", section: "contact" },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function getProjectCard(project) {
  return (
    <div className="bg-gradient-to-br from-blue-900/80 to-slate-900/80 rounded-xl p-3 my-2 flex gap-3 items-center shadow-lg border border-blue-500/20 max-w-xs">
      <img src={project.image} alt={project.title} className="w-14 h-14 rounded-lg object-cover border border-blue-500/20" />
      <div>
        <div className="font-semibold text-blue-200">{project.title}</div>
        <div className="text-xs text-gray-400 mb-1">{project.description.slice(0, 60)}...</div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline font-medium">View on GitHub</a>
      </div>
    </div>
  );
}

function getAchievementCard(achievement) {
  return (
    <div className="bg-gradient-to-br from-purple-900/80 to-slate-900/80 rounded-xl p-3 my-2 flex gap-3 items-center shadow-lg border border-purple-500/20 max-w-xs">
      <img src={achievement.image} alt={achievement.title} className="w-14 h-14 rounded-lg object-cover border border-purple-500/20" />
      <div>
        <div className="font-semibold text-purple-200">{achievement.title}</div>
        <div className="text-xs text-gray-400 mb-1">{achievement.description.slice(0, 60)}...</div>
        <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline font-medium">View on LinkedIn</a>
      </div>
    </div>
  );
}

const SUGGESTIONS = [
  "Show me your top skills",
  "Show me your projects",
  "Show me your achievements",
  "How can I contact you?",
  "View CV"
];

function getBotReply(userMsg, setBotRich, setSuggestions, projectIndex, setProjectIndex) {
  const msg = userMsg.toLowerCase();
  if (msg.includes("skill")) {
    setSuggestions(["What technologies do you use?", "Show me your projects", "Skills"]);
    setBotRich(null);
    return "Here are some of my top skills: React, Python, JavaScript, AI/ML, Embedded Systems, and more! Check the Skills section for a full list.";
  }
  if (msg.includes("project")) {
    const nextIndex = (projectIndex + 1) % projects.length;
    setBotRich(getProjectCard(projects[nextIndex]));
    setProjectIndex(nextIndex);
    setSuggestions([
      "Show me your achievements",
      "Projects",
      "Show me your top skills"
    ]);
    return `Here's one of my projects:`;
  }
  if (msg.includes("achiev")) {
    setBotRich(getAchievementCard(achievements[0]));
    setSuggestions(["Show me your top skills", "Achievements", "Show me your projects"]);
    return "Here's one of my recent achievements!";
  }
  if (msg.includes("contact") || msg.includes("email") || msg.includes("linkedin")) {
    setSuggestions(["Contact", "Show me your GitHub", "View CV"]);
    setBotRich(null);
    return (
      <>
        You can contact me via email <a href={`mailto:${personalInfo.email}`} className="text-blue-400 underline">{personalInfo.email}</a> or on <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LinkedIn</a>.
      </>
    );
  }
  if (msg.includes("cv") || msg.includes("resume")) {
    setBotRich(
      <div className="flex flex-col items-center my-2">
        <img src="/cv-preview.png" alt="CV Preview" className="w-32 h-40 object-cover rounded shadow mb-2 border border-blue-500/20" />
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-transform">View CV</a>
      </div>
    );
    setSuggestions(["Show me your top skills", "About", "Show me your projects"]);
    return "You can view or download my CV here:";
  }
  if (msg.includes("technolog") || msg.includes("stack")) {
    setSuggestions(["Show me your top skills", "Show me your projects", "Skills"]);
    setBotRich(null);
    return "I use React, Node.js, Python, Unity, and more. See the Skills section for details.";
  }
  if (msg.includes("github")) {
    setSuggestions(["Show me your projects", "Projects", "Show me your achievements"]);
    setBotRich(null);
    return (
      <>
        You can visit my GitHub at <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{personalInfo.github}</a> or use the GitHub button on the Home section.
      </>
    );
  }
  if (msg.includes("about")) {
    setSuggestions(["Show me your top skills", "Show me your projects", "How can I contact you?"]);
    setBotRich(null);
    return "I'm Mohamed El Gorrim, a Software & Intelligent Systems Engineering student passionate about building smart solutions.";
  }
  if (msg.includes("skills")) {
    setSuggestions(["Show me your projects", "Show me your achievements", "How can I contact you?"]);
    setBotRich(null);
    return "Explore my skills in the Skills section, including full-stack development, embedded systems, and AI/ML.";
  }
  if (msg.includes("projects")) {
    setSuggestions(["Show me your top skills", "Show me your achievements", "How can I contact you?"]);
    setBotRich(null);
    return "Check out my projects section for more details on my work!";
  }
  if (msg.includes("achievements")) {
    setSuggestions(["Show me your top skills", "Show me your projects", "How can I contact you?"]);
    setBotRich(null);
    return "See my Achievements section for awards, certifications, and more.";
  }
  if (msg.includes("contact")) {
    setSuggestions(["Show me your top skills", "Show me your projects", "View CV"]);
    setBotRich(null);
    return "You can contact me via the Contact section or the email provided.";
  }
  if (msg.includes("go to")) {
    setSuggestions(["Show me your top skills", "Show me your projects", "Show me your achievements"]);
    setBotRich(null);
    return "Navigating to the section...";
  }
  setSuggestions(["Show me your top skills", "Show me your projects", "How can I contact you?"]);
  setBotRich(null);
  return "I'm here to help! Use the suggestions below to explore my portfolio.";
}

function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 I'm your portfolio assistant. Use the suggestions below to explore my skills, projects, achievements, or contact info." }
  ]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(SUGGESTIONS);
  const [botRich, setBotRich] = useState(null);
  const [projectIndex, setProjectIndex] = useState(-1);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, botRich]);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setBotRich(null);
    setTimeout(() => {
      const reply = getBotReply(msg, setBotRich, setSuggestions, projectIndex, setProjectIndex);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: reply }
      ]);
    }, 500);
    setInput("");
  };

  const handleSectionShortcut = (section) => {
    scrollToSection(section);
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: `Navigated to ${section.charAt(0).toUpperCase() + section.slice(1)} section.` }
    ]);
    setBotRich(null);
    setSuggestions(SUGGESTIONS);
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-xl focus:outline-none border-2 border-blue-500/30"
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08, filter: "brightness(1.1)" }}
        aria-label="Open portfolio assistant"
        style={{ boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)" }}
      >
        <img src={BOT_AVATAR} alt="Bot" className="w-8 h-8 rounded-full object-cover border-2 border-blue-400 shadow" />
      </motion.button>
      {/* Chatbot Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-28 right-8 w-[350px] max-w-[95vw] bg-gradient-to-br from-slate-900/95 to-blue-950/95 rounded-2xl shadow-2xl border border-blue-700/30 z-50 flex flex-col"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ minHeight: 420, maxHeight: 520 }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-blue-700/20 bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-t-2xl">
              <span className="font-semibold text-blue-200 flex items-center gap-2">
                <img src={BOT_AVATAR} alt="Bot" className="w-8 h-8 rounded-full object-cover border border-blue-400 shadow" />
                Portfolio Assistant
              </span>
              <button
                className="text-blue-300 hover:text-pink-400 transition-colors p-1 rounded"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-br from-slate-900/95 to-blue-950/95 custom-scrollbar" style={{ minHeight: 220 }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow"
                        : "bg-slate-800/90 text-blue-100 shadow"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {typeof msg.text === "string" ? msg.text : msg.text}
                  </motion.div>
                </div>
              ))}
              {botRich && (
                <div className="flex justify-start">{botRich}</div>
              )}
              <div ref={chatEndRef} />
            </div>
            {/* Suggestions and Section Shortcuts */}
            <div className="px-4 pt-2 pb-3 flex flex-wrap gap-2 bg-gradient-to-br from-slate-900/80 to-blue-950/80 rounded-b-2xl border-t border-blue-700/20">
              {suggestions.map((s, i) => (
                <button
                  key={s}
                  className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs hover:bg-blue-500/20 transition-colors font-medium"
                  onClick={() => handleSend(s)}
                >
                  {s}
                </button>
              ))}
              {SECTION_SHORTCUTS.map((shortcut) => (
                <button
                  key={shortcut.section}
                  className="bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-xs hover:bg-green-500/20 transition-colors font-medium"
                  onClick={() => handleSectionShortcut(shortcut.section)}
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #9333ea);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
        }
      `}</style>
    </div>
  );
}

export default PortfolioChatbot;