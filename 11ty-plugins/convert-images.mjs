import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inDir = path.join(process.cwd(), 'src/static/images')
const outDir = path.join(process.cwd(), 'dist/static/images')

try {
    // Create the directory if it doesn't exist already
    fs.mkdirSync(outDir, { recursive: true })
} catch {}

fs.readdir(inDir, async function (err, files) {
    if (err) throw err
    let failed = 0, succeeded = 0, skipped = 0, length = files.length

    for (let file of files) {
        const input = path.join(inDir, file)
        const match = file.match(/^([\s\S]*)@(\d)x\.([\s\S]*)/)

        if (!match) {
            // Copy the file normally, since it may not be an image file
            fs.createReadStream(input).pipe(
                fs.createWriteStream(path.join(outDir, file))
            )
            skipped++
            continue
        }

        const [, name, densityDescriptor, suffix] = match
        let density = +densityDescriptor, width

        try {
            width = await sharp(input).metadata().then(data => data.width)
            if (width == null) throw Error('wtf')
        } catch {
            console.log(`Failed to convert ${file}`)
            failed++
            continue
        }
        succeeded++

        let i = 0
        while (1 <= density) {
            // default format
            sharp(input)
                .resize({ width: Math.round(width / (2 ** i)) })
                .toFile(path.join(outDir, `${name}@${density}x.${suffix}`))
        
            // webp
            sharp(input)
                .toFormat('webp')
                .resize({ width: Math.round(width / (2 ** i)) })
                .toFile(path.join(outDir, `${name}@${density}x.webp`))
            
            density--
            i++
        }
    }

    console.log(`
convert-images.mjs
    Loaded ${length} files. converted ${succeeded} successfully, ${failed} failed, ${skipped} were skipped.`)
})
