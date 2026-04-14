import { copyFile, mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, "..")
const source = resolve(projectRoot, "node_modules", "motion", "dist", "motion.js")
const destinationDir = resolve(projectRoot, "public", "vendor")
const destination = resolve(destinationDir, "motion.js")

await mkdir(destinationDir, { recursive: true })
await copyFile(source, destination)

console.log(`Synced Motion vendor bundle to ${destination}`)
