import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNotification } from '../actions/notification'

class About extends Component {
    doSomething() {
        this.props.actions.addNotification("sdf","error")
    }
    render() {
        return (
            <div>
                <h2>This is About Page</h2>
                <button
                    onClick={() => this.doSomething()}
                    type="button">Toastr Success</button>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        notification: state.notification
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({
            addNotification
        }, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)
