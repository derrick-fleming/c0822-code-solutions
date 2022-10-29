import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1,
      clicked: false
    };
    this.switchPhoto = this.switchPhoto.bind(this);
    this.moveForwardBackward = this.moveForwardBackward.bind(this);
  }

  switchPhoto(event) {
    clearInterval(this.timerID);
    this.setState({
      photoId: Number(event.target.dataset.id),
      clicked: true
    });
  }

  moveForwardBackward(event) {
    clearInterval(this.timerID);
    const { images } = this.props;
    if (event.target.dataset.id === 'right') {
      if (this.state.photoId === images.length) {
        this.setState({
          photoId: 1,
          clicked: true
        });
      } else {
        this.setState({
          photoId: this.state.photoId + 1,
          clicked: true
        });
      }
    }
    if (event.target.dataset.id === 'left') {
      if (this.state.photoId === 1) {
        this.setState({
          photoId: images.length,
          clicked: true
        });
      } else {
        this.setState({
          photoId: this.state.photoId - 1,
          clicked: true
        });
      }
    }
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

  componentDidUpdate(prevState) {
    if (this.state.clicked === true) {
      this.timerID = setInterval(() => {
        if (this.state.photoId === this.props.images.length) {
          this.setState({
            photoId: 1,
            clicked: false
          });
        } else {
          this.setState({
            photoId: this.state.photoId + 1,
            clicked: false
          });
        }
      }, 3000);
    }
  }

  render() {
    const { images } = this.props;
    let listClass;
    let circleClass;
    return (
      <>
        <div className="row">
          <div>
            <button>
              <span onClick={this.moveForwardBackward}className="fa-solid fa-chevron-left" data-id="left"></span>
            </button>
          </div>
          <ul className="window">
            {
              images.map(image => {
                image.item === this.state.photoId ? listClass = '' : listClass = 'hidden';
                return (
                  <li key={image.item} className={listClass}>
                    <img src={image.url}></img>
                  </li>
                );
              })
            }
          </ul>
          <div>
            <button>
              <span onClick={this.moveForwardBackward} className="fa-solid fa-chevron-right" data-id="right"></span>
            </button>
          </div>
        </div>
        <div className="row">
          <ul>
            {
              images.map(image => {
                image.item === this.state.photoId ? circleClass = 'solid' : circleClass = 'regular';
                return (
                  <li onClick={this.switchPhoto} key={image.item} className="dot">
                    <span className={`fa-${circleClass} fa-circle`} data-id={image.item}></span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </>
    );
  }
}
