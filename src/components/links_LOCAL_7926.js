import React, { Component } from 'react'

class Links extends Component {
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
  prepareLink(link){
    return (
    <div className="columns" key={link._id}>
        <div className="column col-xs-9">{link.title}</div>
        <div className="column col-xs-2">{link.body}</div>
        <div className="column col-xs-1">
            <button onClick={() => this.props.deleteLink(link._id) }
                className={this.props.delLinkId === link._id ? "btn loading disabled" : "btn btn-primary btn-block"}>
                {this.props.delLinkId === link._id ? "Deleting" : "Delete"}
            </button>
        </div>
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
              {!this.props.isLoading && this.props.links.map(this.prepareLink.bind(this))}
              {this.props.isLoading && <div className="center loading"></div>}
          </div>
      )
  }
  render(){
      var btnClass = this.props.isLoading ? "btn centered btn-primary loading" : "btn centered btn-primary"
      return (
          <section className="section">
              <button className={btnClass} onClick={() => this.props.getLinks() }>Refresh</button>
              {!!this.props.links.length && this.prepareLinkListing() }
              {!this.props.links.length && this.prepareNoLinksMessage() }
          </section>
      )
  }
}

export default Links
