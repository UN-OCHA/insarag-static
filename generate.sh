# Make static dir
mkdir -p static

# Mirror site
wget --mirror --page-requisites --directory-prefix=static --output-file=output.log --no-host-directories --html-extension --convert-links --restrict-file-names=windows --domains www.insarag.org --no-parent https://www.insarag.org/
