let school ={
    name: "Secunda secondary school",
    established: "1990",
    location: "Durban",
    learners: 100,

    displayinfo: function() {
        console.log(`The name of the school is ${school.name} \n located at 
        ${school.location} established at ${school.established}`);
    }

    hardData: function() {
        console.log("The name of school is" + school.name + "\n" 
        + "located at" + school.location)
    }

    notationData: function() {
        console.log("The name of school " + school['name'] + "\n"
     + " located at " + school['established'])
    }



}

school.displayinfo()
school.hardData()
school.notationData()