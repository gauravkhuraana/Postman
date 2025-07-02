// www.udzial.com 
// Udzial Means Share
// Created by Gaurav khurana based on learning postman 
// Postman Tutorial notes and mindmap at below link
// https://udzial.com/postman-tutorial-notes/

// Get in touch with me at - https://linktr.ee/gauravkhurana


// Assertions in Postman 
// you can put below either in Tests or Prerequisite 
// Assertion as a form of function


// First of all convert the response into json to get data from json response in postman in Tests section

       var jsonResponse = pm.response.json();
       // here points is the first node and would be different for your API
       let name = jsonResponse.points.find( inp => {return inp.suite.id === "9000"})
       console.log("The point id for the given testcase is " + name.id)
       console.log("The testPlan id for the given testcase is " + name.testPlan.id)
       




	pm.test("Response should contain the key 'token",function()
{
    var jsondata = pm.response.json();
    pm.expect(jsondata).to.have.property("token")
});

	pm.test("Token must not be null",function()
{
    var jsondata = pm.response.json();
    var flag = jsondata.token == null;
     pm.expect(flag).to.equal(false);
});

	pm.expect(pm.response.headers.get("Server")).to.eql("Cowboy")

    // Each expect can have its own name 
	pm.expect(collRequest.name, 'check name').equals("collion variable")


	pm.expect(res.lastname).to.not.equal("Jonesa");
	

	pm.expect(res.totalprice).to.be.above(100);

	pm.expect(res.totalprice).to.be.below(500);
	     pm.expect(parseInt(bookingID)).to.be.a("number")

	pm.expect(jsonReq["booking"]["bookingdates"]["checkin"]).to.eql(jsonRes["created-booking"]["booking"]["bookingdates"]["checkin"])
	
	
	
	

	pm.response.to.have.status("OK")

	pm.response.to.have.status(200)
	
    pm.response.to.have.jsonBody();
    // Check value not present
	pm.response.to.not.have.jsonBody('error');
	
	// Check if value is an array 
    pm.expect(pm.response.json()).to.have.property('collections').and.be.an('array');

// Writing a test to check property exists have certain values
    pm.test('get single collection', () => {
    pm.expect(error).to.equal(null);
    pm.expect(response).to.have.property('code', 200);
    pm.expect(response).to.have.property('status', 'OK');
    pm.expect(response.json().collection.auth.type, 'check collection authorization').to.equal("apikey")

    pass += 1
  });
// validating length   
  pm.expect(response.json().environment.values.length, 'check environment variables').to.equal(4)


	pm.expect(pm.response.code).to.equal(200)

	pm.expect(pm.response.status).to.equal("OK") 

	pm.expect(pm.response.code).to.be.oneOf([201,200])
	pm.expect(pm.response.status.toLowerCase()).to.equal("OK".toLowerCase())

	pm.expect(pm.response.responseTime).to.be.below(25000)

	pm.expect(pm.response.responseTime).to.be.above(199)

	pm.expect(_.inRange(pm.response.responseTime,20,20000)).to.eql(true)

	pm.expect(pm.response.responseSize).to.not.equal(0)

// Check in whole Json if the value is present or not 

	pm.expect(pm.response.text()).to.include("lastname")

	pm.response.to.have.header("content-type")

	pm.expect(pm.response.headers.get("Content-Type")).to.eql("text/html; charset=utf-8")

	pm.expect(pm.response.json()).to.be.an("array")

	pm.expect(pm.response.json()).to.be.an("object")

    pm.expect(firstRequest.response, 'check saved example').to.not.be.empty
	
	    pm.expect([2]).to.be.an("array").that.is.empty

	    pm.response.to.be.badRequest;

	        pm.response.to.be.json;

//	cookies
		pm.expect(pm.cookies.has("VstsSession")).to.be.true;
		pm.expect(pm.cookies.get("VstsSession")).to.be.equal("12345")
	pm.expect(pm.response.json().args["user-agent"]).includes("PostmanRuntime/")
	
	// you can take a nested json by mentioing the node name 
	// col is the node name in current json in response
	let col = pm.response.json().col
	
	// now searching the sub/nested json taken from response
	// ite is under col(json)
	let folder = col.ite.find(fol => {return fol.name === "Collections and environments"})
    
	// Number of elements via length function
	pm.expect(folder.ite.length, 'check number of requests').equals(2)
    pm.expect(folder.ite.length, 'check number of requests').is.greaterThan(0)

 pm.expect(parseInt(variable.value), 'check collection variable value').to.be.at.least(0).and.at.most(30)
 
    // Pick a folder in Postmanby getting the collection level informatinon via collection id 
	let col = pm.response.json().collection
	let folder = col.item.find(fol => { return fol.name == "Add request details"})
 
    // When there is json Array involve and you need to search an item  
    let newRequest = col.item[0].item.find(req => { return req.name === "raw JSON body"})

     //foreach loop on response json 
     let pics = pm.response.json()
     pics.forEach((pic) => { console.log(pic.title, pic.url) })

  
  // toString can be used when json response is in multilple line and we 
  pm.expect(test.script.exec.toString(), 'check console log').to.include("console.log(")


