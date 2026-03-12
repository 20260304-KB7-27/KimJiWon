function scanTraffic(packetId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (packetId % 2 === 0) {
        resolve(`Packet [${packetId}] : 정상 트래픽입니다`);
      } else {
        reject(`Packet [${packetId}] : 악성 트래픽이 감지되었습니다.`);
      }
    }, 1000);
  });
}

scanTraffic(1)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.log(err));

scanTraffic(2)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.log(err));
