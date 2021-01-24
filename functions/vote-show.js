const { hasuraRequest } = require('./utils/hasura-request');

const query = `
  mutation UpdateVote($id: uuid!) {
    updated: update_shows_by_pk(pk_columns: {id: $id}, _inc: {votes: 1}) {
      id
      votes
    }
  }
`;

exports.handler = async function (event) {
  let id;

  try {
    const eventBody = JSON.parse(event.body);
    id = eventBody.id;
  } catch (err) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Missing ID' })
    }
  }

  const result = await hasuraRequest({
    query,
    variables: {
      id
    }
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result)
  };
};
