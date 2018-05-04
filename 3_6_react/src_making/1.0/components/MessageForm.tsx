import * as React from 'react';
import { postMessage, Message } from '../client';
import Axios, { CancelTokenSource } from 'axios';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

interface MessageFormProps {
    channelName: string;
    setShouldReload: (shouldReload: boolean) => void;
}

interface MessageFormState {
    body?: string;
}

export class MessageForm extends React.Component<MessageFormProps, MessageFormState> {

    private cancelTokenSource: CancelTokenSource;

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

        this.cancelTokenSource = Axios.CancelToken.source();
        postMessage(this.props.channelName, payload, this.cancelTokenSource.token)
            .then(() => {
                this.setState({ body: '' });
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                this.props.setShouldReload(true);
            });
    }

    public componentWillUnmount() {
        if (this.cancelTokenSource) {
            this.cancelTokenSource.cancel();
        }
        this.props.setShouldReload(false);
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
                    <Button primary type='submit'>Send</Button>
                </Form>
            </Segment>
        );
    }
}
