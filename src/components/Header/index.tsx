//@types
import { IHeaderProps } from '../../@types';

// styled-components
import { 
    Container, 
    NavMenu,
    LogoBtnContainer, 
    Logo, 
    RegisterButton,
    AddIcon
} from "./styles";

import { useAuth } from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = ({callback}:IHeaderProps):JSX.Element => {

    // hooks
    let navigate = useNavigate();
    let location = useLocation();
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
        navigate( location.state?.from?.pathname || "/",{replace: true})
    }

    return (
        <Container>
            <NavMenu>
                <LogoBtnContainer>
                    <Logo src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhERBxIWFhUXFhgXFRgVGBgVGhUbFh0dHxkaGhgYHyggGhslHhgYLTIkJSkvOjo6HR8/OzMwNzQvLisBCgoKDg0OGxAQGi0lHiY1LS0tLS0tLS0tLS0tLSsvNS0tLS0tLS0rLS0tLS0tLS0tLS0rLS0tLS0tLS0vLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEMQAAIBAwIDBQUDCAcJAAAAAAECAAMEEQUSBiExEyJBUWEHFEJxgRUjMjZSYnKSobGzFiQzQ3ORohc3U2N0goOTsv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJREBAQACAQQCAAcAAAAAAAAAAAECESEDEjFBBFETIjJhcYGR/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETxXrLb0WeuwVVBLMxACgcyST0Age4kCnEoZkdreqtB3WmtZgqglyAjdmT2gRmIUEqOZHLHek9G1s0REQhERAREQEREBERAREQEREBERAREQEREBERAREQExXVylnbPUumCoilmZjgKFGSSfLEyytq1TimopANOzVg3PG+6ZGyOX93RDLzB7zEYIVfxxZGwmqXd8obTbTah6NdVOxJHmKaK7j5PtPoJ8bSbjUrhDrtSk1JCHFGkjAM4PdNRmY71XqF2jngnOBJ2I0b+kJxs3Z8IXrL1ShUdf1kUsp/zAk3NHXLD7U0W4oBtpq0nQN12l1IB+hM+6LffaelUqzLtLL3l67GHJ1+jAj6R7PTdiIlQiJD6/r9PR6RGN9QIX27goVB1qVHPKnTHnzJwQoY8oWTfhMRIPg/WamuaP2l9TFOqHZXQZwvRk688lGQn5mTkku+Syy6pETDd3NOztmqXbqiKMszEKFA8ST0lRmiRuna5b6jcGnbFw+0sBUp1KRZQQCydoq71BZea56jzEkoLNEREBERAREQEREBERAREQEREBK1p18nDz1LfVT2amtVejVblScV6jPtL/hSoGcrtbGcAjPPFlnl0FRCKgBBGCDz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" />
                </LogoBtnContainer>
                <RegisterButton type="button" onClick={callback}> <AddIcon size={20} color='#eb9091'/>Novo cadastro</RegisterButton>
            </NavMenu>
        </Container>
    )
}