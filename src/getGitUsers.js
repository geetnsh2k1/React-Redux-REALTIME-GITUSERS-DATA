import axios from 'axios'

async function fetch() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
}

export default fetch