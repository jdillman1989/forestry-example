echo "Installing Git deployment";
cd $WEBROOT;
mkdir $STAGING.git;
mkdir build;
cd $STAGING.git;
git init --bare;
cd hooks;
touch post-receive;
echo "#!/bin/sh
unset GIT_DIR;
export GIT_WORK_TREE=$WEBROOT/build;
export GIT_DIR=$WEBROOT/$STAGING.git;
git checkout -f master;
cd $WEBROOT/build && bundle exec jekyll build --destination $PUBLIC;" >> post-receive;

echo "Setting up deployments";
cd $WEBROOT/$STAGING.git/hooks;
chmod 755 post-receive;
echo "Complete";