# The Focus Telecom competition application

Application in widget form. App call to two phone numbers, if both will pick up the phone app will link them and monitor call status

## Prerequisites

```
Node.JS v8.12+
AngularCLI 7+
```

### How install
> Node.JS

Go to [Node.JS](https://nodejs.org/en/) website, download and install `LTS` version.

> AngularCLI

Open terminal and paste
```bash 
npm install -g @angular/cli
```
This will install Angular CLI in latest version on your system.

## Instalation

### On Windows 
> Easy way to prepare application.

Run `windows_init_application.bat` to download all necessary `npm packages`.

### On Linux
> I'm sorry but for some time I do not have linux on my laptop. That's why I do not any fancy starting and initializing script :( 

Go to `backend` folder, open terminal and use command `npm install`.
This same steps make in `front` folder.

> Same command on Windows if you do not want to use `.bat` files.

## Configuration
In `app.js` file change `Dialer.config` variables.
```javascript
    Dialer.configure({
    login: 'login',
    password: 'password',
    url: 'url'
    });
```
If you do not have config variables, you can still use app in OFFLINE mode!
Simply comment `Dialer.config`!
```javascript
//    Dialer.configure({
//    login: 'login',
//    password: 'password',
//    url: 'url'
//    });
```

## Usage

### Windows
> Again easy run on Windows.

Run `run_on_windows.bat`. This file will run other two `.bat` files with commands to run backend and front servers.

### On Linux
Go to `backend` folder, open terminal and use command `node app.js`, then go to `front` folder and in terminal use `ng serve` command.

> Commands will work on Windows too.

### After run servers

Open new tab on browser and go to [localhost:4200](localhost:4200) adress.

## Finish!
You will see running application!



