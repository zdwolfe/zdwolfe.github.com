git submodule init
git submodule update
DIR=$PWD

make build
make bootstrap
lessc --compress ./less/bootstrap.less > ./bootstrap/css/bootstrap.min.css
