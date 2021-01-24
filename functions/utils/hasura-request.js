const axios = require('axios');

exports.hasuraRequest = async function ({ query, variables }) {
  let response;

  try {
    response = await axios({
      method: 'post',
      url: process.env.HASURA_GRAPHQL_ENDPOINT,
      headers: {
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET
      },
      data: { query, variables }
    });
  } catch (err) {
    console.error('Hasura request failed:', err);
    return [];
  }

  console.log('Hasura Request successful', query);
  return response.data;
};
