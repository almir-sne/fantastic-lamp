import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Restaurants extends React.Component {
    componentDidMount() {
        this.props.listRestaurants();
    }

    render() {
        return (
            <Fragment>
                <h2> Restaurantes </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Filtros</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Nome"
                                               id="name" name=" name"/>
                                        <span className=" input-group-btn">
                                    <button className=" btn btn-primary" type="submit">
                                        <i className="fa fa-search"/>
                                     </button>
                                </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="/restaurant" className="btn btn-success">
                                        <i className="fa fa-plus"/>
                                        Cadastrar novo restaurante
                                    </Link>
                                </div>
                            </div>
                        </form>
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
                                <td className=" td-icon td-icon-red">
                                    <a>
                                        <i className="fa fa-minus"/>
                                    </a>
                                </td>

                                <td className="td-icon">
                                    <Link to="/restaurant">
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

const mapStateToProps = ({restaurantsReducer}) => {
    return {restaurants: restaurantsReducer.restaurants}
};

const mapDispatchToProps = dispatch => {
    return {
        listRestaurants: () => dispatch({type: 'LIST_RESTAURANTS'})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);