# Insarag

Static copy of https://www.insarag.org/

## Scripts

- `generate.sh`: uses wget to mirror the site
- `missing_files.sh`: uses wget to fetch missing files

## 404

```bash
grep '404 Not' -B 2 output.log | grep https://www.insarag.org | awk '{split($0, a, "--  "); print a[2]} > 404.log
```
