function generateIdea(){
    const themeText = document.getElementById("themeContainer");
    const goalText = document.getElementById('goalContainer');
    const styleText = document.getElementById("styleContainer");
    const themes = ["sandbox", "rpg", "runner", "simulator", "casual", "one bullet"];
    const goals = ["none", "reach end", "get money", "stop bad guy"];
    const styles = ["pixel", "casual", "vector", "3d"];
    themeText.textContent = getRandom(themes);
    goalText.textContent = getRandom(goals);
    styleText.textContent = getRandom(styles);
}
function getRandom(array){
    let randomIdx = Math.floor(Math.random() * array.length - 1) + 1;
    return array[randomIdx];
}