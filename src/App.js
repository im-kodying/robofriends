import './App.css';
import React from 'react';
import CardList from "./CardList";
import Searchbox from './Searchbox';
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className={'f1'}>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
  }
}

export default App;
