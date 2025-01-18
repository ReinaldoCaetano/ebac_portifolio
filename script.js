// Projects Data
const projects = [
    {
        id: 1,
        title: 'Plataforma E-commerce',
        description: 'Uma plataforma de e-commerce full-stack construída com React, Node.js e PostgreSQL',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        category: 'fullstack',
        demo: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'App de Gerenciamento de Tarefas',
        description: 'Um aplicativo de gerenciamento de tarefas bonito e intuitivo com atualizações em tempo real',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
        category: 'frontend',
        demo: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Serviço de API Gateway',
        description: 'Um serviço de API gateway escalável construído com Node.js e Express',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
        category: 'backend',
        demo: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Dashboard do Tempo',
        description: 'Um dashboard responsivo com dados meteorológicos em tempo real',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
        category: 'frontend',
        demo: '#',
        github: '#'
    },
    {
        id: 5,
        title: 'Analytics de Redes Sociais',
        description: 'Uma plataforma full-stack de análise de métricas de redes sociais',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        category: 'fullstack',
        demo: '#',
        github: '#'
    },
    {
        id: 6,
        title: 'Serviço de Autenticação',
        description: 'Um serviço de autenticação seguro com JWT e OAuth2',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
        category: 'backend',
        demo: '#',
        github: '#'
    }
];

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Project Filtering
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initial project load
displayProjects('all');

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Display filtered projects
        displayProjects(filter);
    });
});

// Display projects function
function displayProjects(filter) {
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                        Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    contactForm.reset();
    
    // Show success message (you can enhance this)
    alert('Mensagem enviada com sucesso!');
});