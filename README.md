## karmelalla readme:

go to the project folder and install gems
```
$ cd [project_name]
$ bundle install
```

### Create new posts with jekyll:

Create your new story:

    $ jekyll story "Yosemite"

Create your new cooking recipe:

    $ jekyll cooking "Ice Cream"

### Resize images:

```
$ jekyll photo 2017-01-15-first-weekend # 1st argument is path or image. Will resize and watermark
$ jekyll image 0.jpg # 1st argument is path or image. Will resize and watermark
$ jekyll resize 2017-01-15-first-weekend # 1st argument is path or image
$ jekyll resize 1.jpg 90 300 # 1st argument is path or image, 2nd is quality 3rd is image small height
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
$ jekyll mail # send last story
$ jekyll mail 2017-03-17-5years # send post by name
$ jekyll mail -preview # Open email for preview without sending
$ jekyll mail -recipients "recipient1@gmail.com, recipient2@gmail.com" # Send an email only to specific recipients
```
