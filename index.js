function superbowlWin(recordArray) {
  const winner =  recordArray.find(record => record.result === "W")
  return winner ? winner.year : undefined 
}
