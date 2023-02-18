const { Form, Label, Input, Button } = require('./ContactForm.styled');

const ContactForm = ({onSubmit,onChange, name, number}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Label>
            Name
                <Input
                    onChange={onChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>
            Number
                <Input
                    onChange={onChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <Button type='submit'>Add contact</Button>
        </Form>
    );
};


export default ContactForm;
