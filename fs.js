base_url = "https://raw.githubusercontent.com/NightmareNightmare/edulastic/main"
if (typeof document.dev_env != "undefined") {
  base_url = document.dev_env;
}

function http_get(url, callback, headers=[], method="GET", content=null) {
  let request = new XMLHttpRequest();
  request.addEventListener("load", callback);
  request.open(method, url, true);
  for (const header of headers) {
    request.setRequestHeader(header[0], header[1]);
  }
  request.send(content);
}

function init() {
  let url_regex = /https:\/\/app\.edulastic\.com.+/;
  if (!url_regex.test(window.location)) {
    alert("Ack!\n\nThe URL that this code was executed on was not a valid Edulastic assignment.\n\nThis is what a Edulastic assignment URL should look like:\nhttps://app.edulastic.com/student/assessment/*\nor\nhttps://app.edulastic.com/home/assignments.");
    return;
  }
  
  var url = base_url+"/fs_money.js";
  http_get(url, function(){
    var w = window.open(window.location.href);
    var script = w.document.createElement("script");
    script.innerHTML = this.responseText;
    w.document.body.appendChild(script);
  })
}

init();
