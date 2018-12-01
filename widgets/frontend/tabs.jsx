import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);


    this.state = props.panes[0];

  }

  fetchTab(tab) {
  return $.ajax({
    url: `file:///Users/appacademy/Desktop/W6D5/widgets/index.html`,
    type: "GET",
    dataType: 'json'
  }).then(res => this.setState({
    title: title,
    content: content
  }));
}

  render () {

    return (
      <div>
      <h1> Tabs </h1>

        <button onClick={this.setState({
            title:
          })></button>


      </div>
    );
  }
}

export default Tabs;
