import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Meals = () =>
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
                                <input type="text" className="form-control" placeholder="Nome"
                                       id="name" name=" name"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"/>
                                     </button>
                                </span>
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
                <tr>
                    <td className="td-icon td-icon-red">
                        <a>
                            <i className="fa fa-minus"/>
                        </a>
                    </td>

                    <td className="td-icon">
                        <Link to="/meal">
                            <i className="fa fa-edit"/>
                        </Link>
                    </td>
                    <td> Restaurante</td>
                    <td> Name</td>
                    <td> Preço</td>
                </tr>
                </tbody>
            </table>
        </div>
    </Fragment>

export default Meals;