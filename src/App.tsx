import './App.scss';

import Description from './components/description/description';
import Projects from './components/projects/projects';
import Technologies from './components/technologies/technologies';
import Footer from './components/footer/footer';
import DarkmodeButton from './components/darkmode-button/darkmode-button';

function App() {
  return (
    <div className="App">
	<DarkmodeButton />
	<header className="App-header">
        <section className = 'name'>
		<h1>Amadeusz Sopot</h1>
        </section>
	</header>
      <Description />
      <h2>Projekty</h2>
      <Projects />
      <h2>Technologie</h2>
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
