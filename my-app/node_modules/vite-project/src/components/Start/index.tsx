import './style.css';

export default function (props: {
  title: string;
  highlight: string;
  text: string;
  list: string[];
  button: string;
}) {
  const { title, highlight, text, list, button } = props;

  return (
    <div className="Body">
      <div>
        <h1 className="Headline">
          {title}
          <br />
          <span className="Highlight">{highlight}</span>
        </h1>

        <p className="Text">{text}</p>

        <ul className="List">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a className="button" href="/catalog">
          {button}
        </a>
      </div>
    </div>
  );
}