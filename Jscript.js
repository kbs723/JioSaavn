{
    let status=false;
    
    function visi(){
        var rt=document.querySelector(':root');
        if(status){
            rt.style.setProperty('--visLag','none');
            rt.style.setProperty('--visDown','flex');
            status=false;
            return;
        }
        rt.style.setProperty('--visLag','flex');
        rt.style.setProperty('--visDown','none');
        status=true;
    }
}