import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    align-items: center;
`;

const ButtonDelete = styled.button`
    height: 20px;
    margin-left: 10px;
    color: red;
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export function ContactList({ listData, delContact }){
        return (
            <ul>
                {listData.map(e => {
                return (
                    <ListItem key={e.id}>
                        <p>{e.name}: {e.phone}</p>
                        <ButtonDelete type="button" onClick={()=> delContact(e.id)}>Delete</ButtonDelete>
                    </ListItem>
                );
                })}
            </ul>
        );
}