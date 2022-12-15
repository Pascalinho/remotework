
  new SlimSelect({
    select: '#arbeitszeit',
    placeholder: 'Auswählen',
    allowDeselect: true,
    showSearch: false,
  });
  	const arbeitszeit = document.querySelector('#arbeitszeit');
  	const targetDiv1 = document.querySelector('#target-div1');
	arbeitszeit.addEventListener('change', function() {
    if (this.value !== '') {
      targetDiv1.style.display = 'block';
    } else {
      targetDiv1.style.display = 'none';
    }
  });

   arbeitszeit.addEventListener('change', function() {
   
    var selValue2 = this.options[this.selectedIndex].text;

    var previewDiv = document.querySelector('#previewarbeitszeit');
    previewDiv.innerHTML = selValue2;
  });

  new SlimSelect({
    select: '#multiple',
    limit: 3,
    placeholder: 'Maximal 3 Auswählen',
    showSearch: false,
     })
  const kategorien = document.getElementById("multiple");
  kategorien.addEventListener("change", singleSelectChangeText5);

  function singleSelectChangeText5() {
    var selObj10 = document.getElementById("multiple");
    var selected = Array.from(selObj10.options).filter(function(option) {
      return option.selected;
    }).map(function(option) {
      return option.text;
    });
    var selected2 = selected.join(" </br> ")   ;      
   
      document.getElementById("kats").innerHTML = selected2
    }

  new SlimSelect({
    select: '#branche',
    placeholder: 'Auswählen',
    allowDeselect: true,
    showSearch: false
  })

  new SlimSelect({
    select: '#multiple3',
    placeholder: 'Auswählen',
    showSearch: false,
  })
  const vorteile = document.getElementById("multiple3");
  vorteile.addEventListener("change", singleSelectChangeText6);

  function singleSelectChangeText6() {
    var selObj11 = document.getElementById("multiple3");
    var selected3 = Array.from(selObj11.options).filter(function(option) {
      return option.selected;
    }).map(function(option) {
      return option.text;
    });
    var selected4 = selected3.join(" </br> ")   ;    
      document.getElementById("previewvorteile").innerHTML = selected4
    }

  new SlimSelect({
    select: '#multiple5',
    placeholder: 'Auswählen',
    limit: 5,
    showSearch: false,
  })

  const checkBox = document.getElementById("Weltweit");
const text3 = document.getElementById("previewremote");
const text4 = document.getElementById("previewweltweit");
const hide = document.getElementById("requirementhide");

checkBox.addEventListener("click", myFunction);

