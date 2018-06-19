import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {parse} from 'query-string';
import {SearchBox} from '../common'

class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        let {search} = parse(this.props.location.search);
        this.state = {search: search};
    }

    componentDidMount() {
        this.props.listRestaurants(this.state.search);
    }

    componentWillUpdate (newProps, newState) {
        if(newProps.location.search !== this.props.location.search) {
            this.props.listRestaurants(newState.search);
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    };

    render() {
        return (
            <Fragment>
                <h2> Restaurantes </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Filtros</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <SearchBox search={this.state.search} path="/restaurants"
                                               handleChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <Link to="/restaurant" className="btn btn-success">
                                    <i className="fa fa-plus"/>
                                    Cadastrar novo restaurante
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-container">
                    {this.props.restaurants &&

                    <table className="table table-striped">
                        <colgroup>
                            <col className="table-icon"/>
                            <col className="table-icon"/>
                            <col/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th/>
                            <th/>
                            <th data-field="name">Restaurantes</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.props.restaurants.map(restaurant =>
                            <tr key={restaurant.id}>
                                <td className="td-icon td-icon-red">
                                    <a onClick={() => this.props.deleteRestaurant(restaurant.id)}>
                                        <i className="fa fa-minus"/>
                                    </a>
                                </td>

                                <td className="td-icon">
                                    <Link to={'/restaurant/' + restaurant.id}>
                                        <i className="fa fa-edit"/>
                                    </Link>
                                </td>
                                <td> {restaurant.name}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({restaurantsReducer}) => ({
    restaurants: restaurantsReducer.restaurants
});

const mapDispatchToProps = dispatch => ({
    listRestaurants: (search) => dispatch({type: 'LIST_RESTAURANTS', search: search}),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);