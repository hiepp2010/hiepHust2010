class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuote: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let randIndex = Math.floor(Math.random() * this.state.quotes.length);

    this.setState({
      randomQuote: this.state.quotes[randIndex],
    });
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        let randIndex = Math.floor(Math.random() * json.length);
        this.setState({
          quotes: json,
          randomQuote: json[randIndex],
        });
      });
  }
  render() {
    return (
      <div id="quote-box" className="container pt-5">
        <div className="jumbotron">
          <div id="text">{this.state.randomQuote.text}</div>
          <div id="author">{this.state.randomQuote.author}</div>
          <button
            id="new-quote"
            className="btn btn-light "
            onClick={this.handleChange}
          >
            New quote
          </button>
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            className="btn btn-light"
          >
            <button></button>{" "}
          </a>
          <a href="#">asd</a>
          <a href="#">asdsad</a>
        </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
