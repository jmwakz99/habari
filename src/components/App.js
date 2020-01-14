import React from 'react';
import axios from 'axios';
import NewsNav from './NewsNav';
import NewsList from './NewsList';
import Footer from './Footer';
import './App.css';
const API_KEY = 'f1d8d6b770cf4c828522e97c7db914f5';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


class App extends React.Component {
  state = {
    news: [],
  };
  componentDidMount(){
      axios.get(url).then(res => {
        this.setState({news: res.data.articles});
      });
    }




render () {
    return (
      <div>
        <div>
           <NewsNav />
        </div>

        <div className="ui container">
          <div className="headline">
            NEWS HEADLINES
          </div>
        </div>
        <div>
          <NewsList downNews={this.state.news} />
        </div>
        <div className="container text-center">
          <Footer />
        </div>


      </div>


    )
  }
}

export default App;
