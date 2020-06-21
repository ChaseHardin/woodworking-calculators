import React from 'react';
import './cut-details.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';
import {ViewContext} from '../../contexts/view-context';
import { ResultsTable } from '../results/results-table';
import { BoardLengthView } from '../views/board-length-view';

export const CutDetails = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);
    const {view} = React.useContext(ViewContext);

    const showResults = cutDetails.board.ft || cutDetails.board.in || cutDetails.board.fr;

    return (
        <div>
            {view.board && <BoardLengthView />}
            {showResults && <ResultsTable cutDetails={cutDetails} />}
        </div>
    )
};
