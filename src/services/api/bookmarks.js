const BASE_URL = "http://bookmarks-api";
const API_URL = `${BASE_URL}/api`;

function fetchAllBookmarks(page) {
  return fetch(`${API_URL}/bookmarks?page=${page}`).then((response) =>
    response.json()
  );
}

function fetchBookmark(id) {
  return fetch(`${API_URL}/bookmarks/${id}`).then((response) =>
    response.json()
  );
}

function avatarUrl(userId) {
  return `${API_URL}/users/${userId}/avatar`;
}

export { fetchAllBookmarks, fetchBookmark, avatarUrl };
