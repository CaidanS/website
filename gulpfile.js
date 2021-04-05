
var gulp = require('gulp'), 
  wrapper = require('gulp-wrapper');
var markdown = require('gulp-markdown-it');

gulp.task('markdown', function() {
  return gulp
    .src('**/*.md')
    .pipe(markdown())
    .pipe(wrapper({
      header: `
      <!DOCTYPE html>
      <html>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <head>
        <title>Blog</title>
        <link rel="stylesheet" type="text/css" href="/main.css">
        <link rel="stylesheet" type="text/css" href="/blog/blog_css.css">
      </head>
      <body>
      <div id="main_content_blog">
		<div id="header">
			<h1 class="title"><a href="/blog" class="title-word">The&nbsp;</a><a href="/blog" class="title-word Blog">Blog</a></h1>
			&nbsp;&nbsp;&nbsp;↩&nbsp;<a href="/">Take me back home</a>&nbsp;&nbsp;<a href="/blog/all">All posts</a>
		</div>
    <div id="other_posts">
			<div class="post">
				<h2>This is the title of another post</h2>
				<p> This is some teasr text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i><a href="#">Read more</a></i></p><p></p>
			</div>
			<div class="post">
				<h2>This is the title of another post</h2>
				<p> This is some teasr text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i><a href="#">Read more</a></i></p><p></p>
			</div>
			<div class="post">
				<h2>This is the title of another post</h2>
				<p> This is some teasr text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i><a href="#">Read more</a></i></p><p></p>
			</div>
			<div class="post">
				<h2>This is the title of another post</h2>
				<p> This is some teasr text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i><a href="#">Read more</a></i></p><p></p>
			</div>
			<h2><a href="/blog/all">See all posts ⇒</a></h2>
		</div>
		<div id="active_post">
			<div class="post">				
      `,
      footer: '</div></div></div></body></html>'
    }))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
});

gulp.task('default', function() {
  return gulp.watch('**/*.md', gulp.series(['markdown']));
});


