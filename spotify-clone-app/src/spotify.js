export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "0f02a33a4da34a31bcb7fcdfba0b1267";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
];

export const getTokenUrl= () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        var parts = item.split("=");    
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;