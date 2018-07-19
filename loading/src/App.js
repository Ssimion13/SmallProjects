import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {RingLoader} from 'react-spinners';

const ThemeContext = React.createContext('light');

class Loading extends Component {
  state = {
    loading: true
    }
    componentDidMount() {
      this.mountTime = Date.now();
      window.setTimeout(() => {
        this.setState({ loading: false}), 3000
      })
    }
    componentWillReceiveProps(nextProps) {
      if(!nextProps.loading && this.props.loading) {
        this.endTime = Date.now();
        if(this.props.onProfile) {
          this.props.onProfile({
            mountTime: this.mountTime,
            readyTime: this.readyTime,
            endTime: this.endTime,
            seconds: Math.round(this.endTime - this.mountTime / 1000)
          })
        }
        console.log("Done", Math.round(this.endTime - this.mountTime / 1000));
      }
    }
    
  render(){
    if(this.state.loading) {
      return <RingLoader />;
    } else {
      return <div> Hi </div>;
    }
  }
}



class App extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ loading: false}), 3000
    })
  }
  render() {
    return (
      <Loading 
        loading={this.state.loading}
        onProfile={console.log}
      >
        {() => {
          <div className="App">
            <h1> Hello codesandbox </h1>
            <h2> Start editing to see some magic </h2>
          </div>
        }}
      </Loading>
    );
  }
}

export default App;
