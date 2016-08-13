@echo off
REM Convert all TXT files in current directory to PDF files.

for %%f in (*.txt) do (
 echo %%~nf
 pandoc -s -S "%%~nf.txt" -o "%%~nf.pdf"
)