import * as React from 'react';
import { postMessage, Message } from '../client';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

const baseUrl = 'https://react-sample-app-84674.firebaseio.com/';

interface MessageFormProps {
    channelName: string;
}

interface MessageFormState {
    body?: string;
}

export class MessageForm extends React.Component<MessageFormProps, MessageFormState> {

    constructor(props: MessageFormProps) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    private handleTextAreaChange(event: React.FormEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        this.setState({ body: event.currentTarget.value });
    }

    private handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const payload = {
            body: this.state.body,
            user: {
                id: '123',
                name: 'iktakahiro'
            }
        } as Message;
        postMessage(this.props.channelName, payload)
            .then(() => {
                this.setState({ body: '' });
            })
            .catch(err => {
                console.log(err);
            });
    }

    public render() {
        return (
            <Segment basic textAlign='center'>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <TextArea
                            autoHeight
                            placeholder='Write your message'
                            value={this.state.body}
                            onChange={this.handleTextAreaChange} />
                    </Form.Field>
                    <p>入力中の値: {this.state.body}</p>
                    <Button primary type='submit'>Send</Button>
                </Form>
            </Segment>
        );
    }
}
