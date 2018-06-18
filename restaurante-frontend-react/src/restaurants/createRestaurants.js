import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withFormik} from 'formik';

class RestaurantForm extends React.Component {
    componentWillMount() {
        if (this.props.match.params.id) {
            this.props.getRestaurant(this.props.match.params.id);
        }
    }

    render() {
        const {values, handleChange, isSubmitting, handleSubmit} = this.props;
        return (
            <Fragment>
                <h2> Cadastro de restaurantes </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Dados</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="form-group">
                                        <label htmlFor="name">Restaurante</label>
                                        <input className="form-control" type="text" onChange={handleChange}
                                               value={values.name} required name="name"/>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                                <i className="fa fa-save"/>
                                Salvar
                            </button>
                            <Link className="btn btn-danger" to="/restaurants">
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

const mapStateToProps = ({restaurantsReducer}) => ({
        restaurant: restaurantsReducer.restaurant || {}
});

const mapDispatchToProps = dispatch => ({
    getRestaurant: (id) => dispatch({type: 'GET_RESTAURANT', id}),
    persistRestaurant: (restaurant) => dispatch({type: 'PERSIST_RESTAURANT', restaurant})
});

const mapPropsToValues = props => ({name: props.restaurant.name || '', id: props.restaurant.id});

const handleSubmit = (values, {props}) => {
    props.persistRestaurant(values)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues,
    handleSubmit,
    enableReinitialize: true
})(RestaurantForm));