const quizData = {
  questions: [
    {
      question: "When faced with a complex, unsolved problem, what is your first instinct?",
      options: [
        {
          text: "Look for patterns in past data to find a trend.",
          scores: { "Data Analyst": 3, "Data Scientist": 2, "AI Product Manager": 1 }
        },
        {
          text: "Break the problem into logical components and build a scalable system to solve it.",
          scores: { "Machine Learning Engineer": 3, "Data Engineer": 3, "MLOps Engineer": 2 }
        },
        {
          text: "Read research papers and try to invent a completely new, theoretical approach.",
          scores: { "AI Researcher": 4, "NLP Specialist": 1, "Computer Vision Engineer": 1 }
        },
        {
          text: "Figure out how solving it will impact the business and talk to users to gather requirements.",
          scores: { "AI Product Manager": 4, "Data Analyst": 1 }
        }
      ]
    },
    {
      question: "Which type of puzzle do you find most satisfying to solve?",
      options: [
        {
          text: "Connecting scattered pieces to reveal a clear, big picture that tells a story.",
          scores: { "Data Analyst": 3, "Data Scientist": 2, "AI Product Manager": 1 }
        },
        {
          text: "Optimizing a complex machine so it runs faster, handles massive loads, and never breaks.",
          scores: { "MLOps Engineer": 3, "Data Engineer": 3 }
        },
        {
          text: "Teaching a system to understand human conversations or spot objects in photos.",
          scores: { "NLP Specialist": 3, "Computer Vision Engineer": 3, "Machine Learning Engineer": 2 }
        },
        {
          text: "Designing the blueprint for the puzzle and leading a team to build it.",
          scores: { "AI Product Manager": 4 }
        }
      ]
    },
    {
      question: "How do you feel about mathematics and statistics?",
      options: [
        {
          text: "I love diving deep into advanced math, calculus, linear algebra, and probability.",
          scores: { "AI Researcher": 4, "Machine Learning Engineer": 2, "Computer Vision Engineer": 1 }
        },
        {
          text: "I enjoy using statistics practically to prove a point, test a hypothesis, or uncover trends.",
          scores: { "Data Scientist": 4, "Data Analyst": 2 }
        },
        {
          text: "I understand the concepts, but prefer applying ready-made libraries to build software.",
          scores: { "Data Engineer": 3, "MLOps Engineer": 3, "Machine Learning Engineer": 1, "NLP Specialist": 1 }
        },
        {
          text: "I prefer to focus on strategy, user experience, and the business value of the math.",
          scores: { "AI Product Manager": 4, "Data Analyst": 1 }
        }
      ]
    },
    {
      question: "What sounds like the most fun weekend project?",
      options: [
        {
          text: "Creating a beautiful, interactive dashboard that tracks personal data over time.",
          scores: { "Data Analyst": 4, "Data Scientist": 1 }
        },
        {
          text: "Building an automated pipeline that downloads, cleans, and stores data from the web.",
          scores: { "Data Engineer": 4, "MLOps Engineer": 2 }
        },
        {
          text: "Training a small AI model to generate text or recognize my dog's face.",
          scores: { "NLP Specialist": 3, "Computer Vision Engineer": 3, "Machine Learning Engineer": 3 }
        },
        {
          text: "Writing a technical blog post comparing the architecture of cutting-edge algorithms.",
          scores: { "AI Researcher": 3, "Data Scientist": 2 }
        }
      ]
    },
    {
      question: "When a software system fails, what is your immediate reaction?",
      options: [
        {
          text: "I want to build automated tests, alerts, and monitoring so it never happens again.",
          scores: { "MLOps Engineer": 4, "Data Engineer": 2 }
        },
        {
          text: "I want to dig into the database to trace exactly where the bad data came from.",
          scores: { "Data Engineer": 3, "Data Analyst": 2 }
        },
        {
          text: "I want to debug the core logic of the AI model to see why its predictions were wrong.",
          scores: { "Machine Learning Engineer": 3, "Data Scientist": 2, "Computer Vision Engineer": 1, "NLP Specialist": 1 }
        },
        {
          text: "I want to understand how the failure affected our users and prioritize a fix with the team.",
          scores: { "AI Product Manager": 4 }
        }
      ]
    },
    {
      question: "If you could choose an AI superpower, what would it be?",
      options: [
        {
          text: "The ability to instantly speak, understand, and generate every language perfectly.",
          scores: { "NLP Specialist": 4 }
        },
        {
          text: "The ability to visually identify, track, and analyze any object from miles away.",
          scores: { "Computer Vision Engineer": 4 }
        },
        {
          text: "The ability to accurately predict future events based on historical facts.",
          scores: { "Data Scientist": 3, "Data Analyst": 2, "Machine Learning Engineer": 1 }
        },
        {
          text: "The ability to seamlessly organize infinite chaos into perfectly running factories.",
          scores: { "Data Engineer": 3, "MLOps Engineer": 3 }
        }
      ]
    },
    {
      question: "You are given a massive dataset of a million customer reviews. What do you do first?",
      options: [
        {
          text: "Process them using language models to extract sentiment and intent.",
          scores: { "NLP Specialist": 4, "Machine Learning Engineer": 1 }
        },
        {
          text: "Design a distributed database architecture that can query these reviews in milliseconds.",
          scores: { "Data Engineer": 4, "MLOps Engineer": 1 }
        },
        {
          text: "Visualize the key themes to help the marketing team launch a new campaign.",
          scores: { "Data Analyst": 4, "AI Product Manager": 2 }
        },
        {
          text: "Search for subtle statistical correlations between word usage and user demographics.",
          scores: { "Data Scientist": 4, "AI Researcher": 1 }
        }
      ]
    },
    {
      question: "How do you prefer to communicate your work?",
      options: [
        {
          text: "Through interactive, colorful charts and clear business presentations.",
          scores: { "Data Analyst": 4, "AI Product Manager": 3 }
        },
        {
          text: "By publishing a detailed paper with mathematical proofs and rigorous methodology.",
          scores: { "AI Researcher": 4 }
        },
        {
          text: "By deploying a working API, app, or model that others can interact with immediately.",
          scores: { "Machine Learning Engineer": 3, "Computer Vision Engineer": 2, "NLP Specialist": 2 }
        },
        {
          text: "By showing a complex backend system running seamlessly and reliably in the background.",
          scores: { "Data Engineer": 3, "MLOps Engineer": 3 }
        }
      ]
    },
    {
      question: "What kind of work environment do you thrive in?",
      options: [
        {
          text: "A fast-paced business where my insights directly drive executive decisions.",
          scores: { "Data Analyst": 2, "AI Product Manager": 4 }
        },
        {
          text: "An academic or lab setting where I have months to focus on solving one very hard problem.",
          scores: { "AI Researcher": 4 }
        },
        {
          text: "A highly technical engineering team focused on scale, speed, architecture, and reliability.",
          scores: { "Data Engineer": 3, "MLOps Engineer": 4, "Machine Learning Engineer": 1 }
        },
        {
          text: "A balanced environment where I mix coding, advanced math, and exploring data.",
          scores: { "Data Scientist": 4, "Machine Learning Engineer": 2 }
        }
      ]
    },
    {
      question: "Which phrase best describes your ultimate career goal?",
      options: [
        {
          text: "\"I want to discover and invent AI algorithms that no one else has thought of.\"",
          scores: { "AI Researcher": 4 }
        },
        {
          text: "\"I want to build intelligent, scalable AI systems that millions of people use every day.\"",
          scores: { "Machine Learning Engineer": 4, "NLP Specialist": 1, "Computer Vision Engineer": 1 }
        },
        {
          text: "\"I want to design bulletproof data infrastructure that powers an entire company.\"",
          scores: { "MLOps Engineer": 2, "Data Engineer": 4 }
        },
        {
          text: "\"I want to translate human needs into the perfect AI product and lead its success.\"",
          scores: { "AI Product Manager": 4, "Data Analyst": 1 }
        }
      ]
    }
  ],
  roles: {
    "Data Scientist": {
      title: "Data Scientist",
      description: "You have a strong analytical mind and love uncovering hidden patterns. Data Scientists bridge the gap between business and complex data, using statistics and machine learning to predict the future and drive strategy.",
      keyStrengths: ["Analytical Thinking", "Statistics", "Problem Solving", "Curiosity"],
      skillsToLearn: ["Python", "SQL", "Pandas", "Scikit-Learn", "Hypothesis Testing"],
      roadmap: [
        "Master Python & SQL fundamentals",
        "Learn Data Wrangling & EDA (Exploratory Data Analysis)",
        "Understand Statistics & Probability",
        "Build foundational Machine Learning models"
      ],
      beginnerProjects: [
        "Predict housing prices using a Kaggle dataset.",
        "Analyze a dataset of your favorite Spotify songs.",
        "Build a customer churn prediction model."
      ],
      tools: ["Jupyter", "Python", "Tableau", "Scikit-Learn"],
      futureOpportunities: "Senior Data Scientist, Lead Decision Scientist, Chief Data Officer."
    },
    "Machine Learning Engineer": {
      title: "Machine Learning Engineer",
      description: "You are a builder at heart. Machine Learning Engineers take theoretical data models and turn them into scalable, production-ready software systems that power real-world applications.",
      keyStrengths: ["Software Engineering", "System Design", "Algorithms", "Optimization"],
      skillsToLearn: ["Python/C++", "PyTorch/TensorFlow", "Docker", "REST APIs", "Cloud Computing"],
      roadmap: [
        "Solidify Software Engineering practices (Git, CI/CD, OOP)",
        "Master Deep Learning frameworks",
        "Learn API development (FastAPI/Flask)",
        "Understand Model Deployment & Serving"
      ],
      beginnerProjects: [
        "Deploy a pre-trained image classifier as a REST API.",
        "Build a movie recommendation system web app.",
        "Containerize an ML model using Docker."
      ],
      tools: ["PyTorch", "Docker", "FastAPI", "AWS/GCP"],
      futureOpportunities: "Lead ML Engineer, Head of AI Engineering, AI Architect."
    },
    "Data Analyst": {
      title: "Data Analyst",
      description: "You are a storyteller and a detective. You excel at taking raw numbers and transforming them into beautiful, understandable insights that help businesses make smart decisions.",
      keyStrengths: ["Storytelling", "Business Acumen", "Visualization", "Detail-Oriented"],
      skillsToLearn: ["SQL", "Excel", "Tableau/PowerBI", "Python (basic)"],
      roadmap: [
        "Master Advanced Excel and Spreadsheets",
        "Learn SQL for querying databases",
        "Master a BI Visualization Tool (Tableau or PowerBI)",
        "Learn basic Python for data cleaning"
      ],
      beginnerProjects: [
        "Create an interactive dashboard of global COVID-19 data.",
        "Analyze and visualize your personal Amazon purchase history.",
        "Write SQL queries to find top-selling products in a dummy database."
      ],
      tools: ["SQL", "Tableau", "Excel", "PowerBI"],
      futureOpportunities: "Senior Data Analyst, Analytics Manager, BI Developer."
    },
    "AI Researcher": {
      title: "AI Researcher",
      description: "You are an innovator and a deep thinker. You are driven by curiosity to push the boundaries of what AI can do, diving deep into mathematics to invent new architectures and algorithms.",
      keyStrengths: ["Mathematics", "Abstract Thinking", "Academic Rigor", "Patience"],
      skillsToLearn: ["Linear Algebra", "Calculus", "Advanced Deep Learning", "Reading Papers"],
      roadmap: [
        "Build a very strong Math foundation",
        "Implement classic ML papers from scratch",
        "Master a research framework (PyTorch/JAX)",
        "Publish findings and contribute to open-source"
      ],
      beginnerProjects: [
        "Implement a neural network from scratch using only NumPy.",
        "Replicate the results of a famous NLP paper.",
        "Write a literature review on the state of Reinforcement Learning."
      ],
      tools: ["PyTorch", "JAX", "LaTeX", "ArXiv"],
      futureOpportunities: "Research Scientist (Google DeepMind/OpenAI), Professor, R&D Lead."
    },
    "NLP Specialist": {
      title: "NLP Specialist",
      description: "You are fascinated by language and human communication. NLP Specialists build systems that can read, understand, translate, and generate human text—powering everything from chatbots to massive LLMs.",
      keyStrengths: ["Linguistics", "Deep Learning", "Pattern Recognition", "Creativity"],
      skillsToLearn: ["Transformers", "Hugging Face", "LLM Prompting", "Text Preprocessing"],
      roadmap: [
        "Learn classic text processing (Regex, NLTK, spaCy)",
        "Understand Word Embeddings (Word2Vec, GloVe)",
        "Master Transformer Architectures",
        "Learn Fine-tuning and RAG (Retrieval-Augmented Generation)"
      ],
      beginnerProjects: [
        "Build a sentiment analysis tool for movie reviews.",
        "Create a simple chatbot using the OpenAI API.",
        "Fine-tune a Hugging Face model on a specific text style."
      ],
      tools: ["Hugging Face", "PyTorch", "spaCy", "LangChain"],
      futureOpportunities: "Lead NLP Engineer, LLM Architect, Conversational AI Lead."
    },
    "MLOps Engineer": {
      title: "MLOps Engineer",
      description: "You are the guardian of scale and reliability. You blend machine learning with DevOps to ensure that AI systems run smoothly, retraining pipelines are automated, and infrastructure is rock solid.",
      keyStrengths: ["Automation", "Infrastructure", "Reliability", "Troubleshooting"],
      skillsToLearn: ["Kubernetes", "CI/CD", "MLflow", "Cloud Architecture", "Terraform"],
      roadmap: [
        "Master Linux, Bash, and Scripting",
        "Learn Containerization (Docker, Kubernetes)",
        "Understand CI/CD for Machine Learning",
        "Master Model Monitoring and Registry tools"
      ],
      beginnerProjects: [
        "Set up an automated training pipeline using GitHub Actions.",
        "Deploy a model on Kubernetes with auto-scaling.",
        "Track model experiments using MLflow."
      ],
      tools: ["Kubernetes", "Docker", "MLflow", "GitHub Actions"],
      futureOpportunities: "Head of MLOps, Platform Engineering Lead, Cloud Architect."
    },
    "Data Engineer": {
      title: "Data Engineer",
      description: "You are the architect of the data world. You design and build the massive plumbing systems (pipelines and warehouses) that allow data to flow reliably from source to analysts and AI models.",
      keyStrengths: ["System Architecture", "Database Design", "Performance Tuning", "Logical Thinking"],
      skillsToLearn: ["Advanced SQL", "Apache Spark", "Airflow", "Data Warehousing", "Python"],
      roadmap: [
        "Master SQL and Relational Database Design",
        "Learn ETL/ELT concepts",
        "Master Big Data processing (Spark/Hadoop)",
        "Learn Pipeline Orchestration (Airflow)"
      ],
      beginnerProjects: [
        "Write a Python script to scrape a website and load data into Postgres.",
        "Build a daily ETL pipeline using Apache Airflow.",
        "Process a large 10GB dataset using Apache Spark."
      ],
      tools: ["Spark", "Airflow", "Snowflake", "AWS/GCP"],
      futureOpportunities: "Lead Data Engineer, Data Architect, VP of Engineering."
    },
    "Computer Vision Engineer": {
      title: "Computer Vision Engineer",
      description: "You want to teach machines how to see. You specialize in image and video processing, working on cutting-edge applications like self-driving cars, medical imaging, and facial recognition.",
      keyStrengths: ["Visual Spatial Reasoning", "Deep Learning", "Mathematics", "C++"],
      skillsToLearn: ["OpenCV", "CNNs", "Image Processing", "PyTorch"],
      roadmap: [
        "Learn foundational Image Processing (OpenCV)",
        "Master Convolutional Neural Networks (CNNs)",
        "Learn Object Detection & Segmentation architectures",
        "Optimize models for edge devices"
      ],
      beginnerProjects: [
        "Build a real-time face detection script using your webcam.",
        "Train a model to classify different types of dog breeds.",
        "Implement a barcode or license plate reader."
      ],
      tools: ["OpenCV", "PyTorch", "TensorFlow", "CUDA"],
      futureOpportunities: "Lead CV Engineer, Robotics Perception Engineer, AR/VR Specialist."
    },
    "AI Product Manager": {
      title: "AI Product Manager",
      description: "You sit at the intersection of business, technology, and user experience. You don't just want to build AI; you want to figure out WHAT to build, WHY it matters, and HOW it solves real human problems.",
      keyStrengths: ["Communication", "Empathy", "Strategic Thinking", "Leadership"],
      skillsToLearn: ["Product Strategy", "AI Ethics", "User Research", "Agile Methodologies"],
      roadmap: [
        "Understand the AI/ML lifecycle from a high level",
        "Learn User Research and wireframing",
        "Study AI Ethics and Data Privacy",
        "Master Agile project management"
      ],
      beginnerProjects: [
        "Write a Product Requirements Document (PRD) for a new AI app.",
        "Conduct a user interview to find pain points AI could solve.",
        "Create a wireframe prototype for an AI-powered feature."
      ],
      tools: ["Figma", "Jira", "Miro", "Amplitude"],
      futureOpportunities: "VP of Product, Chief Product Officer, Tech Founder."
    }
  }
};
