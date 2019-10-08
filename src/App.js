import React from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'abc',
      count: 0,
      monsters: [],
      searchfield: ''
    }
    // console.log('constructor');
    // console.log('props ', props);
    // console.log('state ', this.state);
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps');
    // console.log(state);
    // console.log(props);
    return { state };
  }
  componentDidMount() {
    // console.log('componentDidMount');
    // console.log(this.state);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => this.setState({ monsters: data }));
  }
  shouldComponentUpdate(prev, next) {
    // console.log('shouldComponentUpdate');
    // console.log(this.state);
    // console.log(prev, next);
    if (prev !== next) {
      return true;
    }
  }
  getSnapshotBeforeUpdate() {
    // console.log('getSnapshotBeforeUpdate');
    // console.log(this.state);
    return true;
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate');
    // console.log(this.state);

  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
    // console.log(this.state);
  }
  updateStateClick = () => {
    console.log('before updateStateClick');
    console.log(this.state.test);
    this.setState({ test: 'updated_abc1' }, () => {
      console.log('cb stateClick');
      console.log(this.state.test);
    });
    console.log('post updt ', this.state.test);
  }
  updateCounter = () => {
    // console.log('beforeCounterUpdt', this.state.count);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
    // console.log('postCounterUpdt', this.state.count);
  }



  render() {
    // console.log('render');
    // console.log(this.state);
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Search people</h1>
        <SearchBox
          placeholder="Search monsters"
          handlechange={e => this.setState({ searchfield: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
        Counter : {this.state.count}<br />
        <button onClick={this.updateStateClick} > Update State </button><br />
        <button onClick={this.updateCounter} >Update Counter</button><br />

      </div>
    );
  }
}

export default App;
