import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClick: '',
      doubleClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { accordionItems } = this.props;
    let pClass;
    return (
      <div className="accordion-row">
        <ul>
          {
            accordionItems.map(item => {
              if (this.state.headerClick !== item.title || this.state.doubleClicked === true) {
                pClass = 'hidden';
              } else {
                pClass = 'reveal';
              }
              return (
                  <li onClick={this.handleClick} key={item.title}>
                    <h1 id={item.title} onClick={this.handleClick}>{item.title}</h1>
                    <p className={pClass}>{item.details}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  handleClick(event) {
    if (this.state.headerClick === event.target.id) {
      this.setState({
        doubleClicked: true
      });
    } else {
      this.setState({
        headerClick: event.target.id,
        doubleClicked: false
      });
    }
  }
}
