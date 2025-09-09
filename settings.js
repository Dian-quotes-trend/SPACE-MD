require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABVhKVvaEXvkUwQAAHAHAAAKAAAAY3JlZHMuanNvbpVUyZKjOBD9F13taBvbbI6oiMFgs3kHL3iiDwIEVrEjmcUd*vcOXFVdfZjpqeEkUhmZL1++px8gzTBBJmrB9AfIS1xBirojbXMEpmB2CwJUgj7wIYVgCsKZJnF7VWy2zDoJXZMZrA+DoUGrsdKkuXZ0N0cvTvGdMPoLePRBfnNj7P2hoCUk9t7bUSOzhCtLHOtij4kp29E5ylpdNK17OvZ2We3L9Qt4dBUhLnEazvMrSlAJYxO1W4jLr8FvF7GRF95oc1CitTsRyVI1rdjQBlIhXs9ngzNP8WbIt24qfQ1+dDkWQrJcXkvn3Fqja3msNMY0kKMQZX5uesZZjiJhV7PqO3yCwxT5uo9Simn7Zd7VbTUwTsjKCwVFR1ktZkuZzgfOit0U9xCVyV4iM8HZHs5fBK7MeiTarcb0EvgDc03p6yFcrPJgz8zWQZWdNIe+ZnK5khvnd+Db8kMr0f*h3Znd7dWkEewmC7etfrIG5qu4zZdnz76xuGDpcD*sOWc9YnZfg5*exie8UKUDft1aNJg4B1OcW5ZtB0dPli6vo+OIxVrKj5vsEz6kt*JPKBWqMRO5rbStgsQ5OzTDZFWLd1ONrsfq1MTxVqnHmsMopGb2Ib8791iXp9LeGHD31eJCRXR09VYf9ainc6TRwkBkZuHLc6IItboPpsyjD0oUYkJLSHGWdjGe7wPoVxbySkSf7IKCbpmFN+LEAlmutagvy6ucM2YtJ1gNNT7Yu3DhzV1WUKUX0Ad5mXmIEORrmNCsbFeIEBgiAqZ*f++DFDX0bW9dtzHTBwEuCT2ktzzOoP+x1I9L6HnZLaVWm3pyd0AlmA4*w4hSnIako*GWwtK74grJV0gJmAYwJujXgKhEPpjS8oZ+mVbO*I53W2KcESctQR8kz31gH0zBiOV4diKwDCuwU4b*i3yru7Iwz7+liII+iJ9pY348EbkhNxSG3GTcJXbxxy+AXT0fUYhjAqZAXqZcq3vz+UptwpWjqpIeSnIogc+BPoTxznx+JLnAJnlDmSpcu1Xv5t7q5ToqirMv8PLGEXd8E3nxffXyD0XAFMTpEWFeDQpNgQrnOfLmmtbIWC3nQztU6NAYlntXMCtWsVR*X28EXs049ryfz+drbaNkTFqLIwaLcm9*4xZlZF9pJNUvXTcfVdhDvzebLCP*lMBIWuDrklueZKchY1vXVKwdqxl+zQ5DD+42RmjVm8I9pKfDiOWVeGZkPbNpFCGMuSaDhn0ZT852A3knPZ2V+k2yT8vE708VfqqpW1X3G2D0dH4KuwX+9+regHcKGz76v9V4f0v+xY8zWBxdM9hcCs*13Yly4gdlwhP5fjGLeBxs6tdke9gIF83w7uDx+N4HeQxpkJUJmAKY+mWGfdAHZXbrJKunQfaHZrKk6*N3s8aQUOnTBjZOEKEwycGU4Vl+wog8I7xlbcss1yC5diSoEym5dZpupTy3KKQfrgJS922qCDx+AlBLAQIUAxQAAAgIABVhKVvaEXvkUwQAAHAHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '256754851585',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'dian-quotes-trend',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '8255625494:AAGlsSa_0qMZcU8tvguqXR9j2XIsIatFwFs',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '235234734734745875',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
