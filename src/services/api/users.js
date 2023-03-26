const BASE_URL = "http://bookmarks-api";
const API_URL = `${BASE_URL}/api`;

function fetchAllUsers() {
  return fetch(`${API_URL}/users`).then((response) => response.json());
}

function fetchUser(id) {
  return fetch(`${API_URL}/users/${id}`).then((response) => response.json());
}

function fetchMeUser() {
  return fetch(`${API_URL}/me`, { credentials: "include" }).then((response) =>
    response.json()
  );
}

function fetchLogoutUser() {
  return fetch(`${API_URL}/logout`, { credentials: "include" }).then(
    (response) => response.json()
  );
}

export { fetchAllUsers, fetchUser, fetchMeUser, fetchLogoutUser };
