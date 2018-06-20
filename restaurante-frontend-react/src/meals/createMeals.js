import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {withFormik} from "formik/dist/formik";

class CreateMeal extends React.Component {
    componentDidMount() {
        this.props.getMeal(this.props.match.params.id);
        this.props.listRestaurants();
    }

    render() {
        const {values, handleChange, isSubmitting, handleSubmit} = this.props;
        return (
            <Fragment>
                <h2> Cadastro de pratos </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Dados</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="form-group">
                                        <label htmlFor="restaurant">Restaurante</label>
                                        <select className="form-control" id="restaurant"
                                                required name="restaurant" value={values.restaurant_id}
                                                onChange={handleChange}>
                                            <option value="null" disabled hidden="true"> Selecione</option>
                                            {this.props.restaurants && this.props.restaurants.map(restaurant =>
                                                <option key={restaurant.id}
                                                        value={restaurant.id}> {restaurant.name}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Prato</label>
                                        <input className="form-control" type="text" id="name" required name="name"
                                               value={values.name} onChange={handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="price">Preço</label>
                                        <input className="form-control" type="text" id="price" required name="price"
                                               value={values.price} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                                <i className="fa fa-save"/>
                                Salvar
                            </button>
                            <Link className="btn btn-danger" to="/meals">
                                <i className="fa fa-undo"/>
                                Cancelar
                            </Link>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({mealsReducer, restaurantsReducer}) => ({
    meal: mealsReducer.meal || {},
    restaurants: restaurantsReducer.restaurants
});

const mapDispatchToProps = dispatch => ({
    listRestaurants: () => dispatch({type: 'LIST_RESTAURANTS'}),
    getMeal: (id) => dispatch({type: 'GET_MEAL', id}),
    persistMeal: (meal) => dispatch({type: 'PERSIST_MEAL', meal})
});

const mapPropsToValues = ({meal}) => ({
    name: meal.name,
    id: meal.id,
    restaurant_id: meal.restaurant_id,
    price: meal.price
});

const handleSubmit = (values, {props}) => {
    props.persistMeal(values)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues,
    handleSubmit,
    enableReinitialize: true
})(CreateMeal));