const minuJson = [
    {
        Car: {
            Color: "Roosa",
            "Tumendatud aknad": false,
            Istekohti: 5,
            Rattaid: 4,
            "Pakiruumi maht": 100,
            Lisavarustus: {"Roolivõim" : "eriti võimekas", "Rool" : "Keeratav", "Katus": "Mitteläbilaskev"},
            Mark: "Niva"
        }
    }
]
//siin peavad olema stringiks viltused ühekordsed jutumärgid, kuhu saab dollareid ja {}
document.getElementById("app").innerHTML = ` 
<div id="json">
<h1> Auto omadused </h1>
<p>Värv: ${minuJson[0].Car.Color}</p>
<p>Tumendatud aknad: ${minuJson[0].Car["Tumendatud aknad"]}</p>
<p>Istekohti: ${minuJson[0].Car.Istekohti}</p>
<p>Rattaid: ${minuJson[0].Car.Rattaid}</p>
<p>Pakiruumi maht: ${minuJson[0].Car["Pakiruumi maht"]}</p>
<p>Lisavarustus: <ul>Roolivõim: ${minuJson[0].Car.Lisavarustus["Roolivõim"]}</ul>
    <ul>Rool: ${minuJson[0].Car.Lisavarustus["Rool"]}</ul>
    <ul>Katus: ${minuJson[0].Car.Lisavarustus["Katus"]}</ul>


</p>
<p>Mark: ${minuJson[0].Car.Mark}</p>
</div>
`