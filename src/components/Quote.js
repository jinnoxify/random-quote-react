import React, { Component } from "react";
const QuotesStore =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      index: 0,
    };
  }
  componentDidMount() {
    fetch(QuotesStore)
      .then((response) => response.json())
      .then((response) => {
        this.setState(
          {
            quotes: response.quotes,
          },
          this.getRandomNumber
        );
      });
  }

  getRandomNumber = () => {
    const { quotes } = this.state;
    if (quotes.length > 1) {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      this.setState({
        index: randomNumber,
      });
    }
  };

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    return (
      <div className="col-6 box p-4 rounded" id="quote-box">
        <div className="text-center" id="text">
          <i className="fas fa-quote-left"></i>
          {quote && (
            <div>
              {" "}
              <p>{quote.quote}</p>{" "}
              <cite className="text-right" id="author">
                {quote.author}
              </cite>
            </div>
          )}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <button
                className="btn btn-primary"
                id="new-quote"
                onClick={this.getRandomNumber}
              >
                <i className="fas fa-random"></i> Get quote
              </button>
            </div>
            <div className="col-sm-2">
              <a
                href="twitter.com/intent/tweet"
                target="_blank"
                id="tweet-quote"
              >
                <button className="btn btn-primary">
                  <i className="fab fa-twitter"></i> Tweet quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
