import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className={'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'}>
                <img alt={this.props.robot.id} src={'https://robohash.org/' + this.props.robot.id + '?200x200'}/>
                <div>
                    <h2>{this.props.robot.name}</h2>
                    <p>{this.props.robot.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;
