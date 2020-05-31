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
import ModalComponent from '../../components/Modal';

class LeaguePage extends React.Component {
  state = {
    modalShow: false,
    matchDetail: false,
  };

  componentDidMount() {
    const { fetchAllItems } = this.props;
    fetchAllItems();
  }

  render() {
    const {
      allItems,
      loadingItems,
      match: { params },
    } = this.props;

    const filteredItems = allItems.filter(
      (item) => item.leagueid === +params.league_id
    );

    const leagueName = filteredItems[0]?.league_name;

    console.log(filteredItems, 'filteredItems');

    return (
      <>
        <h1>{leagueName}</h1>
        <Container>
          <Row className="justify-content-md-center">
            <InputGroup className="m-3 input-row">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={() => console.log('hello')}
                >
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>

          <Row>
            {filteredItems.map((item) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                key={item.match_id}
                className="col-card"
              >
                <Card
                  className="card"
                  onClick={() =>
                    this.setState({ modalShow: true, matchDetail: item })
                  }
                >
                  <Card.Title>
                    {`${item.dire_name} vs ${item.radiant_name}`}
                  </Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <ModalComponent
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          matchDetail={this.state.matchDetail}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(LeaguePage);
