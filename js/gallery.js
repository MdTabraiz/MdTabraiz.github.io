var data = {
  images: [
    {
      img: "/images/one.jpeg",
      name: "Night Light",
      info: "Tree image",
      date: "2022-05-20",
    },
    {
      img: "/images/two.jpeg",
      name: "Bliss",
      info: "Peacock Feature image",
      date: "2021-07-21",
    },
    {
      img: "/images/three.jpeg",
      name: "Nature",
      info: "Beauty of Nature",
      date: "2019-07-01",
    },
    {
      img: "/images/four.jpeg",
      name: "Close",
      info: "Part of Nature",
      date: "2021-02-05",
    },
    {
      img: "/images/one.jpeg",
      name: "Night Light",
      info: "Tree image",
      date: "2012-06-16",
    },
    {
      img: "/images/two.jpeg",
      name: "Bliss",
      info: "Tree image",
      date: "2022-10-08",
    },
    {
      img: "/images/three.jpeg",
      name: "Nature",
      info: "Tree image",
      date: "2017-08-27",
    },
    {
      img: "/images/four.jpeg",
      name: "Close",
      info: "Tree image",
      date: "2017-08-27",
    },
  ],
};

function getImages() {
  data.images.forEach(function (obj, index) {
    let flex = document.getElementById("flex");
    flex.innerHTML += `<div class="card">
  <img src="${obj.img}" alt="Image" style="width:30%;height:100%">
  <div class="container">
    <h4><b>Name: ${obj.name}</b></h4> 
    <p>Information: ${obj.info}</p> 
    <p>Upload Date: ${obj.date}</p> 
    <button id="${index}" onclick=deleteImage(this.id)>Delete</button>
   <button id="${index}" onclick=editImage(this.id,event)> Edit</button>
    
  </div>
</div>
  `;
  });
}

getImages();

function deleteImage(id) {
  data.images.splice(id, 1);
  let flex = (document.getElementById("flex").innerHTML = "");
  getImages();
}

var update = false;
var editId = -1;

function editImage(id, event) {
  update = true;
  editId = id;
  let url = document.getElementById("url");
  let name = document.getElementById("name");
  let info = document.getElementById("info");
  let date = document.getElementById("date");

  let obj = data.images[id];

  url.value = obj.img;
  name.value = obj.name;
  info.value = obj.info;
  date.value = obj.date;

  document.getElementById("form").addEventListener("submit", function () {
    let flex = (document.getElementById("flex").innerHTML = "");
    getImages();
  });

  window.location.href = "#top";

  event.preventDefault();
}

function addImage(event) {
  const url = document.getElementById("url").value;
  const name = document.getElementById("name").value;
  const info = document.getElementById("info").value;
  const date = document.getElementById("date").value;

  let validated = validateFormData(event);

  if (validated) {
    let obj = {
      img: url,
      name: name,
      info: info,
      date: date,
    };
    data.images.push(obj);

    if (update == true) {
      deleteImage(editId);
      update = false;
    }

    getImages();

    document.getElementById("form").reset();
    event.preventDefault();
  }
}

function validateFormData(event) {
  const url = document.getElementById("url").value;
  const name = document.getElementById("name").value;
  const info = document.getElementById("info").value;
  const date = document.getElementById("date").value;

  if (url == "") {
    warning.innerText = "Url is a Required Field";
    event.preventDefault();
    return false;
  }

  if (name == "") {
    warning.innerText = "Name is a Required Field";
    event.preventDefault();
    return false;
  }

  if (info == "") {
    warning.innerText = "Info is a Required Field";
    event.preventDefault();
    return false;
  }

  if (date == "") {
    warning.innerText = "Date is a Required Field";
    event.preventDefault();
    return false;
  }

  if (name != "" && url != "" && info != "" && date != "") {
    warning.style.display = "none";
    event.preventDefault();
    return true;
  }
}
