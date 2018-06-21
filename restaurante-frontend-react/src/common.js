import React from "react";
import {Link} from "react-router-dom";

export const SearchBox = ({search, handleChange, path, label}) =>
    <div className="input-group">
        <input type="text" className="form-control" placeholder="Nome"
               id="search" defaultValue={search} onChange={handleChange} name="search"/>
        <span className="input-group-btn">
            <Link to={{pathname: path, search: search ? '?search=' + search : ''}}
                  className="btn btn-primary">
                <i className="fa fa-search"/>
                {label}
            </Link>
        </span>
    </div>