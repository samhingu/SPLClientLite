import React, {Component} from 'react'
import { connect } from 'react-redux'

import NotificationSystem from 'react-notification-system'

class NotificationContainer extends Component {
    componentDidMount() {
        this.notificationSystem = this.refs.notificationSystem
    }
    
    componentWillReceiveProps(nextProps) {
        const {message, level} = nextProps.notification
        this.notificationSystem.addNotification({
            message,
            level
        })
    }

    render() {
        return (
            <NotificationSystem ref="notificationSystem" />
        );
    }
}

function mapStateToProps(state){
    return {
        notification: state.notification
    }
}

export default connect(mapStateToProps)(NotificationContainer)