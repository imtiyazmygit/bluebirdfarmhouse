@echo off
echo ========================================
echo Blue Bird Farmhouse - Quick Share Setup
echo ========================================
echo.
echo This will create a temporary public URL for client review.
echo.
echo STEP 1: Make sure Python server is running
echo   (If not, open another terminal and run: python -m http.server 8000)
echo.
echo STEP 2: Download ngrok if you haven't:
echo   Visit: https://ngrok.com/download
echo   Extract ngrok.exe to this folder
echo.
echo STEP 3: Run ngrok
echo.
pause

if not exist ngrok.exe (
    echo ERROR: ngrok.exe not found!
    echo Please download from https://ngrok.com/download
    echo Extract it to: %~dp0
    pause
    exit
)

echo Starting ngrok...
echo.
echo Your shareable URL will appear below:
echo Copy the "Forwarding" URL that starts with https://
echo.
ngrok http 8000
