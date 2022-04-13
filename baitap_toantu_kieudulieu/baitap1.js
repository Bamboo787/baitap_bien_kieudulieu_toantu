let a, b, c;
        function tb() { 
            a = Number(document.getElementById('x').value);
            b = Number(document.getElementById('y').value);
            c = Number(document.getElementById('z').value);
            let tb = (a + b + c)/3;
            document.getElementById('trungbinh').value  = tb;
             
        }
        function tg() {
            a = Number(document.getElementById('x').value);
            b = Number(document.getElementById('y').value);
            c = Number(document.getElementById('z').value);
            let tong = (a + b + c);
            document.getElementById('tong').value = tong;
        }