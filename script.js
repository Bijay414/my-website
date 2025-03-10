document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.nav-hamburger');
    const menu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(item.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });

    // Dynamic Content
    const skills = [
        { icon: 'fas fa-code', title: 'C', desc: 'High-performance system coding.' },
        { icon: 'fas fa-file-code', title: 'C++', desc: 'Advanced OOP applications.' },
        { icon: 'fab fa-python', title: 'Python', desc: 'Scalable backend solutions.' },
        { icon: 'fas fa-database', title: 'MySQL', desc: 'Optimized data handling.' },
        { icon: 'fab fa-git-alt', title: 'Git', desc: 'Version control expertise.' },
        { icon: 'fas fa-microchip', title: 'Electronics', desc: 'Circuit design skills.' }
    ];

    const projects = [
        { icon: 'fas fa-book', title: 'Library Management', desc: 'Efficient book tracking system.', link: 'https://github.com/Bijay414/Project-using-basic-C-programming.git' },
        { icon: 'fas fa-question-circle', title: 'Quiz Game', desc: 'Interactive educational platform.', link: 'https://github.com/Bijay414/Project-using-basic-C-programming.git' },
        { icon: 'fas fa-exchange-alt', title: 'Currency Converter', desc: 'Real-time currency exchange.', link: 'https://github.com/Bijay414/Project-using-basic-C-programming.git' },
        { icon: 'fas fa-university', title: 'Bank System', desc: 'Secure banking operations.', link: 'https://github.com/Bijay414/C-program---project.git' },
        { icon: 'fas fa-utensils', title: 'Restaurant System', desc: 'Streamlined order management.', link: 'https://github.com/Bijay414/C-program---project.git' }
    ];

    const contactInfo = [
        { icon: 'fas fa-phone', value: '+977 9802696465' },
        { icon: 'fas fa-envelope', value: 'kurmibijay4484@gmail.com', link: 'mailto:kurmibijay4484@gmail.com' },
        { icon: 'fas fa-map-marker-alt', value: 'Balkumari, Lalitpur, Nepal' }
    ];

    const socials = [
        { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/share/1A3g' },
        { icon: 'fab fa-github', link: 'https://github.com/Bijay414' },
        { icon: 'fab fa-instagram', link: 'https://www.instagram.com/bijaykurmi20/profilecard/?igsh=eDUxaXk1ZmptMHR5' },
        { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/bijay-kurmi' }
    ];

    // Populate Skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.desc}</p>
            </div>
        `;
    });

    // Populate Projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="project-card">
                <div class="project-preview"><i class="${project.icon}"></i></div>
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            </div>
        `;
    });

    // Populate Contact Info
    const contactInfoContainer = document.querySelector('.contact-info');
    contactInfo.forEach(info => {
        contactInfoContainer.innerHTML += `
            <div class="info-entry">
                <i class="${info.icon}"></i>
                ${info.link ? `<a href="${info.link}">${info.value}</a>` : `<p>${info.value}</p>`}
            </div>
        `;
    });

    // Populate Footer Links
    const footerLinks = document.querySelector('.footer-links');
    socials.forEach(social => {
        footerLinks.innerHTML += `
            <a href="${social.link}" target="_blank"><i class="${social.icon}"></i></a>
        `;
    });

    // Dynamic Touch and Particle Effects
    const body = document.body;

    // Touch Effect
    body.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        createRipple(touch.clientX, touch.clientY);
    });

    body.addEventListener('click', (e) => {
        createRipple(e.clientX, e.clientY);
    });

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('background-ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1400); // Match animation duration
    }

    // Particle Animation
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animation = `floatParticle ${Math.random() * 8 + 4}s infinite ease-in-out`;
        body.appendChild(particle);
        setTimeout(() => {
            particle.remove();
            createParticle(); // Respawn particle
        }, (Math.random() * 8 + 4) * 1000);
    }

    // Define Particle Animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0.6; }
            50% { transform: translateY(${Math.random() * -20 - 10}vh) translateX(${Math.random() * 20 - 10}vw); opacity: 0.3; }
            100% { transform: translateY(${Math.random() * -40 - 20}vh) translateX(${Math.random() * 20 - 10}vw); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
});