import { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {

        state = {
            name: '',
            number: '',
        };


    resetForm = () => {
        this.setState(() => ({
            name: '',
            number: '',
        }));
    };

    onChangInput = e => {
        this.setState(() =>
            e.target.name === 'name'
                ? { name: e.target.value }
                : { number: e.target.value }
        );
    };

    submitForm = e => {
        e.preventDefault();

        const {contacts, setContact} = this.props;
        const {
            name: { value: name },
            number: { value: number },
        } = e.currentTarget.elements;

        if (
            contacts.some(
                e => e.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            return alert(`${name} is already in contacts`);
        }

        setContact({ name, number });
        this.resetForm();
    };

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.submitForm}>
                <Label>
                    Name
                    <Input
                        onChange={this.onChangInput}
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
                        onChange={this.onChangInput}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
};


ContactForm.propTypes ={
            contacts: PropTypes.array.isRequired,
            setContact: PropTypes.func.isRequired,
}

export default ContactForm;
