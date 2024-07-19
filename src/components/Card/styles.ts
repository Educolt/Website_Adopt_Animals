import styled from 'styled-components';

import { CgClose } from "react-icons/cg";
import { FaCat, FaDog } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export const PetIcon = styled(MdOutlinePets)`

    &:hover {
        opacity: 0.8;
    }
`;

export const IconContainer = styled.div`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 1px solid #d2d2d2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const CloseIcon = styled(CgClose)`
    position: relative;
    top: -10px;
    right: -10px;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
        opacity: 0.8;
    }
`;
export const CatIcon = styled(FaCat)`
    position: relative;
    top: 0;
    left: 0px;
`;

export const DogIcon = styled(FaDog)`
    position: relative;
    top: 0;
    left: 0px;
`;

export const Container = styled.div`
    width: 100%;
    background-color: white;
    color: #028ed2;
    font-weight: bold;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 9px 47px -10px rgba(0,0,0,0.51);
    margin-bottom: 5px;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    gap: .5rem;
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
    margin-top: 5px;
`;
export const Name = styled.strong`
    color: #5d5d5d;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: .2rem;
`;
export const Age = styled.strong`
    color: #5d5d5d80;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: .2rem;
`;

export const Status = styled.strong`
    color: #fff;
    background-color: #5d5d5d80;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
    padding: 4px;
    margin-right: 5px;

    &.available {
        background-color: green;
    }
`;
export const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #d2d2d2;
    object-fit: cover;
    margin-right: 10px;
    transition: 500ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;
export const CreatedAt = styled.span`
    color: #7b7c7c;
    font-size: 10px;
    display: flex;
    align-items: baseline;
    gap: 1rem;

    strong {
        color: #9ac840;
    }

    #status {
        background-color: #9ac840;
    }
`;
export const Description = styled.span`
    font-size: 12px;
    color: #7b7c7c;
    margin-top: 5px;
`;
export const ButtonExcludeContainer = styled.button`
    border: none;
    background: transparent;
`;
export const Icon = styled.img`
    
`;