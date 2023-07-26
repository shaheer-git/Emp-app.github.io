dark = () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.getElementById('light').style.display = "block"
    document.getElementById('dark').style.display = "none"
    localStorage.setItem('darkTheme','dark');
    localStorage.removeItem('lightTheme')
   
}
light = () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.getElementById('light').style.display = "none"
    document.getElementById('dark').style.display = "block"
    localStorage.setItem('lightTheme','light');
    localStorage.removeItem('darkTheme')
    
}