// Load content from JSON
let portfolioData = {};

// Default data structure with Instagram and detailed project info
const defaultData = {
    personal: {
        name: "Dhruvil Chandariya",
        title: "Software Engineer",
        tagline: "Crafting digital solutions that resonate",
        profileImage: "https://via.placeholder.com/300",
        email: "dhruvilchandariya007@gmail.com",
        phone: "+91 9879812656",
        location: "Jamnagar , Gujarat, India",
        github: "https://github.com/dac0820",
        linkedin: "https://www.linkedin.com/in/dhruvil-chandariya-ba5633333/",
        instagram: "https://www.instagram.com/dhruvilchandariya/?igsh=eGQ0bTlycG5lazRx#"
    },
    about: {
        description: " I am a software engineering student and polyglot developer with a strong foundation in programming, problem-solving, and software development. Proficient in C/C++ , Java, Python, MySQL, and web technologies, I have experience working on various projects , app development , web development, and loT applications. Passionate about creating efficient and scalable solutions, I actively participate in hackathons and technical challenges. I am eager to apply my skills and knowledge to real-world problems and trying to become good engineer",
        stats: {
            projects: "50+",
            experience: "5+",
            clients: "10+"
        }
    },
    skills: [
        {
            name: "Frontend Development",
            icon: "fa-code",
            description: "React, Vue, HTML/CSS",
            level: 90
        },
        {
            name: "Backend Development",
            icon: "fa-server",
            description: "Node.js, Python, Java, PHP",
            level: 85
        },
        {
            name: "Mobile Development",
            icon: "fa-mobile-alt",
            description: "Kotlin , Flutter, Android , Java",
            level: 80
        },
        {
            name: "Database",
            icon: "fa-database",
            description: "MongoDB, MySQL, PostgreSQL",
            level: 85
        },
        {
            name: "AI/ML",
            icon: "fa-brain",
            description: "TensorFlow, PyTorch, Scikit-learn , Python",
            level: 75
        },
        {
            name: "Cloud & DevOps",
            icon: "fa-cloud",
            description: "AWS, Azure, Docker, Google Cloud",
            level: 80
        },
        {
            name: "IoT & Embedded Systems",
            icon: "fa-microchip",
            description: "Arduino, Raspberry Pi, ESP32, MQTT , C++ , C",
            level: 85
        },
    ],
    experience: [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Company Inc.",
            date: "2022 - Present",
            description: "Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and architecting scalable solutions."
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Ltd.",
            date: "2020 - 2022",
            description: "Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40%."
        },
        {
            title: "Junior Developer",
            company: "StartUp Ventures",
            date: "2018 - 2020",
            description: "Built responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect interfaces."
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
            detailedDescription: "A comprehensive e-commerce solution built to handle thousands of products and transactions. The platform includes real-time inventory tracking, secure payment processing with multiple gateway integrations, advanced analytics dashboard for business insights, and a responsive design that works seamlessly across all devices.",
            image: "https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce+Platform",
            tags: ["React", "Node.js", "MongoDB"],
            category: "web",
            features: [
                "Multi-vendor marketplace support",
                "Real-time inventory management",
                "Integrated payment gateways (Stripe, PayPal)",
                "Advanced analytics dashboard",
                "Order tracking system",
                "Customer review and rating system",
                "Admin panel with role-based access"
            ],
            technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "AWS S3", "Redis"],
            github: "https://github.com/yourusername/project1",
            demo: "https://demo-link.com"
        },
        {
            title: "AI Chatbot",
            description: "Intelligent chatbot using NLP and machine learning for customer support automation.",
            detailedDescription: "An AI-powered chatbot system that leverages natural language processing and machine learning to provide intelligent customer support. The bot can understand context, maintain conversation history, and escalate complex queries to human agents when necessary.",
            image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=AI+Chatbot",
            tags: ["Python", "TensorFlow", "NLP"],
            category: "ai",
            features: [
                "Natural language understanding with 95% accuracy",
                "Multi-language support (English, Hindi, Spanish)",
                "Context-aware conversations",
                "Sentiment analysis for customer mood detection",
                "Seamless handoff to human agents",
                "Training dashboard for continuous improvement",
                "Integration with popular messaging platforms"
            ],
            technologies: ["Python", "TensorFlow", "NLTK", "Transformers", "Flask", "PostgreSQL", "Docker", "Dialogflow"],
            github: "https://github.com/yourusername/project2",
            demo: "https://demo-link.com"
        },
        {
            title: "Rasoi-setu",
            description: "A digital platform which connect local food stall to raw material vendors",
            detailedDescription: "Rasoi-setu is a comprehensive digital platform designed to bridge the gap between street food vendors and suppliers, creating an efficient supply chain ecosystem for India's vast street food industry. The name 'Rasoi' (meaning kitchen in Hindi) combined with 'Setu' (meaning bridge) perfectly captures the project's mission of connecting food vendors with their supply sources.",
            image: "images\\rasoisetu\\rasoisetu.png",
            tags: ["Typescript", "MongoDb", "Python"],
            category: "mobile",
            features: [
                "Create and manage vendor profiles with business details, location, and requirements",
                "Comprehensive database of suppliers for ingredients, packaging, and equipment",
                 "Direct ordering platform for seamless procurement",
                "AI-powered matching between vendors and suppliers based on location and requirements",
                "Secure payment gateway for vendor-supplier transactions",
                
            ],
            technologies: ["Typescript", "Python", "CSS", "Javacript","API"," MongoDb"],
            github: "https://github.com/dac0820/Rasoi-setu",
            demo: "https://demo-link.com"
        },
        {
            title: "Project Management Tool",
            description: "Collaborative project management platform with real-time updates and team communication features.",
            detailedDescription: "A modern project management solution that brings teams together with real-time collaboration, task management, and communication tools. Built for agile teams to streamline their workflow and boost productivity.",
            image: "https://via.placeholder.com/400x300/667eea/ffffff?text=PM+Tool",
            tags: ["Vue.js", "Express", "Socket.io"],
            category: "web",
            features: [
                "Kanban and Gantt chart views",
                "Real-time updates with WebSocket",
                "Team chat and video calls",
                "Time tracking and reporting",
                "File sharing and document collaboration",
                "Sprint planning and backlog management",
                "Integration with GitHub and Slack"
            ],
            technologies: ["Vue.js", "Vuex", "Node.js", "Express", "Socket.io", "PostgreSQL", "Redis", "WebRTC"],
            github: "https://github.com/yourusername/project4",
            demo: "https://demo-link.com"
        },
        {
            title: "Image Recognition System",
            description: "ML-powered image classification and object detection system for industrial applications.",
            detailedDescription: "An advanced computer vision system designed for industrial quality control and defect detection. Uses state-of-the-art deep learning models to identify and classify objects with high precision.",
            image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Image+Recognition",
            tags: ["Python", "OpenCV", "PyTorch"],
            category: "ai",
            features: [
                "Real-time object detection and classification",
                "Defect detection with 98% accuracy",
                "Custom model training interface",
                "Batch processing for large datasets",
                "Export results in multiple formats",
                "Edge deployment support",
                "API for third-party integrations"
            ],
            technologies: ["Python", "PyTorch", "OpenCV", "YOLO", "FastAPI", "NumPy", "Docker", "CUDA"],
            github: "https://github.com/yourusername/project5",
            demo: "https://demo-link.com"
        },
        {
            title: "Social Media App",
            description: "Social networking mobile application with posts, stories, messaging, and live streaming features.",
            detailedDescription: "A feature-rich social media platform that connects people through posts, stories, real-time messaging, and live video streaming. Built with scalability in mind to handle millions of users.",
            image: "https://via.placeholder.com/400x300/f093fb/ffffff?text=Social+App",
            tags: ["React Native", "GraphQL", "AWS"],
            category: "mobile",
            features: [
                "Photo and video posts with filters",
                "Stories with 24-hour expiration",
                "Real-time messaging and group chats",
                "Live video streaming",
                "Discover feed with AI recommendations",
                "Privacy controls and content moderation",
                "Push notifications"
            ],
            technologies: ["React Native", "GraphQL", "Apollo", "Node.js", "MongoDB", "AWS S3", "WebRTC", "Redis"],
            github: "https://github.com/yourusername/project6",
            demo: "https://demo-link.com"
        }
    ]
};

