task :deploy do
  sh 'yeoman build'
  sh 'git add dist && git commit -m "updates dist"'
  sh 'git subtree push --prefix dist origin gh-pages'
end