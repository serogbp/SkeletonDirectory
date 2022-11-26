
var fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });


// List available structures
// User can select one structure
function main() {
	let available = "Available structures:\n"
	const structures = getStructures()
	structures.forEach((item, index) => available += `${index} ${item.name}\n`)
	console.log(available)

	const userInput = prompt("Select the structure (-1 to exit): ")
	if (userInput === '-1') return

	const path = structures[userInput].name
	fs.mkdirSync(path)
	createSkeleton(structures[userInput].structure, `${__dirname}/${path}/`)

	main()
}


// Reads json files in the structures folder
// Returns array with parsed json files
function getStructures() {
	const PATH = "./skeletons/"
	const files = fs.readdirSync(PATH)
	const structures = files.map(file => JSON.parse(fs.readFileSync(PATH + file, { encoding: "utf8" })))
	return structures
}


// Creates skeleton of the structure selected by the user
function createSkeleton(structure, parentPath) {
	structure.forEach(item => {
		const newPath = `${parentPath}/${item.name}/`
		if (item.type === "folder") {
			fs.mkdirSync(newPath)
			if (item.children.length > 0) createSkeleton(item.children, newPath)
		}
		else if (item.type === "file") {
			fs.writeFileSync(newPath, "")
		}
	})
}


main()
