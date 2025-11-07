# Blue Bird Farmhouse - Image Renaming Script
# Save this script in the images folder and run it after placing the 8 attached images

Write-Host "Blue Bird Farmhouse - Image Renaming Helper" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if images folder exists
if (-not (Test-Path -Path $PSScriptRoot)) {
    Write-Host "Error: Please run this script from the images folder" -ForegroundColor Red
    exit
}

Write-Host "This script will help you rename the 8 attached images." -ForegroundColor Yellow
Write-Host ""
Write-Host "Expected filenames:" -ForegroundColor Green
Write-Host "  1. bedroom1.jpg       - Bedroom with blue ceiling"
Write-Host "  2. bedroom2.jpg       - Second bedroom view"
Write-Host "  3. mini-pool.jpg      - Covered pool/jacuzzi area"
Write-Host "  4. kitchen.jpg        - Modern kitchen"
Write-Host "  5. garden-seating.jpg - Lawn with red benches"
Write-Host "  6. swimming-pool1.jpg - Main pool view 1"
Write-Host "  7. swimming-pool2.jpg - Main pool view 2"
Write-Host "  8. fridge-room.jpg    - Purple room with fridge"
Write-Host ""

# List current images in folder
$images = Get-ChildItem -Path $PSScriptRoot -Filter *.jpg
if ($images.Count -eq 0) {
    Write-Host "No JPG images found in this folder yet." -ForegroundColor Yellow
    Write-Host "Please copy the 8 attached images here first." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "Current images in folder:" -ForegroundColor Cyan
$images | ForEach-Object { Write-Host "  - $($_.Name)" }
Write-Host ""

Write-Host "If you've already saved the images with correct names, you're done!" -ForegroundColor Green
Write-Host "If not, please rename them manually using the guide above." -ForegroundColor Yellow
Write-Host ""

# Check if expected images exist
$expectedFiles = @(
    "bedroom1.jpg",
    "bedroom2.jpg", 
    "mini-pool.jpg",
    "kitchen.jpg",
    "garden-seating.jpg",
    "swimming-pool1.jpg",
    "swimming-pool2.jpg",
    "fridge-room.jpg"
)

$missingFiles = @()
foreach ($file in $expectedFiles) {
    if (-not (Test-Path -Path (Join-Path $PSScriptRoot $file))) {
        $missingFiles += $file
    }
}

if ($missingFiles.Count -eq 0) {
    Write-Host "✓ All 8 images are correctly named!" -ForegroundColor Green
    Write-Host "✓ Your website is ready to use!" -ForegroundColor Green
} else {
    Write-Host "Missing files:" -ForegroundColor Yellow
    $missingFiles | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
    Write-Host ""
    Write-Host "Please rename the images according to the guide above." -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Press Enter to exit"
