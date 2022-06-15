var name_in = document.getElementById("name_in");
var desc_in = document.getElementById("num_in");

const fruits = document.querySelectorAll('input[name="guess"]');

var enteredName;
var numentered;
var selectedName

$(".sbt").click(function(e){
    // alert('clicked');
    e.preventDefault();
    enteredName = name_in.value
    numentered = desc_in.value
    // console.log(enteredName);
    // console.log(numentered);
    for (const f of fruits) {
        if (f.checked) {
            selectedName = f.value
        //   console.log(selectedName)
        }
      }

    // var adding = window.localStorage.getItem('products');

    // adding = adding === "" || adding === null ? [] : adding;

    // adding = adding.length > 0 ? JSON.parse(adding): [];    

    // console.log(adding);

    // var array = [];
    // for(var i = 0;i<adding.length;i++){
    //     var obj = {
    //         name: adding[i].enteredName,
    //         desc: adding[i].numentered
    //     };
    //     console.log(obj);

    //     array.push(obj);
    // };

    // adding = adding === "" || adding === null ? [] : null;
    // adding = adding.length > 0 ? JSON.parse(adding) : [];
    
    const adding = {
        name: enteredName,
        number: numentered,
        sname: selectedName
    }



    console.log(adding)

    //https://62a82e93a89585c1770e06f1.mockapi.io/Game
    $.post("https://62a82e93a89585c1770e06f1.mockapi.io/Game",adding, 
    function(){
        window.localStorage.setItem("adding",[]);

    })

    name_in.value = '';
    desc_in.value = '';
    alert("Submitted")
})