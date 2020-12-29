class Processor{
  process(data){
    var rows = data.split('\r\n')
    var parsedData = []

    rows.forEach(row => {
      var arr = row.split(',')
      parsedData.push(arr)
    })

    return parsedData
  }
}

module.exports = Processor;