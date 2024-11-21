// Project data
const projects = [
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
	const projectsContainer = document.querySelector(".container-fluid .row");

	projects.forEach((project) => {
		const projectCard = document.createElement("div");
		projectCard.className = "col-md-4";

		const tagsHtml = project.tags
			.map((tag) => `<span class="tag tag-${tag.toLowerCase()}">${tag}</span>`)
			.join("");

		projectCard.innerHTML = `
            <a href="${project.url}" class="card" target="_blank">
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
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", generateProjectCards);
