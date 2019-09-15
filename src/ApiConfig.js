// let apiUrl
const expressPort = 3000
// const apiUrls = {
//   production: 'https://support-groups.herokuapp.com',
//   development: `http://localhost:${expressPort}`
// }

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }
import axios from "axios";
export const apiUrl = `http://localhost:${expressPort}`; 

export const onPressLike = (token, postId) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  console.log("Ima in api");
  ///posts/:id/like
  return axios
    .patch(`${apiUrl}/posts/${postId}/like`, {}, config)
    .then(res => res)
    .catch(err => err);
};

export const onLikeComment = (token, commentId) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  console.log("Ima in api");
  ///posts/:id/like
  return axios
    .patch(`${apiUrl}/comments/${commentId}/like`, {}, config)
    .then(res => res)
    .catch(err => err);
};
export const getCatagories = () => {
  return axios
    .get(`${apiUrl}/categories`)
    .then(res => res)
    .catch(error => error);
};

export const getPosts = () => {
  return axios
    .get(`${apiUrl}/posts`)
    .then(res => res)
    .catch(err => err);
};

export const signOut = token => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .delete(`${apiUrl}/sign-out`, config)
    .then(res => res)
    .catch(err => err);
};

export const loginUser = (userName, password) => {
  return axios
    .post(`${apiUrl}/sign-in`, {
      credentials: {
        username: userName,
        password: password
      }
    })
    .then(res => res)
    .catch(err => err);
};

export const regiesterUser = (userName, password, passwordConfirmation) => {
  return axios
    .post(`${apiUrl}/sign-up`, {
      credentials: {
        username: userName,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
    .then(res => res)
    .catch(err => err);
};

export const sendComment = (token, postId, data) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };

  return axios
    .post(
      `${apiUrl}/posts/${postId}/comments`,
      {
        comment: {
          content: data
        }
      },
      config
    )
    .then(res => res)
    .catch(err => err);
};

export const editPost = (token, postId, data) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .patch(
      `${apiUrl}/posts/${postId}`,
      {
        post: {
          content: data
        }
      },
      config
    )
    .then(res => res)
    .catch(err => err);
};

export const getAppPost = id => {
  return axios
    .get(`${apiUrl}/categories/${id}/posts`)
    .then(res => res)
    .catch(err => err);
};

export const deletePost = (token, post_id) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .delete(`${apiUrl}/posts/${post_id}`, config)
    .then(res => res)
    .catch(err => err);
};

export const getUserPost = (token, id) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .get(`${apiUrl}/users/${id}/posts`, config)
    .then(res => res)
    .catch(err => err);
};

export const sendPost = (token, selected, data) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .post(
      `${apiUrl}/categories/${selected}/posts`,
      {
        post: {
          content: data
        }
      },
      config
    )
    .then(res => res)
    .catch(err => err);
};

export const getAllComments = id => {
  return axios
    .get(`${apiUrl}/posts/${id}/comments`)
    .then(res => res)
    .catch(err => err);
};
