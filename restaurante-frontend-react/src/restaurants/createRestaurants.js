import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CreateRestaurant extends React.Component {
    render() {
        return (
            <Fragment>
                <h2> Cadastro de restaurantes </h2>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Dados</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="form-group">
                                        <label for="name">Restaurante</label>
                                        <input className="form-control" type="text" id="name" required name="name"/>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success" type=" submit">
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

const mapStateToProps = state => {
    return {
        restaurants : state.restaurants
    }
};

const mapDispatchToProps = dispatch => {
    return {
        listRestaurants : () => dispatch({type: 'LIST_RESTAURANTS'})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateRestaurant);