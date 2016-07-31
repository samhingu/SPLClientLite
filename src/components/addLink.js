import React, {Component} from 'react'

import RichTextEditor from 'react-rte';

class AddLink extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: RichTextEditor.createEmptyValue()
        }
    }

    handleChange(value) {
        this.setState({ value })
    }
    handleSubmit() {
        console.log(this.state.value.toString('html'))
    }
    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-3">
                            <label className="form-label">Title</label>
                        </div>
                        <div className="col-sm-9">
                            <input ref="title" className="form-input" type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-3">
                            <label className="form-label">Body</label>
                        </div>
                        <div className="col-sm-9">
                            <RichTextEditor value={this.state.value}
                                onChange={ this.handleChange.bind(this) } />
                        </div>

                    </div>
                    <div className="form-group">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                            <button onClick={this.handleSubmit.bind(this) } type="button" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-link">Cancel</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default AddLink;