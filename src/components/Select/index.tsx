import { forwardRef } from 'react';

import styled from "styled-components";
import { Label } from '../Input/styles';

const Container = styled.select`
    width: 100%;
    border: 1px solid #eb9091;
    border-radius: 5px;
    outline-color: #eb9091;

    padding-block: 5px;
    font-size: .9rem;
    font-weight: 400;
    border-radius: 8px;
    transition: border-color .5s ease-in-out, box-shadow .15s ease-in-out;
    color: #6d6d6d;

    &:focus {
        border-color: #eb9091;
    }

    &:disabled {
        opacity: .5;
    }

    &::placeholder {
        font-weight: 400;
        color: #6d6d6d;
    }

    option {
        color: var(--lightgray);
        background: var(--lightdark);
    }
`;

const CompContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .1rem;
`;

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
    label: string;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, ISelect> = ({ children, label ,...props }, ref) => {
    return (
        <CompContainer>
            <Label>{label}</Label>
            <Container {...props} ref={ref}>
                
                {children}
            </Container>
        </CompContainer>
        
    );
}

export default forwardRef(Select);