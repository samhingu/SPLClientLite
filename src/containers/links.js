import React, {Component} from 'react'
import { connect } from "react-redux"

import * as LinkActions from "../actions/link"

class Links extends Component {
    componentDidMount() {
        //this.props.getLinks();
    }

    prepareLinkListing() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>release date</th>
                    </tr>
                </thead>
                <tbody>
                    {!this.props.link.isLoading && this.props.link.links.map((link) =>
                        <tr key={link._id} className="selected">
                            <td>{link.title}</td>
                            <td>{link.body}</td>
                        </tr>
                    ) }
                    {this.props.link.isLoading && <tr><td colSpan="2"><div className="loading"></div></td></tr>}
                </tbody>
            </table>
        )
    }
    render() {
        var btnClass = this.props.link.isLoading ? "btn btn-primary loading" : "btn btn-primary"
        return (
            <section className="section bg-grey">
                <button className={btnClass} onClick={()=> this.props.getLinks()}>Refresh</button>
                { this.prepareLinkListing() }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        link: state.link
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLinks: () => { return dispatch(LinkActions.getLinks()) },
        createLink: (link) => { return dispatch(LinkActions.getLinks()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);