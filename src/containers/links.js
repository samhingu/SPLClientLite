import React, {Component} from 'react'
import {connect} from "react-redux"

import * as LinkActions from "../actions/link"
import Links from '../components/links'

class LinksComponent extends Component {
    componentDidMount() {
        if (!this.props.isLoading && !this.props.links.length) {
            this.props.getLinks()
        }
    }
    render() {
        return <Links {...this.props}/>
    }
}

const mapStateToProps = ({link}) => ({links: link.links, isLoading: link.getLinks.isLoading, isDeleting: link.deleteLink.isDeleting, delLinkId: link.deleteLink.linkId})
const mapDispatchToProps = (dispatch) => {
    return {
        getLinks() {
            dispatch(LinkActions.getLinks())
        },
        deleteLink(linkId) {
            dispatch(LinkActions.deleteLink(linkId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksComponent)
