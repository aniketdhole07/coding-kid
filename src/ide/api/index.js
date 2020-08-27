import languages from './languages.json'

function getId(current, langs) {
    let id = 0
    langs.forEach(lang => {
        if (lang.name === current)
            id = lang.id
    })
    return id;
}
export function submitCodeToApi(editor) {
    let code = editor.code;
    let id = getId(editor.lang, languages);
    let stdin = editor.stdin;
    let body = JSON.stringify({
        language_id: id,
        source_code: code,
        stdin: stdin
    })
    
    return fetch("https://judge0.p.rapidapi.com/submissions", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host":"judge0.p.rapidapi.com",
            "x-rapidapi-key": "a452dbace3mshf536f8f4f6cb468p1eb37cjsn184155d05fa2",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": body
    });
}
export function checkStatusFromApi(token) {
    return fetch(`https://judge0.p.rapidapi.com/submissions/${token}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": "a452dbace3mshf536f8f4f6cb468p1eb37cjsn184155d05fa2"
        }
    })
}