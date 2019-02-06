const fetch = (method, url, valueText, callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (JSON.parse(xhr.responseText)) {
          callBack(null, JSON.parse(xhr.response));
        } else {
          callBack(new TypeError('Error'));
        }
      } else { callBack(new TypeError('Api is not responding')); }
    }
  };
  xhr.open(method, url);
  xhr.send(valueText);
};
