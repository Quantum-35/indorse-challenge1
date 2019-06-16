import axios from 'axios';

import { FETCH_ARTICLE, FETCH_SUCCESS, FETCH_FAILURE } from './constant';

export const fetchArticle = () => ({ type: FETCH_ARTICLE });

// eslint-disable-next-line
export const articleFectSuccsess = payload => ({ type: FETCH_SUCCESS, payload: payload.data.article.article });

export const articleFectFailure = error => ({ type: FETCH_FAILURE, error });

export const fetchArticles = slug => (dispatch) => {
  dispatch(fetchArticle());
  axios.get(`${BACKEND_URL}api/articles/${slug}`)
    .then((res) => {
      dispatch(articleFectSuccsess(res));
    })
    .catch(err => dispatch(articleFectFailure(err)));
};