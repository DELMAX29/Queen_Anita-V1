//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2347043759577'
global.nomerowner = ["2347043759577"]
global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENxelJxMnJ6ZFlVUFZsOHc4azJHakdic1o0amFsVHJpT1dMQVRqekowZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkp5ME1wSWpSK3ZINUZUS21LUTRuUGl5R2tRTnViemhxd21BYTRCSXFRQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRExxVUt3ckViMTlyejhvMzlzQXluMU9xMVozZTVtZCtKRkIvaTNMcFVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZ0RCYlY0c2pCUUxJYys1WnJWRERlYW9zMy9yU2hSVnRmZGozVEhmeWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPY1Y3K1hVNlQyVndhTmtYaTlFQTNUc2ptWlJpTU4zcXBBNG5EaVlzWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZaL2RMT1A3UmZYQitqR1BmaTQ1b0kwblJyckR2c1RKTEVYU0kvazRHaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NRSlpQcDZUMnVrYVZvaDQxd2JMNlBzL1doTC91ckRGR0F4MlJEa2ptMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm9UTndaK3hQSHEvTFo4L3VRNitRalpYeEhXbVZsQXc3Rk1sWEVlNFRVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZobDNPSlVWb01CdWhJZTQ5TFpxOHRqL1lUeWFxWktCWHhpdDZNcEQrS3B6ZkVDVmpMWUk4Z0k1TVFEVG9STElxSkVtWXhPUUNiN0prcERVcUtWZ2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiIyYmtmcVg0Z1BNTW5hRXBrS1V4Uk8xY01udTN1aUJmUjFobTh4M2JQSXhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2SmNkMlNIRFNkYUY1NjVBQ1RUX0p3IiwicGhvbmVJZCI6ImQ3NTE3ZGYzLTRjMmYtNGM2Yi1hMGVlLWE1MDRmNDJiMGMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQM2pmaHRCa1NYUHZYdnU3V1UzMFE1dllwZmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVDaW9YUGRleFJNUWNXUE50Wkt5R1RsTUZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRINVpWR0pXIiwibWUiOnsiaWQiOiIyNjM3MTc2NzIwNjg6NjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xiSjAvb0RFSys2enJZR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im04cDdnUm1Kb0FROEcvUU1qL2RaVEtybWVsUkZGQ0h1cnJyU1haa1FuMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJtVkRDWkplN0MrRmdMNVQwZExSd3V5clZHa2tZLzRzOU5hQmppN2dNYlk4MzFXVU1WdVZLL2NZZDdMWHVOQisraVU2NmVQTG56eXhwcklnZzFmTEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHNnJiYU9LQ0t3WVd1aUNXVE9ubDR0WHExRTdyemhaRllTMUdKQlZpYUJ0SHVoZlR3V09YNG1USFNFZFdndS9uR0ZRNTRLSlp0MUFmY1k1TlI2R21qdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNzY3MjA2ODo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJadktlNEVaaWFBRVBCdjBESS8zV1V5cTVucFVSUlFoN3E2NjBsMlpFSjlmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MTQ0MzgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4wViJ9"
// Apikey 

global.skizo = 'David Cyril'
global.casterix = 'DeeCeeXxx'
//watermark 
global.packname = '*DAVID CYRIL*'
global.author = 'QUEEN_ANITA-V1'

// cpanel 
global.domain = 'https://' // deeceexxx
global.apikey2 = 'ptlc' // I love anita
global.capikey2 = 'ptla' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
