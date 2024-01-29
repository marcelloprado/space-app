import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.aside`
    display: flex;
    align-items: center;
    width: 94px;
    height:49px;
    padding: 10px, 8px, 10px, 8px;
    border-radius: 10px;
    border: 2px;
    gap: 10px;
    margin-top: 25px;
    width: 758px;
    height: 49px;
    top: 576px;
    left: 260px;
`

const TituloTag = styled.h3`
    width: 219px;
    height: 29px;
    top: 586px;
    left: 260px;
    font-family: Gandhi Sans;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #D9D9D9;
    margin: 0;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
    border-color: #C98CF1;
    }
    `

const Tags = ({ setTag }) => {
    return <>
        <TagContainer>
            <TituloTag>Busque por tags:</TituloTag>
            {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
        </TagContainer>
    </>


}

export default Tags;