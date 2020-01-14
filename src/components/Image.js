import React from 'react';
import './Image.css';


class Image extends React.Component {
  render () {
    return (

      <div>
        <img src={this.props.finalNews.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
           <h5 className="card-title">{this.props.finalNews.title}</h5>
           <p className="card-text">{this.props.finalNews.description}</p>
           <a href={this.props.finalNews.url} >Go somewhere</a>
        </div>

      </div>


     );
  }
}
export default Image;
