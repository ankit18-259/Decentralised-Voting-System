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
    var votes = {"Candidates":{
                "0":"Candidate1",
                "1":"Candidate2",
                "2":"Candidate3",
                "3":"Candidate4",
                "4":"Candidate5",
                "5":"Candidate6",
                "6":"Candidate7",
                "7":"Candidate8"},
                 "No of Votes":{
                "0":votesForCandidate1,
                "1":votesForCandidate2,
                "2":votesForCandidate3,
                "3":votesForCandidate4,
                "4":votesForCandidate5,
                "5":votesForCandidate6,
                "6":votesForCandidate7,
                "7":votesForCandidate8}}
    
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