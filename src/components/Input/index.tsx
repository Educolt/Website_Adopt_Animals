import { 
    Container,
    Label,
    InputContainer
} from './styles'

export const Input = ({...rest}): JSX.Element => {
    return (
        <Container>
            <Label>{rest.label}</Label>
            <InputContainer {...rest} />
        </Container>
    )
}