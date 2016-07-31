
import React, {Component} from 'react'
import { connect } from "react-redux"

import * as LinkActions from "../actions/link"

class Links extends Component {
    componentDidMount() {
        if (!this.props.link.isLoading && !this.props.link.links.length) {
            this.props.getLinks();
        }
    }
    prepareNoLinksMessage() {
        return (
            <div className="empty mt-5">
                <i className="icon icon-people"></i>
                <p className="empty-title">You have no links</p>
                <p className="empty-meta">Click the button to add new link.</p>
                <button className="empty-action btn btn-primary">Add Link</button>
            </div>
        )
    }
    prepareLinkListing() {
        return (
            <div className="container bg-gray mt-5">
                <div className="columns">
                    <div className="column col-xs-9 text-bold">Title</div>
                    <div className="column col-xs-2 text-bold">Body</div>
                    <div className="column col-xs-1 text-bold">Action</div>
                </div>
                {!this.props.link.isLoading && this.props.link.links.map((link) =>
                    <div className="columns" key={link._id}>
                        <div className="column col-xs-9">{link.title}</div>
                        <div className="column col-xs-2">{link.body}</div>
                        <div className="column col-xs-1">
                            <button onClick={() => this.props.deleteLink(link._id) }
                                className={this.props.link.linkId === link._id ? "btn loading disabled" : "btn btn-primary btn-block"}>
                                {this.props.link.linkId === link._id ? "Deleting" : "Delete"}
                            </button>
                        </div>
                    </div>
                ) }
                {this.props.link.isLoading && <div className="center loading"></div>}
            </div>
        )
    }
    render() {
        var btnClass = this.props.link.isLoading ? "btn centered btn-primary loading" : "btn centered btn-primary"
        return (
            <section className="section">
                <button className={btnClass} onClick={() => this.props.getLinks() }>Refresh</button>
                {!!this.props.link.links.length && this.prepareLinkListing() }
                {!this.props.link.links.length && this.prepareNoLinksMessage() }
            </section>
        );
    }
}
const mapStateToProps = ({link}) => ({ link })
const mapDispatchToProps = (dispatch) => {
    return {
        getLinks() { dispatch(LinkActions.getLinks()) },
        deleteLink(linkId) { dispatch(LinkActions.deleteLink(linkId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);