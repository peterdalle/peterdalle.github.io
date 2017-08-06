@echo off
REM Convert all MD files in current directory to PDF files.

for %%f in (*.md) do (
 if "%%f" == "README.md" (
 	echo * Skipping README
 ) ELSE (
 	echo %%~nf pandoc -s -S "%%~nf.md" -o "%%~nf.pdf"
 )
)