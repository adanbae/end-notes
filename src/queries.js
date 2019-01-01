import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./fragments"; // 1-10

// 1-7
/*
export const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      content
    }
  }
`;
*/
// 1-10
export const GET_NOTES = gql`
  {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const GET_NOTE = gql`
  query getNote($id: Int!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;