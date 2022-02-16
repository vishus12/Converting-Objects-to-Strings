const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHtml = (computerObject) => {
    const compSelection = `<section id="computer--1">
	\n <h1>${computerObject.manufacturer} ${computerObject.make} </h1>
    \n <div>Model: ${computerObject.model}</div>
    \n <div>Memory: ${computerObject.specs.memory}</div>
    \n <div>Hard drive space: ${computerObject.specs.hardDrive}</div>
    \n <div>Processor speed: ${computerObject.specs.processor}</div>
</section>`
return compSelection
}

const returnMyShit = computerHtml(computer)
console.log(returnMyShit)