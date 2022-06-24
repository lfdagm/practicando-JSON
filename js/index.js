const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;
const listaMiembros = document.querySelector("#miembros");
const jsonDataParsed = JSON.parse(jsonData);

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
  jsonDataParsed.members.forEach((miembro) => {
    const li = document.createElement("li");
    li.innerText = miembro.name;
    listaMiembros.appendChild(li);
  });
}
recorrerMiembros();
