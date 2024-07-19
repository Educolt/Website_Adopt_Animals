import styled from "styled-components";

import { CgClose } from "react-icons/cg";

export const CloseIcon = styled(CgClose)`
    position: absolute;
    top: 0;
    right: 0;
    margin: .8rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    min-width: 400px; 

    @media only screen and (max-width: 1024px) {
        min-width: 100%;
    }
`;
export const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
`;

export const ImageContainer = styled.div`
    min-width: 150px;
    max-width: 150px;
    max-height: 150px;
    min-height: 150px;
    background-color: #eb909150;
    border-radius: 50%;
    border: 1px solid #eb9091;
    transition: 500ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.6;
    }

    .hide {
  display: none;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px #eee;
  border-radius: 4px;
}

.btn-large {
  padding: 11px 19px;
  font-size: 17.5px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

#imagePreview {
    position: absolute;
  border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  width: 150px;
  height: 150px;
  object-fit: cover;

  &:hover {
    background-color: #eb909150;
  }
}
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px;
    margin: 0;
`;
export const RegisterUserForm = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

    width: 100%;
`;
export const Title = styled.label`
    font-weight: bold;
    font-size: 18px;
    color: #eb9091;
`;
export const RegisterButton = styled.button`
    width: 100%;
    height: fit-content;
    align-self: flex-end;
    padding: 10px;
    border: none;
    background-color:#eb9091;
    color: #fff;
    border-radius: 5px;
    opacity: 1;
    transition: 500ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;