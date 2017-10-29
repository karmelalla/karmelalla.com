## karmelalla readme:

### Create new posts with jekyll:

Create your new story:

    $ jekyll story "Yosemite"

Create your new cooking recipe:

    $ jekyll cooking "Ice Cream"

### Resize images:

go to the project folder and install gems
```
$ cd [project_name]
$ bundle install
```

```
$ jekyll photo 2017-01-15-first-weekend # 1st argument is path -both resize and watermark
$ jekyll image 2017-01-15-first-weekend # 1st argument is path -both resize and watermark
$ jekyll resize 2017-01-15-first-weekend # 1st argument is path
$ jekyll resize 2017-01-15-first-weekend 200 90 # 1st argument is path, 2nd is image small height and 3rd it's quality
$ jekyll watermark 2017-01-15-first-weekend
```

Also you can change width and quality in ```_config.yml``` in your project folder. By default it's:

```yml
image_width: 2048
image_small_height: 200
image_quality: 90
```

### Send email:

```
$ jekyll mail # send last post
$ jekyll mail 2017-03-17-5years # send post by name
$ jekyll mail -preview # Open email for preview without sending
$ jekyll mail -recipients "recipient1@gmail.com, recipient2@gmail.com" # Send an email only to specific recipients
```
