const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // Adjust this value to match your navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function sendMail() {
    let params = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_p3qvzsk", "template_4kgj98c", params).then(alert("Email Sent Successfully!!"))
}

//tab content
function showContent(tabId) {
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    // Set the active class to the clicked tab
    event.currentTarget.classList.add('active');
}

//rgb(74, 241, 241)
function showDetails(card) {
    var img = card.querySelector('img');
    var cardBody = card.querySelector('.image-details');
    img.style.display = "none";
    cardBody.style.display = "block";
}

function hideDetails(card) {
    var img = card.querySelector('img');
    var cardBody = card.querySelector('.image-details');
    img.style.display = "block";
    cardBody.style.display = "none";
}