import React, { Component } from "react";
import Loading from "./Loading";
export default class News extends Component {
  state = {
    items: [],
    n: 0,
    newsdata: [],
  };

  async getNews() {
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_key,
        "x-rapidapi-host": "newsnow.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: this.props.text,
        region: "wt-wt",
        max_results: 25,
      }),
    };

    try {
      const response = await fetch("https://newsnow.p.rapidapi.com/", options);
      const data = await response.json();
      this.setState({
        newsdata: data.news,
        n: data.count,
      });
      this.populateItems();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidMount() {
   this.getNews();
  }

  populateItems() {
    for (let index = 0; index < this.state.n; index++) {
      this.state.items.push(
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={this.state.newsdata[index].image}
            className="card-img-top"
            target="_blank"
            alt="..."
          />
          <div className="card-body p-1 w-5 h-5">
            <h5 className="card-title">
              {this.state.newsdata[index].title.substring(0, 50) + "...."}
            </h5>
            <p className="card-text">
              {this.state.newsdata[index].body.substring(0, 60) + "...."}
            </p>
            <a
              href={this.state.newsdata[index].url}
              className="m-1 btn btn-primary"
            >
              More...
            </a>
          </div>
        </div>
      );
    }
   
  }

  render() {
    return (
      <div className="p-2 mt-5 bg-dark d-flex flex-wrap flex-row align-items-center align-content-center justify-content-center justify-items-center">
        {this.state.items.length === 0 ? <Loading /> : this.state.items}
      </div>
    );
  }
}
