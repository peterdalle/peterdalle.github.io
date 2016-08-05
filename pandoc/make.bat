@echo off
pandoc -s -S --toc -c pandoc.css -H head.html -B before.html -A after.html dataviz.txt -o dataviz.html
pandoc -s -S --toc -c pandoc.css -H head.html -B before.html -A after.html stats.txt -o stats.html