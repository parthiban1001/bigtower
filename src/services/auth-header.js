export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('Token'));

    if (token && token.access_token) {
        // for Spring Boot back-end //
        return { Authorization: 'Bearer ' + token.access_token };
        // for Node.js Express back-end //
        // return { 'x-access-token': token.access_token };
    } else {
        return {};
    }
}
