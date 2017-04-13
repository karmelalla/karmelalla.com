## karmelalla readme:

### Resize with jekyll gem:

* go to the project folder and install gems
```
$ cd [project_name]
$ bundle install
```

* run rake command:
```
$ rake resize 2017-01-15-first-weekend # 1st argument is path
$ rake resize 2017-01-15-first-weekend 300 90 # 1st argument is path and 2nd is image width 3rd is quality
```

Also you can change width and quality in ```_config.yml``` in your project folder. By default it's:

```yml
image_width: 2048
image_small_width: 300
image_quality: 90
```


### Send email:

```
$ jekyll mail # send last post
$ jekyll mail 2017-03-17-5years # send post by name
$ jekyll mail --test # Open email for preview without sending
$ jekyll mail -preview # Open email for preview without sending
$ jekyll mail --recipients "karmelalla@gmail.com, isakov90@gmail.com" # Send an email only to specific recipients
```
