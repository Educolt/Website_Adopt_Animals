import styled from 'styled-components';

import { GoPlus } from "react-icons/go";

export const AddIcon = styled(GoPlus)``;

export const Container = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px;
`;
export const LogoBtnContainer = styled.button`
    background: transparent;
    outline: none;
    border: none;
    width: fit-content;
    height: fit-content;
`;
export const NavMenu = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.img`
    border-radius: 50%;
    object-fit: cover;
    height: 50px;
    width: 50px;
    box-shadow: -1px 5px 6px -5px #000000;
`;
export const RegisterButton = styled.button`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: bold;
    background-color: #ffffff;
    color: #eb9091;
    box-shadow: -1px 5px 6px -5px #000000;

    transition: 500ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;