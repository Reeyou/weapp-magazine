import request from '../utils/request'

export function getArticleList() {
  return request('/articleList');
}