// Different symbols will come in Postman console logs
console.log("Testing log")
console.info("Testing info")
console.warn("Testing warn")
console.error("Testing error")

    //== in javascript compares only values 
    //=== in js compares datatypes also	
	//4===4 true
	//4==='4' false
	//4=='4' true


// set Variable in postman
	pm.collectionVariables.set("jsonBody",JSON.stringify(getRandomUserResponse))

	
	
	let getRandomUserResponse = pm.response.json()
    
// To do Chaining of request we need to use Stringify on json response from full json
    pm.collectionVariables.set("jsonBody",JSON.stringify(getRandomUserResponse))

// Call an API from pre-requisite or Tests in Postman
// Use $ to put variables from with the sciprt like res.headers below
// use [""] for collection/global/local/env variables
// use backquote whereever there are variable involved

const collRequest = {
  url: `https://api.getpostman.com/collections/${res.form.collection_uid}`,
  method: 'GET',
  header: {
    'x-api-key': `${res.headers["x-api-key"]}`
  }
};
// making the reuest and validating respon
pm.sendRequest(collRequest, (error, response) => {
  if (error) {
    console.log(error);
  }
  
  
  let res = pm.response.json()
console.log(res)
console.log(pm.response)
console.log(res.results[0].name)
pm.test("Check there is presence of Tatooine", () =>
{
pm.expect(res.results[0], "first way of validating value presence").to.have.property('name','Tatooine')
pm.expect(pm.response.text(), "second way of validating value presence").to.include('Tatooine')

}
);

// Create failure using pm.expect 
// checking if find results in undefined

let name = res.results.find( inp => {return inp.name === "Taooine"})
console.log(name)
//console.log(name.name)
if(name !=undefined)
   pm.expect(name.length,'check if we got atleast one value with Tatooine').is.greaterThan(0)
else
   console.log("We did not found Tatooine in the output")
   pm.expect(true," Causing failure as we did not found what was required").to.equal(false)

pm.test("Verify one property",function()
{
    pm.response.text().includes("data")
})


//Regular expressions
   let firstMarkdownLinkRegex = /\[(.+)\]\((.+)\)/
    pm.expect(firstRequest.request.description.match(firstMarkdownLinkRegex).length, 'check hyperlink').to.equal(3)

// looping foreach 
// Exist 
  if (firstRequest.request.header) {
        firstRequest.request.header.forEach( (header) => {
            pm.expect(header.description, 'check header description').to.exist
        })
		pm.expect(firstRequest.request.url.query.forEach( (param) => { param.description}))
    }pm.expect(firstRequest.request.url.query.forEach( (param) => { param.description}))
    }	
	
	
// Dynamic variable in postman
https://learning.postman.com/docs/writing-scripts/script-references/variables-list/
	
// Sending Request via Pre-Requisite


pm.variables.set("hex",pm.variables.replaceIn('{{$randomHexColor}}')
)

console.log(" The hex color is ",pm.variables.get("hex"))

hex1=pm.variables.get("hex")

hex2=hex1.substring(1,7)

console.log(" Variable hex1 is ", hex2)
hex3='http://thecolorapi.com/id?hex='+hex2
// Example with a full-fledged request
const getRequest = {
  url: pm.variables.replaceIn(hex3),
  method: 'GET',
  
};
pm.sendRequest(getRequest, (error, response) => {
  console.log(error ? error : response.json());
  response = response.json()
  hex = response.hex.value
  rgb = response.rgb.value
  name = response.name.value

  console.log(" hex value is ", hex)
  console.log(" rgb value is ", rgb)
  console.log(" name value is ", name)

  payload= ' { "hex": "'+hex + '" , "rgb": "'+rgb+'", "name": "'+name+'" }' 

  pm.collectionVariables.set("payload",payload)
   
   console.log("Payload ", payload)
 
});

// .json() is necessary before accessing variables otherwise it returns objects 

  pm.collectionVariables.set("id",pm.response.json().id)
	
	// to extract all relevant tags from html using cheerio library
	
	$ = cheerio.load(pm.response.text());
links = $('a');
const allLinks = [];
$(links).each(function (i, link) {
    
    if($(link).attr('href'))
    {
    if($(link).attr('href').includes('https')){
        //console.log(i + ': ' +  $(link).attr('href'));
        allLinks.push($(link).attr('href'))
    }
    }
    
});
    console.log("all links are", allLinks)
    pm.collectionVariables.set("links", JSON.stringify(allLinks))
    pm.collectionVariables.set("li", "test")


