@echo off
REM Convert all TXT files in current directory to HTML files.

for %%f in (*.txt) do (
 echo %%~nf
 pandoc -s -S --toc -c pandoc.css -H head.html -B before.html -A after.html "%%~nf.txt" -o "%%~nf.html"
)