// Project data
const projects = [
	{
		name: "password-manager",
		description: "Password manager web application",
		url: "https://github.com/barto14753/password-manager",
		tags: ["Java", "React"],
	},
	{
		name: "jwt-decoder",
		description: "JWT token decoder/encoder UI",
		url: "https://github.com/barto14753/jwt-decoder",
		tags: ["JavaScript", "React"],
	},
	{
		name: "blockchain-demo",
		description: "Demo app presenting simplified blockchain flow",
		url: "https://github.com/barto14753/blockchain-demo",
		tags: ["JavaScript", "React"],
	},
	{
		name: "flashcards",
		description: "Learning web app",
		url: "https://github.com/barto14753/flashcards",
		tags: ["JavaScript", "React"],
	},
	{
		name: "go-short",
		description: "Go URL shortener",
		url: "https://github.com/barto14753/go-short",
		tags: ["Go", "Javascript"],
	},
	{
		name: "mnist",
		description: "Small app recognizing digit you wrote",
		url: "https://github.com/barto14753/mnist",
		tags: ["Python", "Pytorch"],
	},
	{
		name: "rusty-cache",
		description: "Simple in-memory key-value database",
		url: "https://github.com/barto14753/rusty-cache",
		tags: ["Rust", "Newman"],
	},
	{
		name: "Social Network",
		description: "Social network web application written in Django",
		url: "https://github.com/barto14753/SocialNetwork",
		tags: ["Python", "Django"],
	},
	{
		name: "Chess",
		description: "Chess online web application",
		url: "https://github.com/barto14753/Chess-js",
		tags: ["Node.js", "Express"],
	},
	{
		name: "PathFinder",
		description: "Visualization of pathfinding algorithm",
		url: "https://github.com/barto14753/PathFinder",
		tags: ["Python"],
	},
	{
		name: "AlgoVis",
		description: "Visualisation of sorting algorithms",
		url: "https://github.com/barto14753/AlgoVis",
		tags: ["JavaScript", "React"],
	},
	{
		name: "Scalogic",
		description: "Logical expression evaluator",
		url: "https://github.com/barto14753/Scalogic",
		tags: ["Scala"],
	},
	{
		name: "Simulation",
		description: "The game of life",
		url: "https://github.com/barto14753/Simulation",
		tags: ["Java", "Swing"],
	},
	{
		name: "FuzzySimulation",
		description: "Fuzzy logic simulation",
		url: "https://github.com/barto14753/FuzzySimulation",
		tags: ["Java", "Swing"],
	},
];

// Generate project cards
function generateProjectCards() {
	const projectsContainer = document.querySelector(".projects-grid");

	projects.forEach((project, index) => {
		const projectCard = document.createElement("div");
		projectCard.className = "col-12";
		projectCard.style.animationDelay = `${index * 0.1}s`;

		const tagsHtml = project.tags
			.map(
				(tag) =>
					`<span class="tag tag-${tag
						.toLowerCase()
						.replace(".", "")
						.replace(" ", "-")}">${tag}</span>`
			)
			.join("");

		projectCard.innerHTML = `
            <a href="${project.url}" class="card" target="_blank" rel="noopener">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer">
                    ${tagsHtml}
                </div>
            </a>
        `;

		projectsContainer.appendChild(projectCard);
	});

	// Add entrance animation
	setTimeout(() => {
		const cards = document.querySelectorAll(".card");
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.style.opacity = "1";
				card.style.transform = "translateY(0)";
			}, index * 100);
		});
	}, 100);
}

// Add scroll to top button
function createScrollToTopButton() {
	const scrollBtn = document.createElement("button");
	scrollBtn.className = "scroll-to-top";
	scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
	scrollBtn.setAttribute("aria-label", "Scroll to top");
	document.body.appendChild(scrollBtn);

	// Show/hide button based on scroll position
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 300) {
			scrollBtn.classList.add("visible");
		} else {
			scrollBtn.classList.remove("visible");
		}
	});

	// Smooth scroll to top
	scrollBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}

// Add subtle parallax effect to animated background
function initParallax() {
	const animatedBg = document.querySelector(".animated-bg");
	if (animatedBg) {
		window.addEventListener("scroll", () => {
			const scrolled = window.pageYOffset;
			const rate = scrolled * -0.5;
			animatedBg.style.transform = `translate3d(0, ${rate}px, 0)`;
		});
	}
}

// Initialize all enhancements
document.addEventListener("DOMContentLoaded", () => {
	// Set initial styles for animation
	const style = document.createElement("style");
	style.textContent = `
		.card {
			opacity: 0;
			transform: translateY(30px);
			transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		}
	`;
	document.head.appendChild(style);

	generateProjectCards();
	createScrollToTopButton();
	initParallax();

	// Add scroll animations for timeline items
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animationPlayState = "running";
			}
		});
	}, observerOptions);

	// Observe timeline items
	setTimeout(() => {
		const timelineItems = document.querySelectorAll(".timeline-item");
		timelineItems.forEach((item) => {
			item.style.animationPlayState = "paused";
			observer.observe(item);
		});
	}, 500);
});
