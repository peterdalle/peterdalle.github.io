@echo off
REM Convert all MD files in current directory to HTML files.

for %%f in (*.md) do (
 if "%%f" == "README.md" (
 	echo * Skipping README
 ) ELSE (
 	echo %%~nf
 	pandoc -s -S --toc -c pandoc.css -H _head.html -B _before.html -A _after.html "%%~nf.md" -o "%%~nf.html"
 )
)