import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { requestAllItems } from './actions';
import { makeSelectAllItems, makeSelectLoadingItems } from './selectors';
import './style.css';

import {
  Card,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

class Dashboard extends React.Component {
  state = {};

  componentDidMount() {
    const { fetchAllItems } = this.props;
    fetchAllItems();
  }

  render() {
    const { allItems, loadingItems, history } = this.props;

    const groupedByLeagueName = allItems.reduce(function (r, a) {
      r[a.league_name] = r[a.league_name] || [];
      r[a.league_name].push(a);
      return r;
    }, Object.create(null));

    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <InputGroup className="m-3 input-row">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>

          <Row>
            {Object.keys(groupedByLeagueName).map((key, val) => (
              <Col sm={12} md={6} lg={4} key={key} className="col-card">
                <Card
                  className="card"
                  onClick={() =>
                    // console.log(groupedByLeagueName[key][0]?.leagueid, 'hello')
                    history.push(
                      `/league/${groupedByLeagueName[key][0]?.leagueid}`
                    )
                  }
                >
                  <Card.Title>{key}</Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allItems: makeSelectAllItems(),
  loadingItems: makeSelectLoadingItems(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllItems: () => dispatch(requestAllItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
