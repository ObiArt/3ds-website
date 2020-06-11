window.setInterval(function () {
    window.scrollTo(40, 220);  
}, 50);
//I wish i could use React :<
var map = [
[0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
[0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
[0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0],
[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]]
var here = document.getElementById('mgs')
function update(){
    var table = document.createElement('table')
    for (i = 0; i < map.length; i++){
        var line = document.createElement('tr')
        for (u = 0; u < map[i].length; u++) {
            var row = document.createElement('th')
            row.className = 'cell'
            switch(map[i][u]){
                case -1:
                    row.style.backgroundColor = `#3bff0a`
                    break
                case 0:
                    row.style.backgroundColor = `#000000`
                    break
                case 1:
                    row.style.backgroundColor = `#ffffff`
                    break
            }
            line.appendChild(row)
        }
        table.appendChild(line)
    }
    here.innerHTML = ''
    here.appendChild(table)
}

update()