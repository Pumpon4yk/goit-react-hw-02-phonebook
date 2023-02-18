const { Container,Label, Input, List, Item, PhoneNumber, ButtonDelete  } = require("./Contacts.styled")



const Contacts = ({contacts,  remove, filter, onChange}) => {
    return(
        <Container>
        <Label>
        Find contacts by name
        <Input value={filter} onChange={onChange}/>
        </Label>
        
        <List>
            {contacts.map(({id, name, number}) => (
                <Item key={id}>
                {name}:
                <PhoneNumber>{number}</PhoneNumber>
                <ButtonDelete id={id} onClick={remove}>Delete</ButtonDelete>
            </Item>))}
        </List>

        </Container>
    )
}

export default Contacts