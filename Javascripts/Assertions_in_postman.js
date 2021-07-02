// www.udzial.com 
// Udzial Means Share
// Created by GAurav khurana based on learning postman 
// Postman Tutorial notes and mindmap at below link
// https://udzial.com/postman-tutorial-notes/

// Assertions in Postman 
// you can put below either in Tests or Prerequisite 

	pm.test("REsponse should contain the key 'token",function()
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

	pm.expect(res.lastname).to.not.equal("Jonesa");

	pm.expect(res.totalprice).to.be.above(100);

	pm.expect(res.totalprice).to.be.below(500);
	     pm.expect(parseInt(bookingID)).to.be.a("number")

	pm.expect(jsonReq["booking"]["bookingdates"]["checkin"]).to.eql(jsonRes["created-booking"]["booking"]["bookingdates"]["checkin"])

	pm.response.to.have.status("OK")

	pm.response.to.have.status(200)

	pm.expect(pm.response.code).to.equal(200)

	pm.expect(pm.response.status).to.equal("OK") 

	pm.expect(pm.response.code).to.be.oneOf([201,200])
	pm.expect(pm.response.status.toLowerCase()).to.equal("OK".toLowerCase())

	pm.expect(pm.response.responseTime).to.be.below(25000)

	pm.expect(pm.response.responseTime).to.be.above(199)

	pm.expect(_.inRange(pm.response.responseTime,20,20000)).to.eql(true)

	pm.expect(pm.response.responseSize).to.not.equal(0)

	pm.expect(pm.response.text()).to.include("lastname")

	pm.response.to.have.header("content-type")

	pm.expect(pm.response.headers.get("Content-Type")).to.eql("text/html; charset=utf-8")

	pm.expect(pm.response.json()).to.be.an("array")

	pm.expect(pm.response.json()).to.be.an("object")

	    pm.expect([2]).to.be.an("array").that.is.empty

	    pm.response.to.be.badRequest;

	        pm.response.to.be.json;

	cookies
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

     
    //== in javascript compares only values 
    //=== in js compares datatypes also	
	//4===4 true
	//4==='4' false
	//4=='4' true

	