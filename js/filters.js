//检验是否为可用的手机号
function isPhoneAvailable(phoneNo) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phoneNo)) {
    return false;
  } else {
    return true;
  }
};

//检验是否合规的邮箱
function isMailAvailable(emailAddress) {
  var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
  if (regex.test(emailAddress)) {
    return true;
  } else {
    return false;
  }
};

//正则过滤html字符
function filtersHtml(val, n) {
  var thisVal;
  switch (n) {
    case '0':
      //过滤span外的html标签
      thisVal = val.replace(/<(?!\/?span)[^<>]*>/g, '');
      break;

    case '1':
      //过滤除了p、br和img之外的html标签
      thisVal = val.replace(/<(?!\/?br\/?.+?>|\/?img.+?>|\/?p.+?>)[^<>]*>/g, '')
      break;

    case '2':
      //过滤所有html标签
      thisVal = val.replace(/<\/?.+?\/?>/g, '');
      break;

    case '3':
      //过滤所有非数字字符
      thisVal = val.replace(/[^\d]/g, '');
      break;
  }
  console.log(thisVal)
  return thisVal

}

//将数组转字符串
function translateArrayToString(arr) {
  return arr.toString();
};

//将时间戳转时间
function timeFormat(timestamp) {
  function add0(m) {
    return m < 10 ? '0' + m : m;
  }
  var time = new Date(timestamp);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  return year + '-' + add0(month) + '-' + add0(date);
};

//数组截取（分页处理）
function pageFn(totalData, n) {
  var dataArr = [];
  if ((totalData / 10 - n) <= 1) {
    dataArr = totalData;
  } else {
    dataArr = totalData.slice(0, (n * 10));
  }
  return dataArr;
};

//数组排序
function compare(prop1, prop2) {
  return function (obj1, obj2) {
    var val1 = obj1[prop1][prop2];
    var val2 = obj2[prop1][prop2];
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
};

//价格格式化(保留两位小数点)
function priceFormatter(value) {
  value = value.toString();
  if (parseFloat(value) == 0) {
    return '免费获取';
  } else {
    var len = value.split('.')[1];
    if (len && len.length < 2) {
      value = value + '0';
    } else if (!len) {
      value = value + '.00';
    }
    return '￥' + value;
  }
};

// 截取字符串长度
function substringFn(value, n) {
  if (value.length > n) {
    value = value.substring(0, n) + '···';
  }
  return value;
};


function formatterNum(val) {
  /*
   * 	格式化浮点数：
   *	最少保留2位小数，不够用0补充；
   * 	最多保留4位小数
   * */
  if (!val || val == '') {
    return ''
  }
  val = val.toString();
  var float = val.split('.')[1];

  if (float) {
    if (float.length < 2 && float.length > 0) {
      var num = 2 - float.length;
      for (var n = 0; n < num; n++) {
        val += '0';
      }
    } else {
      val = parseFloat(val).toFixed(4);
      val = parseFloat(val);
    }
  } else {
    val = val + '.00';
  }

  return val
};

//格式化中英文
function pickerArrFn(pickType) {
  var pickerArr = {
    sex: [{ //性别
      label: '女',
      value: 1
    }, {
      label: '男',
      value: 2
    }],
    nation: [ //民族
      {
        label: '汉族',
        value: 0
      }, {
        label: '其他',
        value: 1
      }
    ],
  }
  //console.log(pickerArr[pickType]);
  if (!pickerArr[pickType]) {
    return false
  }
  return pickerArr[pickType]
}

function chToEn(pickType, value) {
  var thisArr = pickerArrFn(pickType)

  if (!thisArr) {
    return value
  }
  if (value !== '') {
    for (var i = 0; i < thisArr.length; i++) {
      if (value == thisArr[i].label) {
        return thisArr[i].value
      } else if (value == thisArr[i].value) {
        return thisArr[i].label
      }
    }

  } else {
    return ''
  }

}