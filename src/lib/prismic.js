import * as prismic from '@prismicio/client';

const endpoint = prismic.getEndpoint('jakeord');
export default prismic.createClient(endpoint);
