export const time = (x) => {
  return x + 1
}

/**

 * @param format
 * @param currDate
 * @returns
 * 转换时间格式
 */
export const formatDate = function (format, currDate) {
  /*
   * eg:format="yyyy-MM-dd hh:mm:ss";
   */
  var o = {
    'M+': currDate.getMonth() + 1, // month
    'd+': currDate.getDate(), // day
    'h+': currDate.getHours(), // hour
    'm+': currDate.getMinutes(), // minute
    's+': currDate.getSeconds(), // second
    'q+': Math.floor((currDate.getMonth() + 3) / 3), // quarter
    'S': currDate.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (currDate.getFullYear() + '')
      .substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k]
        : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

export const replaceAllJson = function (str) {
  if (str != null) str = str.replace(/&quot;/g, '"')
  let dataJson = JSON.parse(str)
  return dataJson
}

// 数组转为对象 函数
export const _object = function (list, values) {
  var result = {}
  for (var i = 0; i < list.length; i++) {
    if (values) {
      result[list[i]] = values[i]
    } else {
      result[list[i][0]] = list[i][1]
    }
  }
  return result
}
