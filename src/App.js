import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Thomas' Hosting Demo</h2>
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1585582857146-7886023ad3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1585528063587-3ad4046b7254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1585457288697-180e55c12dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>{" "}
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1585582857146-7886023ad3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>{" "}
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1585582857146-7886023ad3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>{" "}
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1585582857146-7886023ad3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>{" "}
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
