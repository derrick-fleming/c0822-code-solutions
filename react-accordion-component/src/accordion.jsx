import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openHeader: null
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
              this.state.headerClick === item.title ? pClass = 'reveal' : pClass = 'hidden';
              return (
                  <li key={item.title}>
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
        headerClick: null
      });
    } else {
      this.setState({
        headerClick: event.target.id
      });
    }
  }
}
