import React, {Component} from 'react'
import {connect} from 'react-redux'

import AddLink from '../components/addLink'
import {addLink as addLinkAction} from '../actions/link'

class AddLinkComponent extends Component{
  handleSubmit(link){
    this.props.addLink(link)
  }
  render(){
    return <AddLink onSubmit={this.handleSubmit.bind(this)} isAdding={this.props.isAdding} />
  }
}

const mapStateToProps = ({link}) => ({
  isAdding: link.addLink.isAdding
 })

 const mapDispatchToProps = (dispatch) =>{
   return {
   addLink: (link) => dispatch(addLinkAction(link))
  }
 }

export default connect(mapStateToProps,mapDispatchToProps)(AddLinkComponent)
