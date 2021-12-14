import React from "react";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
function Estudiantes() {
    return (
        <PrivateRoute roleList={"LIDER"}>
            <div id="main-section">
                Student list
            </div>
        </PrivateRoute>
    );
}
export default Estudiantes;