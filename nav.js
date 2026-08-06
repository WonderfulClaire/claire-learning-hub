/* 学习站联动导航 · 共享后端：WonderfulClaire/claire-learning-hub/sites.json
 * 任意学习站引入本文件即获得顶部「📚 我的学习站」联动条。
 * 改一次 sites.json，所有站下一次加载自动同步。 */
(function () {
  var BAR = 'claire-hub-nav';
  if (document.getElementById(BAR)) return;
  if (window.__claireHubLoaded) return;
  window.__claireHubLoaded = true;

  fetch('https://cdn.jsdelivr.net/gh/WonderfulClaire/claire-learning-hub@main/sites.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (sites) {
      if (!sites || !sites.length) return;
      var cur = location.protocol + '//' + location.host + location.pathname.replace(/index\.html$/, '');
      var bar = document.createElement('div');
      bar.id = BAR;
      bar.style.cssText = 'position:sticky;top:0;z-index:99999;display:flex;flex-wrap:wrap;gap:8px;align-items:center;' +
        'padding:7px 14px;background:#0f1220;color:#e6e6e6;font:13px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;' +
        'border-bottom:1px solid #2a2f45;';
      var label = document.createElement('span');
      label.textContent = '📚 我的学习站';
      label.style.cssText = 'font-weight:700;margin-right:4px;color:#7aa2ff;';
      bar.appendChild(label);
      sites.forEach(function (s) {
        if (!s.url) return;
        var a = document.createElement('a');
        a.href = s.url;
        a.textContent = (s.icon || '•') + ' ' + s.name;
        a.style.cssText = 'color:#cdd3e6;text-decoration:none;padding:2px 8px;border-radius:6px;';
        var isCur = false;
        try {
          isCur = new URL(s.url).href.replace(/index\.html$/, '').replace(/\/$/, '') === cur.replace(/\/$/, '');
        } catch (e) {}
        if (isCur) { a.style.background = '#2a2f45'; a.style.color = '#fff'; }
        a.onmouseover = function () { if (!isCur) a.style.background = '#222840'; };
        a.onmouseout = function () {
          if (!isCur) { a.style.background = 'transparent'; a.style.color = '#cdd3e6'; }
          else { a.style.background = '#2a2f45'; a.style.color = '#fff'; }
        };
        bar.appendChild(a);
      });
      document.body.insertBefore(bar, document.body.firstChild);
    })
    .catch(function () {});
})();
