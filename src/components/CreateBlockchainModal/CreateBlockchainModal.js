import * as React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Header,
    Modal,
    Form,
} from 'semantic-ui-react'

class CreateBlockchainModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: props.open,
            formState: {
                name: '',
                error: false,
            }
        }
    }

    close = () => this.setState({ open: false })
    open = () => this.setState({ open: true, formState: { name: '', error: false, } })

    handleChange = (e, { name, value }) => this.setState({ formState: { [name]: value } })

    handleSubmit = () => {
        const { name } = this.state.formState;

        if (name.length === 0) {
            this.setState(({ formState }) => ({ formState: { ...formState, error: true } }));
            return;
        }

        this.props.handleCreateBlockchain({
            blockchainName: name,
        });

        this.close();
    }

    renderForm = () => {
        const { formState } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Blockchain name</label>
                    <Form.Input
                        placeholder='Name'
                        name='name'
                        value={formState.name}
                        error={formState.error}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }

    renderTrigger = () => (
        <Button onClick={this.open}>Create Blockchain</Button>
    )

    render() {
        return (
            <Modal
                trigger={this.renderTrigger()}
                closeIcon
                open={this.state.open}
                onClose={this.close}
            >
                <Header icon='chain' content='Create new Blockchain instance' />
                <Modal.Content>
                    {this.renderForm()}
                </Modal.Content>
            </Modal>
        );
    }
}

CreateBlockchainModal.propTypes = {
    handleCreateBlockchain: PropTypes.func.isRequired,
};

export default CreateBlockchainModal;