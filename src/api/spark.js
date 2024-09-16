import request from '@/api/request'

const base = '/spark'

/*spark 统计*/
//第三幅图
export function dash1() {
  return request({
    url: base + '/dash1',
    method: 'get'
  })
}

export function dash2() {
  return request({
    url: base + '/dash2',
    method: 'get'
  })
}

//获取歌曲播放次数最多的前几首歌
export function playcnt() {
  return request({
    url: base + '/playcnt',
    method: 'get'
  })
}

//用于获取用户来源、省份
export function provinces() {
  return request({
    url: base + '/provinces',
    method: 'get'
  })
}

/* 登录流量 */
export function logins() {
  return request({
    url: base + '/logins',
    method: 'get'
  })
}

//最后一个图，播放统计图
export function plays() {
  return request({
    url: base + '/plays',
    method: 'get'
  })
}

//获取歌手top5
export function top5singers() {
  return request({
    url: base + '/top5singers',
    method: 'get'
  })
}

//获取cpu
export function getcup() {
  return request({
    url: base + '/getcup',
    method: 'get'
  })
}

