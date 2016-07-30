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
            <div className="container">
                <div className="columns">
                    <div className="column col-xs-4">
                        <div className="card">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-header">
                                <h4 className="card-title">Microsoft</h4>
                                <h6 className="card-meta">Software and hardware</h6>
                            </div>
                            <div className="card-body">
                                To make a contribution to the world by making tools for the mind that advance humankind.
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">Do</button>
                            </div>
                        </div>
                    </div>
                    <div className="column col-xs-4">col-xs-3</div>
                    <div className="column col-xs-4">col-xs-3</div>                
            </div>
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
