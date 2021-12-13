let rap = {
	"name": "ASAP r0yalty",
	"song": "Praise the r0yalty",
	"streams": "919239129319239123912"
};

console.log("INFO = ", rap);

fetch("hw72.php", {
	method: "post",
	body: JSON.stringify(rap)
})

.then(result => result.json())
.then(console.log)
.catch(error => {
console.log('Error1: ' + err.message);
});
