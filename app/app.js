import { HomePage } from "../home/home.index.js";

const rootElement = document.getElementById("root");

const newHeading = document.createElement("h1");
newHeading.innerText = "Welcome Kushagra";
rootElement.appendChild(newHeading);

const link = document.createElement("a");
link.href = "home";
link.innerText = "Home";
rootElement.appendChild(link);

link.addEventListener("click", (e) => {
	e.preventDefault();
	history.pushState({}, "", e.target.href);
	navigate(e); // pending implementation
});

const navigate = (e) => {
	const route = e.target.pathname;
	history.pushState({}, "", route);
	// renderContent(route);
};

const registerBrowserBackAndForth = () => {
	window.onpopstate = function (e) {
		const route = location.pathname;
		console.log(route);
		// renderContent(route);
	};
};

const renderInitialPage = () => {
	const route = location.pathname;
	console.log(route);
	// renderContent(route);
};

registerBrowserBackAndForth();
renderInitialPage();