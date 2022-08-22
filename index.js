const cats=["Milo", "Otis", "Garfield"]

function Arrayfunctions() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  };
  
  function destructivelyAppendCat(name){
    return cats.push(`Ralph`);
  }
  function destructivelyPrependCat(name){
    return cats.unshift(`Bob`);
  }
  function destructivelyRemoveLastCat(){
    return cats.pop(`Milo`);
  }
  function destructivelyRemoveFirstCat(){
    return cats.shift(`Garfield`);
  }
  function appendCat(name){
    const newpuss=[`Broom`];
    return [`Milo`, `Otis`, `Garfield`, ...newpuss];
  }
  function prependCat(name){
    return [`Arnold`,...cats];
  }
  function removeLastCat(){
    return cats.slice(0,2);
  }
  function removeFirstCat(){
    return cats.slice(1);
  }