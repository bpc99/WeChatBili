export const ipconfig = 'localhost';

export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const decideStatus = (res, success, failed) => {
  if (res.data.errorNo === 1) {
    success(res.data.response);
  } else if (res.data.errorNo === 0) {
    failed(res.data.errorMsg);
  } else {
    throw Error('后台服务异常')
  }
}
