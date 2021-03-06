class Api {
  constructor(options) {
    this._url = options.url;
    this._key = options.key;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  // get data from server
  getUserInfo() {
    return fetch(`${this._url}users/me/`, {
      method: 'GET',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  // get data user from server
  getDataCards() {
    return fetch(`${this._url}cards/`, {
      method: 'GET',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  // patch data user avatar from server
  patchUserAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: data.avatar
      }),
    }).then(this._checkResponse);
  }

  // patch data user from server
  patchUserInfo(data) {
    return fetch(`${this._url}users/me/`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }

  // post data user by server
  postDataCard(data) {
    return fetch(`${this._url}cards/`, {
      method: 'POST',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    }).then(this._checkResponse);
  }

  // delete card from server
  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  // put and delete like by server
  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: `${this._key}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  key: '5ba9e6d0-bea2-43fd-97e6-f314993d4839'
}

const api = new Api(config);
export default api;