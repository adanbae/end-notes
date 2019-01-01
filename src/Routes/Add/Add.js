import React from "react";
import { Mutation } from "react-apollo";        // 1-11
import gql from "graphql-tag";                  // 1-11
import Editor from "../../Components/Editor";   // 1-11

// 1-8
/*
export default class Add extends React.Component {
    render() {
        return "hi";
    }
}
*/

// 1-11
const ADD_NOTE = gql`
    mutation createNote($title: String!, $content: String!) @client {
        createNote(title: $title, content: $content) {
            id
        }
    }
`;

export default class Add extends React.Component {
    render() {
        return (
            <Mutation mutation={ADD_NOTE}>
              {createNote => {
                this.createNote = createNote;
                return <Editor onSave={this._onSave} />;
              }}
            </Mutation>
          );
    }
    _onSave = (title, content) => {
        const {
            history: { push }
        } = this.props;
        if(title !== "" && content !== "") {
            this.createNote({ variables: {title, content } });
            push("/");
        }
    };
}