function myFunction() {
  if (checkBox.checked == true) {
    text4.style.display = "block";
    text3.style.display = "none";
    previewrequirement.style.display = "none";
    hide.style.display = "none";
  } else {
    previewrequirement.style.display = "block";
    text3.style.display = "block";
    text4.style.display = "none";
    hide.style.display = "block";
  }
}

  // SlimSelect initialization
  new SlimSelect({
    select: '#vertrag',
    placeholder: 'Auswählen',
    allowDeselect: true,
    showSearch: false,
  });

  // Get elements
  const vertrag = document.querySelector('#vertrag');
  const targetDiv2 = document.querySelector('#target-div2');

  // Show target-div1 when selected value is not empty
  vertrag.addEventListener('change', function() {
    if (this.value !== '') {
      targetDiv2.style.display = 'block';
    } else {
      targetDiv2.style.display = 'none';
    }
  });

  // Update text in previewDiv
  vertrag.addEventListener('change', function() {
    // Get selected value
    var selValue = this.options[this.selectedIndex].text;

    // Set value in previewDiv
    var previewDiv = document.querySelector('#previewvertrag');
    previewDiv.innerHTML = selValue;
  });

  // SlimSelect initialization
  new SlimSelect({
    select: '#level',
    placeholder: 'Auswählen',
    allowDeselect: true,
    showSearch: false,
  });

  // Get elements
  const level = document.querySelector('#level');
  const targetDiv3 = document.querySelector('#target-div3');

  // Show target-div3 when selected value is not empty
  level.addEventListener('change', function() {
    if (this.value !== '') {
      targetDiv3.style.display = 'block';
    } else {
      targetDiv3.style.display = 'none';
    }
  });

  // Update text in previewDiv
  level.addEventListener('change', function() {
    // Get selected value
    var selValue = this.options[this.selectedIndex].text;

    // Set value in previewDiv
    var previewDiv = document.querySelector('#previewjoblevel');
    previewDiv.innerHTML = selValue;
  });

  const currency = document.getElementById("currency");
  currency.addEventListener("change", gehalt);
  const interval = document.getElementById("interval");
  interval.addEventListener("change", gehalt);

  function gehalt() {
    //Getting Value
    var selObj4 = document.getElementById("currency");
    var selValue4 = selObj4.options[selObj4.selectedIndex].value;
    var selObj5 = document.getElementById("interval");
    var selValue5 = selObj5.options[selObj5.selectedIndex].value;
    //Setting Value 
    document.getElementById("previewmoney").innerHTML = selValue4 + ' ' + selValue5;
  }

  const historie = document.getElementById("stellenhistorie");
  historie.addEventListener("change", singleSelectChangeText4);

  function singleSelectChangeText4() {
    //Getting Value
    var selObj6 = document.getElementById("stellenhistorie");
    var selValue6 = selObj6.options[selObj6.selectedIndex].value;
    //Setting Value
    document.getElementById("previewhistorie").innerHTML = selValue6;
  }

  var requirement = document.getElementById('requirement');
  var mirror = document.getElementById('mirror');
  var jobtitel = document.getElementById('jobtitel');
  var jobtitel2 = document.getElementById('jobtitel2');
  var firma = document.getElementById('firma');
  var min = document.getElementById('min');
  var max = document.getElementById('max');
  var mirror6 = document.getElementById('previewtitel');
  var previewrequirement = document.getElementById('previewrequirement');
  var previewmin = document.getElementById('previewmin');
  var previewmax = document.getElementById('previewmax');
  requirement.addEventListener('input', function(event) {
    mirror.innerText = event.target.value.split('').join('');
  });
  requirement.addEventListener('input', function(event) {
    previewrequirement.innerText = event.target.value.split('').join('');
  });
    jobtitel.addEventListener('input', function(event) {
    mirror6.innerText = event.target.value.split('').join('');
  });
  min.addEventListener('input', function(event) {
    previewmin.innerText = event.target.value.split('').join('');
  });
  max.addEventListener('input', function(event) {
    previewmax.innerText = event.target.value.split('').join('');
  });

  var previewbutton = document.getElementById("previewbutton");
  previewbutton.addEventListener("click", content);

  function content() {
    var anzeigentext = tinyMCE.get('anzeigentext').getContent();
    //Setting Value
    document.getElementById("richy").innerHTML = anzeigentext;
  }

  var previewbutton = document.getElementById("previewbutton");
  previewbutton.addEventListener("click", bewerbung);

  function bewerbung() {
    var bewerbungsform = document.getElementById("bewerbung").value;
    var mail = "mailto:";
    var link = "//";
    if (bewerbungsform.includes("@") == true) {
      document.getElementById("previewbewerbung").href = mail + bewerbungsform;
    } else {
      document.getElementById("previewbewerbung").href = link + bewerbungsform;
    }
  }

  const logo = document.getElementById("file");
  logo.addEventListener("change", preview);

  function preview() {
    //Setting Value
    document.getElementById("previewlogo").src = window.URL.createObjectURL(this.files[0]);
  }

const stand = document.getElementById("radio1");
  stand.addEventListener("click", Header);

const feat = document.getElementById("radio2");
  feat.addEventListener("click", Header);

  function Header() {
    var featured = document.getElementById("radio2");
    var standard = document.getElementById("previewheader");
    var featuring = document.getElementById("previewheader2");
    if (featured.checked == true) {
      featuring.style.display = "block";
      standard.style.display = "none";
    } else {
      featuring.style.display = "none";
      standard.style.display = "block";
    }
  }

  // SlimSelect initialization
  new SlimSelect({
    select: '#stellenhistorie',
    placeholder: 'Auswählen',
    allowDeselect: true,
    showSearch: false,
  });

  // Get elements
  const stellenhistorie = document.querySelector('#stellenhistorie');
  const targetDiv4 = document.querySelector('#target-div4');

  // Show target-div3 when selected value is not empty
  stellenhistorie.addEventListener('change', function() {
    if (this.value !== '') {
      targetDiv4.style.display = 'block';
    } else {
      targetDiv4.style.display = 'none';
    }
  });

  // Update text in previewDiv
  stellenhistorie.addEventListener('change', function() {
    // Get selected value
    var selValue = this.options[this.selectedIndex].text;

    // Set value in previewDiv
    var previewDiv = document.querySelector('#previewhistorie');
    previewDiv.innerHTML = selValue;
  });



