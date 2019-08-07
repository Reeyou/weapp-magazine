import request from '../utils/request'

export function searchRecommend(word) {
  return request(`/searchRecommend?searchWord=${word}`);
}
export function searchArticleList(word, start = 0) {
  return request(`/getArticleListByWord?searchWord=${word}/${start}`);
}
