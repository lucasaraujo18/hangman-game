import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

export function GuidesComponent() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <div className="d-flex">
                        <Link to="play" className="text-white">
                            <div className="card-guides">
                                <h1>
                                    Jogar{" "}
                                    <FontAwesomeIcon icon={solid("play")} />
                                </h1>
                                <p>Venha jogar forca no nosso sistema</p>
                            </div>
                        </Link>
                        <div className="card-guides">
                            <h1>
                                Biblioteca{" "}
                                <FontAwesomeIcon icon={solid("book-reader")} />
                            </h1>
                            <p>Venha ver todas as palavras do nosso sistema</p>
                        </div>
                        <div className="card-guides">
                            <h1>
                                Cadastrar{" "}
                                <FontAwesomeIcon icon={solid("plus")} />
                            </h1>
                            <p>Adicionar palavras ao nosso sistema</p>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}
