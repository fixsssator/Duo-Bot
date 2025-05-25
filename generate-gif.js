const puppeteer = require('puppeteer');
const fs = require('fs');
const GIFEncoder = require('gifencoder');
const { createCanvas, loadImage } = require('canvas');

async function generateDashboardGIF() {
    console.log('🎬 Starting animated dashboard GIF generation...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 800, height: 400 });
        
        // Load the dashboard HTML
        await page.goto('file://' + process.cwd() + '/dashboard.html', {
            waitUntil: 'networkidle2'
        });
        
        // Wait for animations to initialize
        console.log('⏳ Waiting for animations to start...');
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Setup GIF encoder
        console.log('🎞️ Setting up GIF encoder...');
        const encoder = new GIFEncoder(800, 400);
        const stream = fs.createWriteStream('dashboard.gif');
        encoder.createWriteStream(stream);
        
        encoder.start();
        encoder.setRepeat(0);        // 0 for infinite loop
        encoder.setDelay(100);       // 100ms = 10 FPS
        encoder.setQuality(10);      // Image quality (1-20, lower is better)
        
        // Capture frames for animation
        console.log('📸 Capturing animation frames...');
        const totalFrames = 60; // 6 seconds at 10 FPS
        
        for (let i = 0; i < totalFrames; i++) {
            // Take screenshot
            const screenshot = await page.screenshot({ 
                type: 'png',
                clip: { x: 0, y: 0, width: 800, height: 400 }
            });
            
            // Convert to canvas and add to GIF
            const img = await loadImage(screenshot);
            const canvas = createCanvas(800, 400);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            encoder.addFrame(ctx);
            
            // Progress indicator
            const progress = Math.round((i + 1) / totalFrames * 100);
            console.log(`📸 Frame ${i + 1}/${totalFrames} (${progress}%)`);
            
            // Wait between frames to capture animation
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // Finish GIF creation
        encoder.finish();
        console.log('GIF creation completed!');
        
        // Also create a high-quality static PNG
        console.log('📱 Creating PNG fallback...');
        await page.screenshot({ 
            path: 'dashboard.png', 
            type: 'png',
            clip: { x: 0, y: 0, width: 800, height: 400 }
        });
        
        console.log('🎉 Dashboard images generated successfully!');
        console.log('📁 Files created:');
        console.log('   - dashboard.gif (animated)');
        console.log('   - dashboard.png (static fallback)');
        
    } catch (error) {
        console.error('Error generating dashboard GIF:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

// Run if called directly
if (require.main === module) {
    generateDashboardGIF().catch(console.error);
}

module.exports = generateDashboardGIF;
