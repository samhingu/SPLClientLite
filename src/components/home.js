import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="empty">
                <i className="icon icon-people"></i>
                <p className="empty-title">You have no new messages</p>
                <p className="empty-meta">Click the button to start a conversation.</p>
                <button className="empty-action btn btn-primary">Send a message</button>
            </div>
        );
    }
}

export default Home;