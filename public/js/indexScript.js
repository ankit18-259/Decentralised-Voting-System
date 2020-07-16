var votesForCandidate1 = 0;
var votesForCandidate2 = 0;
var votesForCandidate3 = 0;
var votesForCandidate4 = 0;
var votesForCandidate5 = 0;
var votesForCandidate6 = 0;
var votesForCandidate7 = 0;
var votesForCandidate8 = 0;


function abcd(id)
{

    if(id=='candidate1')
    {
        votesForCandidate1++;
    }
    if(id=='candidate2')
    {
        votesForCandidate2++;
    }
    if(id=='candidate3')
    {
        votesForCandidate3++;
    }
    if(id=='candidate4')
    {
        votesForCandidate4++;
    }
    if(id=='candidate5')
    {
        votesForCandidate5++;
    }
    if(id=='candidate6')
    {
        votesForCandidate6++;
    }
    if(id=='candidate7')
    {
        votesForCandidate7++;
    }
    if(id=='candidate8')
    {
        votesForCandidate8++;
    }
    alert("Done");
}

function gotoJSON()
{
    var votes = [];
    
    var candidate1 = {
        "Candidate1" : votesForCandidate1
    }
    votes.push(candidate1);
    
    var candidate2 = {
        "Candidate2" : votesForCandidate2
    }
    votes.push(candidate2);
    
    var candidate3 = {
        "Candidate3" : votesForCandidate3
    }
    votes.push(candidate3);
    
    var candidate4 = {
        "Candidate4" : votesForCandidate4
    }
    votes.push(candidate4);
    
    var candidate5 = {
        "Candidate5" : votesForCandidate5
    }
    votes.push(candidate5);
    
    var candidate6 = {
        "Candidate6" : votesForCandidate6
    }
    votes.push(candidate6);
    
    var candidate7 = {
        "Candidate7" : votesForCandidate7
    }
    votes.push(candidate7);
    
    var candidate8 = {
        "Candidate8" : votesForCandidate8
    }
    votes.push(candidate8);
    
    return votes;
}


function submit()
{
    var JSONdata = gotoJSON()
    var s = JSON.stringify(JSONdata, null, 2);
    let xhr = new XMLHttpRequest();
    url = "submit";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain");  
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
                result.innerHTML = this.responseText; 
            } 
        }; 
        xhr.send(s); 
    alert("Submitted");
}