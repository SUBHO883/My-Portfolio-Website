// Dynamic Gradient
const background = document.getElementById('background');
const colors = [
  { color1: '#667eea', color2: '#764ba2' },
  { color1: '#11998e', color2: '#38ef7d' },
  { color1: '#ff6b6b', color2: '#ff9a3d' },
  { color1: '#4facfe', color2: '#00f2fe' },
  { color1: '#a8edea', color2: '#fed6e3' }
];
let currentIndex = 0;

background.style.background = `linear-gradient(135deg, ${colors[currentIndex].color1}, ${colors[currentIndex].color2})`;

setInterval(() => {
  currentIndex = (currentIndex + 1) % colors.length;
  background.style.background = `linear-gradient(135deg, ${colors[currentIndex].color1}, ${colors[currentIndex].color2})`;
}, 8000);


// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Skills Data
const skills = [
  { name: "React", level: 35 },
  { name: "TypeScript", level: 85 },
  { name: "javascript", level: 75 },
  { name: "Python", level: 75 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JAVA", level: 50 },
  { name: "SQL", level: 80 }
];
const skillsGrid = document.getElementById('skills-grid');
skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill-circle';
  skillDiv.innerHTML = `
    <svg width="120" height="120">
      <circle cx="60" cy="60" r="54" stroke="#ccc" stroke-width="12" fill="none"/>
      <circle cx="60" cy="60" r="54" stroke="#4f46e5" stroke-width="12" fill="none" stroke-dasharray="339.292" stroke-dashoffset="339.292"/>
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="20">${skill.level}%</text>
    </svg>
    <p>${skill.name}</p>
  `;
  skillsGrid.appendChild(skillDiv);
});


// Animate skill bars on scroll
const circles = document.querySelectorAll('.skill-circle circle:nth-child(2)');
circles.forEach((circle, index) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const level = skills[index].level;
  const offset = circumference - (level / 100) * circumference;
  circle.style.strokeDashoffset = circumference; // start
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1.5s ease-out';
    circle.style.strokeDashoffset = offset;
  }, 500);
});
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    animateSkills();
  }
});


 document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "files/my_resume.pdf";
    link.download = "Subho_CV.pdf";
    link.click();
  });



// Projects Data
const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
  //   tech: ["React", "Node.js", "MongoDB", "Express"],
  //   img: "image/",
  //   url:""  
  // },
  {
    title: "Coffee Order",
    description: "Dynamic web-based coffee ordering app with menu and order tracking",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    img: "image/coffee.png",
    url: "https://subho883.github.io/coffee-order-app/"
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather application with 5-day forecasts",
    tech: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
    img: "image/Weather.png",
    url: "https://subho883.github.io/Weather-Dashboard-with-Modern-UI/"
  }
];
const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <a href="${project.url}" target="_blank" style="text-decoration:none; color:inherit; display:block;">
    <img src="${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  projectsGrid.appendChild(div);
});






// Mobile Nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-right');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close nav when clicking link (mobile UX)
document.querySelectorAll('#nav-right button').forEach(btn => {
  btn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// Typing Effect
const typedText = document.getElementById("typed-text");

const textArray = [
  "Full-Stack Software Engineer & Problem Solver",
  "Frontend Developer",
  "Backend Developer"
]; 

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // typing speed (ms)
let eraseSpeed = 60;   // erase speed (ms)
let delayBetween = 1500; // delay before erasing

function typeEffect() {
  const currentText = textArray[textIndex];
  typedText.style.fontWeight = "bold"; 


  if (!isDeleting && charIndex < currentText.length) {
    typedText.textContent = currentText.substring(0, charIndex + 1);
    typedText.style.color = "#4f46e5"; 
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    typedText.textContent = currentText.substring(0, charIndex - 1);
    typedText.style.color = "#4f46e5"; 
    charIndex--;
    setTimeout(typeEffect, eraseSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetween);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) typeEffect();
});



const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Icon change current mode
  if(document.body.classList.contains("dark-mode")){
    themeToggle.className = "fa-solid fa-sun";
  } else {
    themeToggle.className = "fa-solid fa-moon";
  }
});








