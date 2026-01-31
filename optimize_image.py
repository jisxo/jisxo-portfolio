from PIL import Image
import os

input_path = '/Users/dido/workspace/antigravity/scratch/portfolio-site/public/og-image.png'
output_path = '/Users/dido/workspace/antigravity/scratch/portfolio-site/public/og-image.png'

try:
    with Image.open(input_path) as img:
        img = img.convert('RGB') # Ensure RGB for JPEG/PNG
        # Resize to standard OG dimensions if not already (maintaining aspect ratio or forcing? forcing is safer for OG)
        # But usually 1200x630 is the target.
        img = img.resize((1200, 630), Image.Resampling.LANCZOS)
        
        # Save as PNG but optimized, or JPEG if size is an issue. 
        # PNG 6MB is huge. JPEG is better for photos. 
        # But let's try optimized PNG first, or just high quality JPEG.
        # Actually, let's switch to JPEG for the OG image to guarantee small size, 
        # but keep the .png extension? No, browser might be confused.
        # Ideally we keep it PNG but reduce colors or just use JPEG. 
        # Let's save as optimized PNG first.
        
        img.save(output_path, 'PNG', optimize=True)
        
        # Check size. If still big, convert to JPEG (rename file?)
        # Renaming would require code change. 
        # Let's check size.
        
        size = os.path.getsize(output_path)
        print(f"Optimized PNG size: {size/1024/1024:.2f} MB")
        
except Exception as e:
    print(f"Error: {e}")
