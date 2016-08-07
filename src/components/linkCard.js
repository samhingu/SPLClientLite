import React, {Component} from 'react'
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card'
import {FlatButton} from 'material-ui'

import {Grid, Row, Col} from 'react-flexbox-grid/lib/index'

class LinkCard extends Component {
    render() {
        return (
            <Grid>
            <Row>
            <Col xs={6} md={3} >
            <Card>
                    <CardTitle title="Card Title" subtitle="Card Subtitle">
                    </CardTitle>
                    <CardText>
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                    </CardText>
                    <CardActions>
                        <FlatButton label="Edit" />
                        <FlatButton label="View" />
                    </CardActions>
                </Card>
            </Col>
            <Col xs={6} md={3} >
            <Card>
                    <CardTitle title="Card Title" subtitle="Card Subtitle">
                    </CardTitle>
                    <CardText>
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                    </CardText>
                    <CardActions>
                        <FlatButton label="Edit" />
                        <FlatButton label="View" />
                    </CardActions>
                </Card>
            </Col>
            <Col xs={6} md={3} >
            <Card>
                    <CardTitle title="Card Title" subtitle="Card Subtitle">
                    </CardTitle>
                    <CardText>
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                        This is all Card Text
                    </CardText>
                    <CardActions>
                        <FlatButton label="Edit" />
                        <FlatButton label="View" />
                    </CardActions>
                </Card>
            </Col>
            </Row>
                
            </Grid>
        )
    }
}

export default LinkCard