import React from "react";
import { Link } from "react-router-dom";        // 1-10
import { Query } from "react-apollo";           // 1-10
import styled from "styled-components";         // 1-10
import MarkdownRenderer from "react-markdown-renderer"; // 1-10
import { GET_NOTE } from "../../queries";       // 1-10

// 1-8 
/*
export default class Note extends React.Component {
    render() {
        return "hi";
    }
}
*/

// 1-10
const TitleComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`;

const Title = styled.h1`
    font-size: 50px;
    margin: 0px;
    padding: 0px;
`;

const Button = styled.button``;

export default class Note extends React.Component {
    render() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        return (
            <Query query={GET_NOTE} variables={{ id }}>
                {({ data }) => 
                data.note ? (
                    <>
                        <TitleComponent>
                            <Title>{data.note && data.note.title}</Title>
                            <Link to={`/edit/${data.note.id}`}>
                                <Button>Edit</Button>
                            </Link>
                        </TitleComponent>
                        <MarkdownRenderer markdown={data.note.content}/>
                    </>

                ) : null
            }
            </Query>
        );
    }
}