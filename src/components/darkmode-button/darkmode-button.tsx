import React from "react";
import "./darkmode-button.scss";


const DarkmodeButton = () => {
	const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		const json = localStorage.getItem("portfolio-dark-mode") || "{}" ;
		const currentMode = JSON.parse(json);
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false)
		}
	}, []);

	React.useEffect(() => {
		if(darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		const json = JSON.stringify(darkMode)
		localStorage.setItem("portfolio-dark-mode", json);
	}, [darkMode]);

	return (
	<label className="switch">
	<input type="checkbox" value="dark mode"  onClick={() => setDarkMode(!darkMode)}></input>
	<span className="slider round"></span>
	</label>
	);
};

export default DarkmodeButton
