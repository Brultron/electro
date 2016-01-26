
let context;

class AC {

  constructor() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  }

  createSource(arraybuffer, cb){
    context.decodeAudioData(arraybuffer, (audiobuffer) =>{
      var source = context.createBufferSource();
      source.buffer = audiobuffer;
      source.disconnect();
      cb(audiobuffer);
    });
  }

  getContext(){
    return context;
  }

}


let instance = new AC();

export default instance;
