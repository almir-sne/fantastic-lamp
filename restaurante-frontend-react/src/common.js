import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export const SearchBox = ({search, handleChange, path}) =>
    <Fragment>
        <input type="text" className="form-control" placeholder="Nome"
               id="search" defaultValue={search} onChange={handleChange} name="search"/>
        <Link to={{pathname: path, search: search ? '?search=' + search : ''}}
              className="btn btn-primary">
            <i className="fa fa-search"/>
        </Link>
    </Fragment>