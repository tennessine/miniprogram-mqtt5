import mqtt from './utils/mqtt.js';

App({
  onLaunch: function () {
    const host = 'wxs://www.mengmeitong.com/mqtt';
    const options = {
      protocolVersion: 5,
      clientId: 'miniprogram',
      clean: false
    };
    const client = mqtt.connect(host, options);

    client.on('connect', () => {
      console.log(`hello`);
      // client.subscribe('test/topic', {
      //   qos: 1
      // });
    });
    client.on('message', (topic, message, packet) => {
        wx.showModal({
          title: topic,
          content: message.toString()
        });
      });
  }
})
