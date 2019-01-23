#!/usr/bin/env node
const gradient = require('gradient-string');
const chalk = require('chalk');
const boxen = require('boxen');

const data = {
    name : gradient.morning('                  Bénédicte Struvay'),
    handle: chalk.yellow('eivy'),
    work: chalk.yellow('      Work : ')+ gradient.atlas('     Junior at ')+chalk.magenta('BeCode.org'),
    npm: chalk.yellow('      Npm : ')+ gradient.atlas('      https://www.npmjs.com/')+chalk.magenta('~eivy-chan'),
    github: chalk.yellow('      Github : ')+ gradient.atlas('   https://github.com/')+chalk.magenta('benestruv'),
    linkedin: chalk.yellow('      LinkedIn : ')+ gradient.atlas(' https://www.linkedin.com/')+chalk.magenta('in/b%C3%A9n%C3%A9dicte-struvay-0859bb54/'),
    blog: chalk.yellow('      Blog : ')+ gradient.atlas('     http://struvaybenedicte')+chalk.magenta('.blogspot.com/'),
    card: chalk.yellow('      Card : ')+ chalk.magenta('     npx eivy-chan'),
}

const intrlgn = '\n'

// Structure de la carte finale
const cardnpx =    
    `${data.name} / ${data.handle}` + intrlgn + intrlgn +
    `${data.work}` + intrlgn +
    `${data.npm}`+ intrlgn +
    `${data.github}` + intrlgn +
    `${data.linkedin}` + intrlgn +
    `${data.blog}` + intrlgn + intrlgn +
    `${data.card}`

// Appel de la carte et stylisation

//I'm an artist
const da = `                                   __        _` + intrlgn;
const db = `                                  / *_)  ___|_|_ _ _ _ ` + intrlgn;
const dc = `                       _.----. _ /../   | -_| | | | | |` + intrlgn;
const dd = `                     /............./    |___|_| _/|_  |` + intrlgn;
const de = `                  __/..(...|.(...|                |___|` + intrlgn;
const df = `                 /__.-|_|--|_|` + intrlgn;


const dino=(gradient.summer(                `${da}`+`${db}`+`${dc}`+`${dd}`+`${de}`+`${df}`));

console.log(chalk.magenta(boxen(`${dino}`+intrlgn+`${cardnpx}`, {padding: 1, margin: 1, borderStyle: 'round'})));