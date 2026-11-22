import "./technologies.scss";

const TECHNOLOGIES = [
  "html / css / js",
  "typescript",
  "astro",
  "react",
  "node-js",
  "git",
  "python",
  "bash",
  "c",
];

function Technologies() {
  return (
    <ul className="technologies">
      {TECHNOLOGIES.map((tech) => (
        <li className="tech" key={tech}>
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default Technologies;