// Initialize Particles.js
function initParticles() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: isDark ? ['#ff3385', '#00e5ff', '#00ff88'] : ['#ff0066', '#00ddff', '#00ff88']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: isDark ? '#ffffff' : '#000000',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Update icon based on theme
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Reinitialize particles with new theme
    initParticles();
});

// Try to load from data.json, fallback to default data
async function loadData() {
    try {
        const response = await fetch('data.json');
        portfolioData = await response.json();
    } catch (error) {
        console.log('Using default data');
        portfolioData = defaultData;
    }
    initializePortfolio();
}

function initializePortfolio() {
    // Populate Hero Section
    document.getElementById('heroName').textContent = portfolioData.personal.name;
    document.getElementById('heroTagline').textContent = portfolioData.personal.tagline;
    
    // Social Links with Instagram
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = `
        <a href="${portfolioData.personal.github}" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
        <a href="${portfolioData.personal.linkedin}" target="_blank" class="social-link"><i class="fab fa-linkedin"></i></a>
        <a href="${portfolioData.personal.instagram}" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
    `;

    // About Section
    document.getElementById('profileImg').src = portfolioData.personal.profileImage;
    document.getElementById('aboutTitle').textContent = portfolioData.personal.title;
    document.getElementById('aboutDescription').textContent = portfolioData.about.description;
    document.getElementById('statProjects').textContent = portfolioData.about.stats.projects;
    document.getElementById('statExperience').textContent = portfolioData.about.stats.experience;
    document.getElementById('statClients').textContent = portfolioData.about.stats.clients;

    // Skills Section
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="glass-card skill-card animate-on-scroll">
            <div class="skill-icon"><i class="fas ${skill.icon}"></i></div>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <div class="skill-level">
                <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        </div>
    `).join('');

    // Experience Section
    const experienceTimeline = document.getElementById('experienceTimeline');
    experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item animate-on-scroll">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
                <h3>${exp.title}</h3>
                <p class="company">${exp.company}</p>
                <p class="date">${exp.date}</p>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');

    // Projects Section
    renderProjects('all');

    // Contact Section
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <div class="contact-details">
                <h4>Email</h4>
                <p>${portfolioData.personal.email}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-phone"></i></div>
            <div class="contact-details">
                <h4>Phone</h4>
                <p>${portfolioData.personal.phone}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="contact-details">
                <h4>Location</h4>
                <p>${portfolioData.personal.location}</p>
            </div>
        </div>
    `;

    // Footer
    document.getElementById('footerName').textContent = portfolioData.personal.name;

    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize particles
    initParticles();
}

