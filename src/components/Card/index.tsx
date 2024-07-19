// styled-components
import { 
    Container, 
    Wrapper, 
    UserInfo, 
    Name,
    CreatedAt,
    ButtonExcludeContainer,
    CloseIcon,
    CatIcon,
    DogIcon,
    Age,
    Description,
    ImageContainer,
    Status,
    ImageWrapper
} from './styles';


// import api service
import { api } from '../../services/api';
import { useState } from 'react';

import CelesteImg from '../../assets/celeste.jpg'

export const Card = ({...rest}): JSX.Element => {

    const [status, setStatus] = useState(true);

    // handle exclude user button click event
    const handleExcludeUserClick = async () => {
        try {
            await api.delete(`/animal/${rest.data.id}`) 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <ImageContainer src={CelesteImg} />
                    {!status ? (
                        <Status className='available'>
                        Disponivel
                    </Status>
                    ) : (
                        <Status>
                        Adotado
                    </Status>
                    )}
                </ImageWrapper>
                <UserInfo>
                    <Name>
                        Nick
                        <DogIcon color='#eb9091' size={20}/> 
                    </Name>
                    <Age>
                        14 anos
                    </Age>
                    <Description>
                        daksdjnasdjnaksdjnaksdjnaksjdn
                    </Description>
                    <CreatedAt>
                        
                        <strong>
                        {
                            new Date(Date.now()).toDateString()
                        } 
                        </strong>

                        <div style={{display: 'flex', alignItems: 'baseline', gap: '.2rem'}}>
                            <input type="checkbox" id="status" name="status" checked={status}  onClick={() => setStatus(!status)}/>
                            <label htmlFor="scales">Mudar status</label>
                        </div>
                    </CreatedAt>
                </UserInfo>
            </Wrapper>
            <ButtonExcludeContainer onClick={() => handleExcludeUserClick()}>
                <CloseIcon color='#eb9091' size={20}/> 
            </ButtonExcludeContainer>
        </Container>
    )
}