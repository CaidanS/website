

themes = {
    'dark': {
        '--primarycol': 'lightgray',
        '--titlecol': 'white',
        '--lowcol': 'gray',
        '--backcol': 'black',
        '--accentbrightcol': 'hotpink',
        '--accentdarkcol': 'RoyalBlue',
        '--selectforecol': 'white',
    },
    'light': {        
        '--primarycol': '#333333',
        '--titlecol': 'black',
        '--lowcol': 'darkgray',
        '--backcol': 'white',
        '--accentbrightcol': 'hotpink',
        '--accentdarkcol': 'RoyalBlue',
        '--selectforecol': 'white',
    }
}
theme_toggle = document.getElementById('theme_toggle')

function toggleTheme() {
    theme = (theme == "dark") ? "light" : "dark";
    setTheme(theme)
    
}

function setTheme(theme){
    for (const [key, value] of Object.entries(themes[theme])) {
        console.log(key, value);
        document.documentElement.style.setProperty(key, value);

    }
    localStorage.setItem("theme", theme);
}

theme = localStorage.getItem("theme");
if (theme == null){
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    theme = (prefersDarkScheme) ? "dark" : "light"; 
}

setTheme(theme)

