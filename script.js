document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your Public Key
    // Replace 'YOUR_PUBLIC_KEY' with the actual Public Key from your EmailJS dashboard
    emailjs.init('YOUR_PUBLIC_KEY');

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
        { icon: 'fas fa-code', title: 'C', desc: 'High-performance system coding.', level: 90 },
        { icon: 'fas fa-file-code', title: 'C++', desc: 'Advanced OOP applications.', level: 85 },
        { icon: 'fab fa-python', title: 'Python', desc: 'Scalable backend solutions.', level: 80 },
        { icon: 'fas fa-database', title: 'MySQL', desc: 'Optimized data handling.', level: 75 },
        { icon: 'fab fa-git-alt', title: 'Git', desc: 'Version control expertise.', level: 70 },
        { icon: 'fas fa-microchip', title: 'Electronics', desc: 'Circuit design skills.', level: 65 }
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
        { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit' }
    ];

    // Populate Skills with Progress Bars
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.desc}</p>
                <div class="progress"><div class="progress-bar" style="width: ${skill.level}%"></div></div>
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

    // Contact Form Submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form fields
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const subject = contactForm.querySelector('[name="subject"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const formData = { name, email, subject, message };

        // Log form data for debugging
        console.log('Sending form data:', formData);

        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset();
            }, (error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send message. Check the console for details or try again later.');
            });
    });

    // Dynamic Background Particles
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.body.appendChild(particle);
        setTimeout(() => {
            particle.remove();
            createParticle(); // Respawn particle
        }, (Math.random() * 5 + 5) * 1000);
    }

    // Glow Trail Effect
    document.addEventListener('mousemove', (e) => {
        createGlowTrail(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        createGlowTrail(touch.clientX, touch.clientY);
    });

    function createGlowTrail(x, y) {
        const glow = document.createElement('div');
        glow.classList.add('glow-trail');
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        document.body.appendChild(glow);
        setTimeout(() => glow.remove(), 800); // Match fadeOut animation duration
    }
});