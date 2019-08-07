import request from '../utils/request'

export function searchRecommend(word) {
  return request(`/searchRecomemnd/${word}`);
}
export function searchArticleList(word, start = 0) {
  return request(`/searchArticleList/${word}/${start}`);
}
