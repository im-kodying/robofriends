import React from 'react';
import Card from "./Card";

class CardList extends React.Component {

    render() {
        return(
            <div>
                {this.props.robots.map((user, i) => {
                    return (<Card key={i} robot={this.props.robots[i]} />);
                }
                )}
            </div>
        );
    }
}

export default CardList;
