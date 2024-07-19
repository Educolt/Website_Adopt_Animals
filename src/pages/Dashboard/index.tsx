// React hooks
import { useState, useEffect } from 'react';
import { 
    useNavigate,
    useLocation,
} from 'react-router-dom'

// styled-components
import { Container, EmptyLabel, HeaderContainer, ListContainer, Wrapper } from './styles'

// app components
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'

import { RegisterAnimalModal } from '../../components/RegisterAnimalModal';
import { api } from '../../services/api';

export const Dashboard = () => {

    // list of pets and modal state
    const [list, setList] = useState([{} as any]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const loadPets = async () => {
        const res = await api.get('/animal/show');
        setList([...res.data])
        console.log(res)
    }

    useEffect(() => {
      loadPets()
    }, [])
    

    // handle register pet button click event
    const handleClick = () => {
        // toggle modal state
        setModalIsOpen(!modalIsOpen);
    }


    return (
        <Container>
            <HeaderContainer>
                <Wrapper>
                    <Header callback={handleClick} />
                </Wrapper>
            </HeaderContainer>
            <ListContainer>
                    {list.length < 0 ? (
                        <>
                            <EmptyLabel>Nenhum animal cadastrado !</EmptyLabel>
                        </>
                    ): (
                        <>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>
                        <Card key={12} data={{}}/>

                        {/* {list.map((animal: any) => (<Card key={animal.id} data={animal}/>))} */}
                        </>
                    )}
            </ListContainer>
            <RegisterAnimalModal modalIsOpen={modalIsOpen} callback={handleClick} />
        </Container>
    )
}