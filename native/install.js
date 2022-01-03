const process = require('process');
const fs = require('fs');
const regedit = require('regedit');
const path = require('path');
const readline = require('readline');

const manifest = {
    name: 'open_with_mpv',
    description: 'Opens youtube link in mkv.',
    path: '',
    type: 'stdio',
    allowed_extensions: ["open_with_mpv@slockertsen.no"]
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve)); 

(async () => {

    try {
        let mpv_url = '';

        while(!mpv_url) {
            const input = await prompt('Please input url to mpv.exe');
            if(!input) console.log('ERROR: Url cannot be empty, please try again.');
            mpv_url = input; 
        }
        
        if(!mpv_url) return console.log('Did')
    } catch(err) {
        return console.log(err);
    }

})();

// rl.question('Input url to mpv.exe', (_mpv_url) => {
//     if(!_mpv_url) return console.log('Please input url to mpv.exe');
//     fs.writeFile('mpv_location.txt', _mpv_url, (err) => {
//         if(err) return console.log('Something went wrong saving mpv location, please try again.') 
//         console.log('Saved mpv.exe location');
//     });
// });

// manifest.path = path.resolve(path.join(__dirname, manifest.name + '.bat'))

// const key_path = "HKCU\\Software\\Mozilla\\NativeMessagingHosts";

// regedit.createKey(`${key_path}\\${manifest.name}`, (err) => {
//     if(err) return console.log(err);
// });

// const k = `${key_path}\\${manifest.name}`;

// regedit.putValue({
//     [k]: {
//         'k': {
//             value: path.join(__dirname, `${manifest.name}.json`),
//             type: 'REG_DEFAULT:'
//         }
//     }
// }, function(err) {
//     if(err) return console.log(err)
//     console.log('Added registry values at ', k)
// });

// fs.writeFile('open_with_mpv.json', JSON.stringify(manifest), (err) => {
//     if(err) return console.log(err)
//     console.log('Succesfully created app manifest.')
// });

// const script = `@echo off\ncall node ${__dirname}\\${manifest.name}.js`;

// fs.writeFile(`${manifest.name}.bat`, script, (err) => {
//     if(err) return console.log(err) 
// });