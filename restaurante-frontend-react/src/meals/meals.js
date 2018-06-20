import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {parse} from "query-string";
import {SearchBox} from "../common";

class Meals extends React.Component {
    constructor(props) {
        super(props);
        let {search} = parse(this.props.location.search);
        this.state = {search: search};
    }

    componentDidMount() {
        this.props.listMeals(this.state.search);
    }

    componentWillUpdate(newProps, newState) {
        if (newProps.location.search !== this.props.location.search) {
            this.props.listMeals(newState.search);
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    };

    render() {
        return (
            <Fragment>
                <h2> Pratos </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Filtros</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <SearchBox search={this.state.search} path="/meals"
                                                   handleChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="/meal" className="btn btn-success">
                                        <i className="fa fa-plus"/>
                                        Cadastrar novo prato
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="table-container">
                    {this.props.meals &&
                    <table className="table table-striped">
                        <colgroup>
                            <col className="table-icon"/>
                            <col className="table-icon"/>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th/>
                            <th/>
                            <th>Restaurante</th>
                            <th>Prato</th>
                            <th>Preço</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.props.meals.map(meal =>
                            <tr key={meal.id}>
                                <td className="td-icon td-icon-red">
                                    <a onClick={() => this.props.deleteMeal(meal.id)}>
                                        <i className="fa fa-minus"/>
                                    </a>
                                </td>

                                <td className="td-icon">
                                    <Link to={"/meal/" + meal.id}>
                                        <i className="fa fa-edit"/>
                                    </Link>
                                </td>
                                <td> {meal.restaurant.name} </td>
                                <td> {meal.name}</td>
                                <td> {meal.price}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({mealsReducer}) => ({
    meals: mealsReducer.meals
});

const mapDispatchToProps = dispatch => ({
    listMeals: (search) => dispatch({type: 'LIST_MEALS', search: search}),
    deleteMeal: (id) => dispatch({type: 'DELETE_MEAL', id: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);