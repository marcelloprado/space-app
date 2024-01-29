import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from './fotos-populares.json';


const ColunaFotos = styled.section`
    display: flex;
    flex-Direction: column;
    gap: 20px;
    
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
    height: 158px;
    margin-left: 24px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #FFF;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    margin-left: 30px;
    width: 200px;
    height: 50px;
    
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )

}

export default Populares;