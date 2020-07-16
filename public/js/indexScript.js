
function abcd(id)
{
    var votesForCandidate1 = 0;
    var votesForCandidate2 = 0;
    var votesForCandidate3 = 0;
    var votesForCandidate4 = 0;
    var votesForCandidate5 = 0;
    var votesForCandidate6 = 0;
    var votesForCandidate7 = 0;
    var votesForCandidate8 = 0;
    
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
    if(id=='getJSONdata')
    {
        var votes = {
            "Candidate1" : votesForCandidate1,
            "Candidate2" : votesForCandidate2,
            "Candidate3" : votesForCandidate3,
            "Candidate4" : votesForCandidate4,
            "Candidate5" : votesForCandidate5,
            "Candidate6" : votesForCandidate6,
            "Candidate7" : votesForCandidate7,
            "Candidate8" : votesForCandidate8
        };
    
    return votes;
    }
    alert("Done");
}



function submit()
{
    var JSONdata = abcd('getJSONdata')
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