// Render projects with clickable cards
function renderProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    const filteredProjects = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === filter);

    projectsGrid.innerHTML = filteredProjects.map((project, index) => `
        <div class="glass-card project-card animate-on-scroll clickable-card" data-category="${project.category}" onclick="openProjectModal(${index})">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Reinitialize scroll animations for new elements
    initScrollAnimations();
}

// Project Modal Functions
window.openProjectModal = function(projectIndex) {
    const project = portfolioData.projects[projectIndex];
    const modal = document.getElementById('projectModal');
    
    // Populate modal content
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.detailedDescription;
    
    // Tags
    document.getElementById('modalTags').innerHTML = project.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    // Features
    document.getElementById('modalFeatures').innerHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Technologies
    document.getElementById('modalTechnologies').innerHTML = project.technologies.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    // Links
    document.getElementById('modalGithub').href = project.github;
    document.getElementById('modalDemo').href = project.demo;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal close button
document.getElementById('modalClose').addEventListener('click', closeProjectModal);

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Project filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate skill progress bars
                if (entry.target.classList.contains('skill-card')) {
                    const progress = entry.target.querySelector('.skill-progress');
                    if (progress) {
                        setTimeout(() => {
                            progress.style.width = progress.dataset.level + '%';
                        }, 200);
                    }
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize portfolio on load
loadData();
