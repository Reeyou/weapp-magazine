import request from '../utils/request'

export function getArticleList(start = 0, magazineId = 1) {
  return request(`/articleList/${start}/${magazineId}`);
}
export function getRecommendById(magazineId = 1) {
  return request(`/getRecommendById/${magazineId}`);
}
export function getTagType(magazineId = 1) {
  return request(`/getTagType/${magazineId}`);
}