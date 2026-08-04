// ===== NAVBAR: SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightActiveSection();
});

// ===== NAVBAR: MOBILE TOGGLE =====
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== NAVBAR: ACTIVE LINK ON SCROLL =====
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  let currentSection = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ===== ROADMAP TABS =====
const tabs = document.querySelectorAll('.roadmap-tab');
const contents = document.querySelectorAll('.roadmap-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    // Update tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update content
    contents.forEach(content => {
      content.classList.remove('active');
    });

    const targetContent = document.getElementById(`roadmap-${target}`);
    if (targetContent) {
      targetContent.classList.add('active');

      // Re-trigger fade-in for newly shown content
      const steps = targetContent.querySelectorAll('.roadmap-step');
      steps.forEach((step, i) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        setTimeout(() => {
          step.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          step.style.opacity = '1';
          step.style.transform = 'translateY(0)';
        }, i * 100);
      });
    }
  });
});

// ===== FADE-IN ON SCROLL =====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for grids of cards
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in'));
      const index = siblings.indexOf(entry.target);
      const delay = index * 80;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// ===== CONTACT FORM (opens device mail app) =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = `CareerAI Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCareer Interest: ${interest || 'Not specified'}\n\nMessage:\n${message}`;

    // Create a real <a> tag and click it — most reliable way to trigger mailto
    const mailLink = document.createElement('a');
    mailLink.href = `mailto:kamesh552024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    mailLink.style.display = 'none';
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);

    // Show success message
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    }, 500);
  });
}

// ===== SMOOTH HOVER ON CARDS =====
const cards = document.querySelectorAll('.career-card, .resource-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease, box-shadow 0.3s ease';
  });
});

// ===== INIT =====
// Trigger active section highlighting on page load
window.dispatchEvent(new Event('scroll'));

// ===== QUIZ ENGINE =====
let currentQuestionIndex = 0;
let roleScores = {};

// Initialize scores based on roles in quizData
if (typeof quizData !== 'undefined') {
  Object.keys(quizData.roles).forEach(role => {
    roleScores[role] = 0;
  });
}

const quizStartEl = document.getElementById('quiz-start');
const quizActiveEl = document.getElementById('quiz-active');
const quizResultEl = document.getElementById('quiz-result');
const startQuizBtn = document.getElementById('start-quiz-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

const questionTextEl = document.getElementById('quiz-question-text');
const optionsContainer = document.getElementById('quiz-options-container');
const progressFill = document.getElementById('quiz-progress-fill');
const progressText = document.getElementById('quiz-progress-text');

function showQuizStep(stepId) {
  [quizStartEl, quizActiveEl, quizResultEl].forEach(el => {
    if(el) {
      el.classList.remove('active');
      el.style.display = 'none';
    }
  });
  const activeEl = document.getElementById(stepId);
  if (activeEl) {
    activeEl.style.display = 'block';
    setTimeout(() => activeEl.classList.add('active'), 50);
  }
}

if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    Object.keys(roleScores).forEach(role => roleScores[role] = 0);
    renderQuestion();
    showQuizStep('quiz-active');
  });
}

if (restartQuizBtn) {
  restartQuizBtn.addEventListener('click', () => {
    showQuizStep('quiz-start');
  });
}

function renderQuestion() {
  const qData = quizData.questions[currentQuestionIndex];
  questionTextEl.textContent = qData.question;
  
  // Progress
  const progressPercent = ((currentQuestionIndex) / quizData.questions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.questions.length}`;

  // Render options
  optionsContainer.innerHTML = '';
  qData.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = option.text;
    btn.addEventListener('click', () => handleOptionClick(option.scores));
    optionsContainer.appendChild(btn);
  });
}

function handleOptionClick(scores) {
  // Add scores
  for (const [role, points] of Object.entries(scores)) {
    if (roleScores[role] !== undefined) {
      roleScores[role] += points;
    }
  }

  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizData.questions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  // Find highest score
  let bestRole = '';
  let maxScore = -1;
  
  for (const [role, score] of Object.entries(roleScores)) {
    if (score > maxScore) {
      maxScore = score;
      bestRole = role;
    }
  }

  // Calculate a generic match percentage (just for UI flair)
  const matchPercentage = Math.floor(Math.random() * 12) + 85;

  renderResult(bestRole, matchPercentage);
  showQuizStep('quiz-result');
  progressFill.style.width = '100%';
}

function renderResult(roleKey, matchPercentage) {
  const roleInfo = quizData.roles[roleKey];
  if (!roleInfo) return;

  document.getElementById('result-role-title').textContent = roleInfo.title;
  document.getElementById('result-match-score').textContent = matchPercentage;
  document.getElementById('result-description').textContent = roleInfo.description;
  
  const populateList = (id, items) => {
    const ul = document.getElementById(id);
    if(ul) {
      ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }
  };

  populateList('result-strengths', roleInfo.keyStrengths);
  populateList('result-skills', roleInfo.skillsToLearn);
  populateList('result-tools', roleInfo.tools);
  populateList('result-roadmap', roleInfo.roadmap);
  populateList('result-projects', roleInfo.beginnerProjects);
  
  const futureEl = document.getElementById('result-future');
  if(futureEl) futureEl.textContent = roleInfo.futureOpportunities;
}
