import React from 'react';
import Image from './Image';
import './NewsList.css';


class NewsList extends React.Component {
  render () {
    return (
    <div className="container">
    <div className="row">
      {this.props.downNews.map((data, index) =>
      <div className="col-md-6 col-lg-4">
        <div className="card" style={{width: '18rem'}}>
          <Image finalNews={data} key={index} />
        </div>
      </div>)}
      </div>
    </div>

    );
  }
}


export default NewsList;
