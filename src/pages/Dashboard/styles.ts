import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const Logo = styled.img`
    border-radius: 50%;
    object-fit: cover;
    height: 200px;
    width: 200px;
    box-shadow: -1px 5px 6px -5px #000000;
`;
export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #eb9091;
    -webkit-box-shadow: -1px 5px 6px -5px #000000; 
    box-shadow: -1px 5px 6px -5px #000000;
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const ListContainer = styled.div`
  width: 50%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const EmptyLabel = styled.ul`
  font-size: 1rem;
  margin-top: 10px;
  color: #00000070;
  font-weight: 600;
`;
