const { hasuraRequest } = require('./utils/hasura-request');

const query = `
  query MyQuery {
    shows {
      description
      id
      logo
      votes
      title
    }
  }
`;

exports.handler = async function () {
  const result = await hasuraRequest({
    query
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result)
  };
};
