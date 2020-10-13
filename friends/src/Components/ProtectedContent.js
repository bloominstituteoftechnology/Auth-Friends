import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth"

const ProtectedContent  = function() {
    return (
        <div>
            <p>This content should be inaccessable unless you have a token</p>
        </div>
    )
}

export default ProtectedContent