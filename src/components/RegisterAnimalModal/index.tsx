// import dependencies
import Modal from 'react-modal';
import { FormEvent, useState, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// styled-components
import { 
    Container,
    RegisterUserForm,
    RegisterButton,
    CloseIcon,
    Title,
    ModalHeader,
    Row,
    ImageContainer
} from './styles'
// app components
import { Input } from '../../components/Input';

//@types
import { IModalProps } from '../../@types';

// import service api
import { api } from '../../services/api';

// app hook
import { useAuth } from '../../hooks/useAuth';
import Select from '../Select';
import { AddIcon } from '../Header/styles';

Modal.setAppElement("#root");

export const RegisterAnimalModal = ({modalIsOpen, callback}: IModalProps): JSX.Element => {

    // form input states
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const today = new Date();
    const lastYear = new Date(today.setFullYear(today.getFullYear() - 1));
    const maxDate = lastYear.toISOString().split("T")[0];
    const [category, setCategory] = useState("");

    const [date, setDate] = useState("");
    const [getLogo, setLogo] = useState<string>("");
    const [getLogoToSend, setLogoToSend] = useState<any>();
    const [getLogoName, setLogoName] = useState<string>("");

    function calculateAge(bornAt: string) {
        const birthDate = new Date(bornAt);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    
        return age;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = {
            name,
            description,
            bornAt: new Date(date),
            age: calculateAge(date),
            category,
            status: true,
            imageUrl: "",
        }

        if((description === '' || date === '') || (name === '' || category === '')) {
            console.log("Por favor preencha todos os campos.");
            toast.warning("Por favor preencha todos os campos !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }

        const res = await api.post('/animal/register',data);
        const id = res.data.id;

        await uploadAnimalProfile(id, getLogoToSend)
        callback();
    }

    async function uploadAnimalProfile(id: string, file: any) {
        const formData = new FormData();
        
        formData.append('animalProfile', file);
        
        try {
            const response = await api.post(`/animal/upload/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
        }
    }

    const onLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          setLogoToSend(img)
        }
      };


    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={callback}
            overlayClassName='react-modal-overlay'
            className="react-modal-content"
        >
            <ToastContainer />
            <Container>
                <ModalHeader>
                    <Title>
                        Cadastrar novo pet
                    </Title>
                    <CloseIcon color='#eb9091' size={20} onClick={callback}/> 
                </ModalHeader>
                <RegisterUserForm onSubmit={handleSubmit}>
                    <Row>
                        <ImageContainer className='dashed'>
                            {getLogo ? (
                                <>
                                 <img src={getLogo} id="imagePreview" alt="Preview Image" className={getLogo ? "" : "hide"} />
                                 <label style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                width: "100%",
                                height: "150px",
                                borderRadius: "50%",
                                zIndex: 1
                            }} htmlFor="uploadImage" className="btn btn-large"></label>
                                 <input type="file" accept="image/*" name="uploadImage" id="uploadImage" className="hide" onChange={onLogoChange} />
                                </>
                            ): (
                                <>
                                <label style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                width: "100%",
                                height: "150px",
                                borderRadius: "50%"
                            }} htmlFor="uploadImage" className="btn btn-large"><AddIcon size={32} color='#eb9091'/></label>
                            <input type="file" accept="image/*" name="uploadImage" id="uploadImage" className="hide" onChange={onLogoChange} />
                                </>
                            )}
                        </ImageContainer>
                    </Row>
                    <Input 
                        label="Nome completo" 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        placeholder="Digite o nome completo do pet."
                    />
                    <Input 
                        label="Descrição" 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                        placeholder="Digite a descrição do pet."
                    />

                    <Select
                        label='Selecione a categoria do pet.'
                        value={category}
                        onChange={(event:any) => setCategory(event.target.value)}
                        >
                        <option value="" disabled>
                            (selecionar)
                        </option>
                        <option value="cat">Gato</option>
                        <option value="dog">Cachorro</option>
                    </Select>

                    <Input
                        placeholder={"Data de nascimento"}
                        label="Data de nascimento" 
                        type="date"
                        name="data_de_nascimento"
                        max={maxDate}
                        value={date}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
                    />
                    <RegisterButton type="submit">
                    Cadastrar
                    </RegisterButton>
                </RegisterUserForm>
            </Container>
        </Modal>
    )
}