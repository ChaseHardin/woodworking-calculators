import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';
import './cut-details-form.css';

export const CutDetailsForm = () => {
    const [details, setDetails] = useState({});

    const handleOnChange = (e) => {
        setDetails({
            boardLength: e.target.value
        });
    };

    return (
        <React.Fragment>
            <div data-testid={'results'}>
                {details.boardLength}
            </div>
            <Form data-testid={'cut-details-form'}>
                <InputFormGroup label='Length of Board' placeholder='Length of board before cutting' onChange={handleOnChange}/>
                <InputFormGroup label='Boards' placeholder='Number of boards after cutting' />
                <InputFormGroup label='Blade Width' placeholder='Width of blade' />
            </Form>
        </React.Fragment>
    )
}