import React from 'react';
import Card from "./Card";
import {robots} from "./robots";

class CardList extends React.Component {
    cardArray = robots.map((user, i) => {
        return (<Card key={i} robot={robots[i]} />);
    })
    render() {
        return(
            <div>
                {this.cardArray}
            </div>
        );
    }
}

export default CardList;
