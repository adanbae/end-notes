import gql from "graphql-tag";

// 1-7
export const NOTE_FRAGMENT = gql`
    fragment NoteParts on Note {
        id
        title
        content
    }
`;
