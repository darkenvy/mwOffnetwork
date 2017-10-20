#!/bin/bash
sudo docker build -t zimwriterfs zimwriterfs_config
time sudo docker run -it -v $(pwd)/processed_wiki_articles:/articles -v $(pwd)/output:/output zimwriterfs
