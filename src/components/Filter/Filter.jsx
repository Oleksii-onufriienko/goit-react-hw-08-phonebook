import React from "react";
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`;

export function Filter({ value, onChange }){
        return (
        <>
            <Label htmlFor="filter">Find contacts by name</Label>
            <input type="text" name="filter" value={value} onChange={onChange} />
        </>
        );
}