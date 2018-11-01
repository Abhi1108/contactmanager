import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    title: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          id: data.id,
          title: data.title
        })
      );
  }

  //   componentWillMount() {
  //     console.log("ComponentWillMount");
  //   }

  //   componentDidUpdate() {
  //     console.log("ComponentDidUpdate");
  //   }

  //   componentWillUpdate() {
  //     console.log("ComponentDidUpdate");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("ComponentWillReceiveProps");
  //   }

  //   static getDerivedStateFromProps(nextProps, nextState) {
  //     console.log("getDerivedStateFromProps");
  //     return {
  //       test: "something"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { id, title } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>ID :- {id}</p>
        <p>Title :- {title}</p>
      </div>
    );
  }
}

export default Test;
