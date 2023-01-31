function convertToFah(){
        const c=document.getElementById('cel').value;
        let f=(9/5)*c +32;
        document.getElementById('fah').value=f;
    }
function convertToCel(){
        const f=document.getElementById('fah').value;
        let c=(f-32)/1.8;
        document.getElementById('cel').value=c;
    }
