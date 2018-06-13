import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const CreateMeal = () =>
    <Fragment>
        <h2> Cadastro de pratos </h2>

        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Dados</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="form-group">
                                <label htmlFor="restaurant">Restaurante</label>
                                <select className="form-control" id="restaurant"
                                        required name="restaurant">
                                    <option value=" null" disabled hidden="true"> Selecione</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="name">Prato</label>
                                <input className="form-control" type="text" id="name" required name="name"/>
                            </div>

                            <div className="form-group">
                                <label for="price">Preço</label>
                                <input className="form-control" type="text" id="price" required name="price"/>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-success" type=" submit">
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


export default CreateMeal;