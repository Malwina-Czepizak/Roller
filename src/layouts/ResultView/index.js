//Powinien składać się z:
//1. Element "DiceGenerator"
//2. Element do wyśiwtelania wyników
//3. Btn Save - odpala widok SaveResults
//4. Btn Clear - czyści element z wyświetlonych wyników

import React from "react";
import "./ResultView.scss";
import ShowResult from "../../components/ResultView/ShowResult";
import SaveButton from "../../components/ResultView/SaveButton";
import ClearButton from "../../components/ResultView/ClearButton";

export default function ResultView() {
    return (
        <>
            <ShowResult />
            <SaveButton />
            <ClearButton />
        </>
    )
}