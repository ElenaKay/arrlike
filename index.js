
function isBase10Int_fast(str) {
  return (str >= 0 || str < 0) &&
    (str|0)+"" === str;
}

var has = function() {
  var H = {}.hasOwnProperty;
  return (function(o,n) {
    return H.call(o,n);
  });
}();

function isArrLikePure(a, mustHaveLength) {
  if (!a) return false;
  var length = mustHaveLength ? a.length : pseudoLength(a);
  if ((length > 0 || length <= 0) && (length|0) === length) {
    var n = "", l = 0;
    for (n in a) {
      if (has(a,n)) {
        if (!isBase10Int_fast(n) || n < 0 || n >= length)
          return false;
        l++;
      }
    }
    return l === length;
  }
  return false;
}

function isArrLikeLoose(a) {
  var len = pseudoLength(a);
  if (a < 0)
    return false;

  var n = "";
  for (n in a) {
    if (has(a,n)) {
      if (n >= len)
        return false;
    }
  }
  return true;
}

function pseudoLength(a) {
  if (!a)
    return -1;

  var len = 0;

  while (true) {
    if (!has(a, len))
      break;
    len++;
  }

  return len;
}

module.exports.isArrLikePure = isArrLikePure;
module.exports.isArrLikeLoose = isArrLikeLoose;
