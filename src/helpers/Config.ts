export const Config = () : ConfigOptions => {
    return  {
        baseURL: 'http://localhost:8080/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`,
        },
    }
}