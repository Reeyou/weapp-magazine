import request from '../utils/request'

export function getArticleList(start = 0) {
  return request(`/articleList/${start}`);
}
export function getRecommendById() {
  return request('/getRecommendById');
}
export function getTagType() {
  return request('/getTagType');
}