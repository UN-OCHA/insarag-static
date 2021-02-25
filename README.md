# Insarag

Static copy of https://www.insarag.org/

## Scripts

- `generate.sh`: uses wget to mirror the site
- `missing_files.sh`: uses wget to fetch missing files

## 404

```bash
grep '404 Not' -B 2 output.log | grep https://www.insarag.org | awk '{split($0, a, "--  "); print a[2]} > 404.log
```

## Banner

The following code needs to be added to `static/templates/insarag/js/jquery.insarag-global.js` and `static/templates/insarag/js/jquery.insarag-global.js@v=3`

```js
// Add banner at the top.
(function ($) {
    $(document).ready(function () {
        var html = '<div class="banner-static" style="padding: 1rem; background-color: #fbfb38; position: sticky; top: 0; z-index: 9999; text-align: center;"><p>This is an archived copy of the INSARAG site. To visit the new site, go to <a style="color: inherit;text-decoration: underline;"href="https://www.insarag.org">https://www.insarag.org</a>.</p></div>';
        $('body').prepend(html);
    })
})(jQuery);
```
