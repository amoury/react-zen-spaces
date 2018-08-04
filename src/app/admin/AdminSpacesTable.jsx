import React from "react";
import { Table, Header, Rating, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const AdminSpacesTable = ({ spaces, deleteSpace }) => {
  if (! spaces ) return 'loading...';
  
  const spacesRows = spaces.map(space => (
    <Table.Row key={space.id}>
      <Table.Cell>
        <Header as="h2">{space.header}</Header>
      </Table.Cell>
      <Table.Cell>{space.location}</Table.Cell>
      <Table.Cell>
        <Rating icon="star" rating={space.rating} maxRating={5} />
      </Table.Cell>
      <Table.Cell>
        <Button content="Edit" primary as={Link} to={`/admin/spaces/edit/${space.id}`} />
      </Table.Cell>
      <Table.Cell>
        <Button color="red" onClick={() => deleteSpace(space.id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table celled padded textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Space Name</Table.HeaderCell>
          <Table.HeaderCell>Space Location</Table.HeaderCell>
          <Table.HeaderCell>Reviews</Table.HeaderCell>
          <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {spacesRows}
      </Table.Body>
    </Table>
  );
};

export default AdminSpacesTable;
