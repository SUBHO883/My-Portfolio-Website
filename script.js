const background = document.getElementById('background');
const colors = [
  { color1: '#667eea'},
  { color1: '#34eadb'},
  { color1: '#ff6b6b' },
  { color1: '#4facfe' },
  { color1: '#a8edea'}
];
let currentIndex = 0;

background.style.background = `linear-gradient(135deg, ${colors[currentIndex].color1}, ${colors[currentIndex].color2})`;


function updateGradient() {
  if (!document.body.classList.contains("dark-mode")) {
    currentIndex = (currentIndex + 1) % colors.length;
    background.style.background = `linear-gradient(135deg, ${colors[currentIndex].color1}, ${colors[currentIndex].color2})`;
  }
}


setInterval(updateGradient, 8000);


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "javascript", level: 100 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 100},
  { name: "Java", level:60},
  { name: "Cybersecurity", level: 100},
  { name: "React", level: 50 }
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
    link.href = "file/my_resume.pdf";
    link.download = "Subho_Resume.pdf";
    link.click();
  });




const projects = [
  
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
  },
  {
    title: "Solo Leveling Fitnest",
    description: "Fitnest help and track body health",
    tech: ["HTML5, CSS3, JavaSrcript"],
    img: "image/solo leveling.jpg",
    url: "https://subho883.github.io/solo-leveling-system/"
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







const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-right');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('#nav-right button').forEach(btn => {
  btn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});



const typedText = document.getElementById("typed-text");

const textArray = [
  "Full-Stack Software Engineer & Problem Solver",
  "Frontend Developer",
  "Backend Developer"
]; 

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; 
let eraseSpeed = 60;   
let delayBetween = 1500; 

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


  if(document.body.classList.contains("dark-mode")){
    themeToggle.className = "fa-solid fa-sun";
    themeToggle.style.color = "white";
    skillslevel.forEach(skills=> {skills.style.stock = "white";});
    skills.name.style.color = "white";
  } else {
    themeToggle.className = "fa-solid fa-moon";
    themeToggle.style.color = "black";
  }
});




const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); 

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


  if (name.length < 2) {
    alert("❌ Please enter your name");
    nameInput.focus();
    return;
  }

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address (example: abc@gmail.com)");
    emailInput.focus();
    return;
  }

  if (message.length < 5) {
    alert("❌ Please enter your message");
    messageInput.focus();
    return;
  }

    const formData = new FormData(form);
    formData.append("access_key", WEB3_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        statusText.innerText = "✅ Message sent successfully!";
        statusText.style.color = "green";

        form.reset(); // 


        document.getElementById("home").scrollIntoView({ behavior: "smooth" });


      } else {
        statusText.innerText = "❌ Something went wrong. Try again!";
        statusText.style.color = "red";
      }

    } catch (error) {
      statusText.innerText = "❌ Network error!";
      statusText.style.color = "red";
    }
  });



  window.addEventListener("load", () => {
  setTimeout(() => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
});


let WEB3_KEY = "";

fetch("config.json")
  .then(res => res.json())
  .then(data => {
    WEB3_KEY = data.WEB3FORMS_KEY;
  });
