import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Outlet, Link } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./style.scss";

export function NavbarHang() {
    return (
        <>
            <div className="Nav-bar d-flex justify-content-between">
                <ul>
                    <Link to="/">
                        <li>
                            <img
                                src={logo}
                                className="Nav-bar-logo"
                                alt="logo"
                            />
                        </li>
                    </Link>
                    <Link to="play" className="text-white">
                        <li>
                            Jogar <FontAwesomeIcon icon={solid("play")} />
                        </li>
                    </Link>
                    <li>
                        Feito com <FontAwesomeIcon icon={brands("react")} />{" "}
                        <FontAwesomeIcon icon={brands("bootstrap")} />{" "}
                        <FontAwesomeIcon icon={brands("css3-alt")} />
                    </li>
                </ul>
                <ul>
                    <li>
                        Criar conta{" "}
                        <FontAwesomeIcon icon={solid("user-plus")} />
                    </li>
                    <li>
                        Entrar <FontAwesomeIcon icon={solid("user-check")} />
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    );
}
