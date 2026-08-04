# 🧭 AI Career Navigator

**Discover the tech career path that's right for you.**

AI Career Navigator is a fully responsive web app that helps students and early-career learners explore tech careers in AI & Data Science. Through an interactive quiz, personalized role recommendations, skill roadmaps, and curated learning resources, it guides users from "I don't know what I want to do" to "here's my next step."

🔗 **Live Demo:** [Add your deployed link here]

---

## ✨ Features

- **🎯 Career Quiz** — A 10-question interactive quiz that scores user responses across 9 tech roles and recommends the best-fit career with a personalized match percentage.
- **💼 Career Explorer** — Detailed profile cards for each role covering key strengths, skills to learn, tools used, and future opportunities.
- **🗺️ Skill Roadmaps** — Tabbed, step-by-step learning roadmaps for each career path (Data Science, ML Engineering, NLP, Computer Vision, MLOps, Data Engineering, AI Product Management, and more).
- **📚 Curated Resources** — Hand-picked learning resources (courses, communities, documentation) to help users get started immediately.
- **📱 Fully Responsive** — Smooth experience across desktop, tablet, and mobile with a collapsible mobile nav.
- **🎬 Scroll Animations** — Fade-in-on-scroll effects and active-section nav highlighting for a polished feel.
- **✉️ Contact Form** — Opens the user's device mail app pre-filled with their inquiry (no backend required).

### Career Paths Covered
Data Scientist · Machine Learning Engineer · Data Analyst · AI Researcher · NLP Specialist · MLOps Engineer · Data Engineer · Computer Vision Engineer · AI Product Manager

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Logic | Vanilla JavaScript (ES6+) |
| Data | Static JS data module (`quiz-data.js`) |

No build tools, no frameworks, no dependencies — pure HTML/CSS/JS.

---

## 📁 Project Structure

```
ai-career-navigator/
├── index.html          # Main page — all sections (home, quiz, careers, roadmaps, resources, contact)
├── style.css            # All styling, animations, and responsive layout
├── script.js             # Navbar behavior, scroll effects, roadmap tabs, quiz engine, contact form
├── quiz-data.js       # Quiz questions, scoring logic, and role recommendation data
└── favicon.svg         # Site favicon
```

---

## 🚀 Getting Started

No installation or build step required — it's a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/ai-career-navigator.git
   cd ai-career-navigator
   ```

2. **Open it locally**
   - Simply open `index.html` in your browser, **or**
   - Serve it with a local dev server for the best experience (recommended, avoids any file:// quirks):
     ```bash
     # Using Python
     python -m http.server 5500

     # Using VS Code
     Right-click index.html → "Open with Live Server"
     ```

3. **View in browser**
   Navigate to `http://localhost:5500`

---

## 🧠 How the Quiz Works

Each quiz option is tagged with weighted scores across all 9 career roles (defined in `quiz-data.js`). As the user answers, `script.js` tallies scores per role. At the end, the role with the highest score is presented as the recommended career path, along with a generated match percentage and that role's full profile (strengths, skills, tools, roadmap, project ideas, and future outlook).

---

## 📌 Roadmap / Future Improvements

- [ ] Backend integration to store quiz results and contact submissions
- [ ] Deploy live demo and add link above
- [ ] Add more career roles (e.g., Data Engineer specializations, AI Ethics)
- [ ] Dark/light theme toggle
- [ ] Save quiz progress with localStorage

---

## 👤 Author

**Kamesh S**
B.Tech AI & Data Science student

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
