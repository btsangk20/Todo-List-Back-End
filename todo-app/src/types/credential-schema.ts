import {SchemaObject} from '@loopback/rest';

export const CredentialsSchema: SchemaObject = {
  type: 'object',
  required: ['userName', 'password'],
  properties: {
    userName: {
      type: 'string',
    },
    password: {
      type: 'string',
      minLength: 6,
    },
  },
};

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  },
};
