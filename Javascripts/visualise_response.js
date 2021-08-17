// For visualising results as images in postman 

// from postman website 

// counter for passed tests
let pass = 0
let totalToPass = 3

pm.test("If you have any failures, review the failed test results or ask for support in the community forum. When all of your tests pass, you are done with today's challenge.", () => {
    pm.expect(true);
    pass += 1
});

pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
    pass += 1
});

pm.test("User Agent is correct", () => {
    pm.expect(pm.response.json().args["user-agent"]).includes("PostmanRuntime/")
    pass += 1
})

// visualization for test results
let template
if (pass == totalToPass) {
    template = `🍪 passing!
        <br />
        <img src="https://media4.giphy.com/media/THIvbrqPhSsTHxpuua/200w.webp" />
    `
} else {
    template = `🙅 please try again
        <br />
        <img src="https://media2.giphy.com/media/CM1rHbKDMH2BW/200.webp" />
    `
}
pm.visualizer.set(template)




// to have a table 


var template = 
`<table bgcolor = "#00FFEF">
<tr>
<th>Name</th>
<th>URL</th>
</tr>

{{#each response}}
<tr>
<td>{{name}}</td>
<td>{{url}}</td>
</tr>
{{/each}}

</table>`

var results = pm.response.json().results
pm.visualizer.set(template, {response:  results});
