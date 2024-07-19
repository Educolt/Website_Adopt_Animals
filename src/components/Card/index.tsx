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
    ImageWrapper,
    PetIcon,
    IconContainer
} from './styles';


// import api service
import { api } from '../../services/api';
import { useState } from 'react';

export const Card = ({...rest}): JSX.Element => {

    const [status, setStatus] = useState(rest.data.status);
        

    // handle exclude user button click event
    const handleExcludeUserClick = async () => {
       /*  try {
            await api.delete(`/animal/${rest.data.id}`) 
        } catch (error) {
            console.log(error);
        } */
    }

    const handleUpdateStatus = async () => {
        try {
            const res = await api.put(`/animal/status/${rest.data.id}`, {
                status: !status
            });

            setStatus(res.data.status)
            await rest.callback();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    {rest.data.imageUrl === "" ? (
                        <IconContainer>
                            <PetIcon color='#eb9091' size={32}/>
                        </IconContainer>
                    ) : <ImageContainer src={rest.data.imageUrl} />}
                    
                    {rest.data.status ? (
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
                        {rest.data.name}
                        {rest.data.category === "dog" && <DogIcon color='#eb9091' size={20}/> }
                        {rest.data.category === "cat" && <CatIcon color='#eb9091' size={20}/> }
                    </Name>
                    <Age>
                    {rest.data.age} anos
                    </Age>
                    <Description>
                        {rest.data.description}
                    </Description>
                    <CreatedAt>
                        
                        <strong>
                        {
                            new Date(rest.data.bornAt).toLocaleDateString("pt-Br")
                        } 
                        </strong>

                        <div style={{display: 'flex', alignItems: 'baseline', gap: '.2rem'}}>
                            <input type="checkbox" id="status" name="status" checked={status}  onClick={() => {
                                handleUpdateStatus();
                            }}/>
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