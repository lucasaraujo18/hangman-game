import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuidesComponent } from "../pages/guides";
import { NavbarHang } from "../pages/navbar";
import { Play } from "../pages/play";

export function RoutesHangman() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavbarHang />}>
                    <Route index element={<GuidesComponent />} />
                    <Route
                        path="play"
                        element={<Play title="Jogar forca - " />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
