import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1
    };
    this.switchPhoto = this.switchPhoto.bind(this);
    this.moveForwardBackward = this.moveForwardBackward.bind(this);
  }

  switchPhoto(event) {
    this.setState({
      photoId: Number(event.target.dataset.id)
    });
  }

  moveForwardBackward(event) {
    clearInterval(this.timerID);
    if (event.target.dataset.id === 'right') {
      if (this.state.photoId === this.props.images.length) {
        this.setState({
          photoId: 1
        });
      } else {
        this.setState({
          photoId: this.state.photoId + 1
        });
      }
    }
    if (event.target.dataset.id === 'left') {
      if (this.state.photoId === 1) {
        this.setState({
          photoId: this.props.images.length
        });
      } else {
        this.setState({
          photoId: this.state.photoId - 1
        });
      }
    }
    const { images } = this.props;
    this.timerID = setInterval(() => {
      if (this.state.photoId === images.length) {
        this.setState({
          photoId: 1
        });
      } else {
        this.setState({
          photoId: this.state.photoId + 1
        });
      }
    }, 3000);
  }

  componentDidMount() {
    const { images } = this.props;
    this.timerID = setInterval(() => {
      if (this.state.photoId === images.length) {
        this.setState({
          photoId: 1
        });
      } else {
        this.setState({
          photoId: this.state.photoId + 1
        });
      }
    }, 3000);
  }

  render() {
    const { images } = this.props;
    let listClass;
    let circleClass;

    return (
      <div className="container">
        <div className="row">
          <div className="left-arrow">
            <button className="left-arrow">
              <span onClick={this.moveForwardBackward}className="fa-solid fa-chevron-left" data-id="left"></span>
            </button>
          </div>
          <ul className="window">
            {
              images.map(image => {
                if (image.item === this.state.photoId) {
                  listClass = '';
                } else {
                  listClass = 'hidden';
                }
                return (<li key={image.item} className={listClass}>
                  <img src={image.url}></img>
                </li>
                );
              })
            }
          </ul>
          <div className="right-arrow">
            <button className="right-arrow">
              <span onClick={this.moveForwardBackward} className="fa-solid fa-chevron-right" data-id="right"></span>
            </button>
          </div>
        </div>
        <div className="row">
          <ul>
            {
              images.map(image => {
                if (image.item === this.state.photoId) {
                  circleClass = 'solid';
                } else {
                  circleClass = 'regular';
                }
                return (<li onClick={this.switchPhoto}key={image.item} className="dot">
                  <span className={`fa-${circleClass} fa-circle`} data-id={image.item}></span>
                </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
