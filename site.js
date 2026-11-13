(function () {
    var btn = document.getElementById('copy-email');
    var txt = document.getElementById('email-text');
    if (!btn || !txt) return;
    btn.addEventListener('click', function () {
      var value = txt.textContent.trim();
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1600); };
      var fallback = function () {
        try {
          var range = document.createRange(); range.selectNodeContents(txt);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
          btn.textContent = 'Selected'; setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
        } catch (e) {}
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, fallback);
      } else { fallback(); }
    });
  })();
