var request = require('request')

// STATS
function reportStats () {
  console.log('reportStats.start')

  request('https://remote.devtools.rocks/_stats', function (err, response, body) {
    if (err) {
      console.log('reportStats.err', err)
      return
    }

    body = JSON.parse(body)

    console.log('reportStats.sockets_concurrent', body.count.sockets)
    console.log('reportStats.sessions_concurrent', body.count.sessions)
    console.log('reportStats.targets_concurrent', body.count.targets)

    console.log('reportStats.end')
  })

}

reportStats();

setInterval(reportStats, 300000) // Run every 5 minute
