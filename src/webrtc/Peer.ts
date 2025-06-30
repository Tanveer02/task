import {
  RTCPeerConnection,
  RTCSessionDescriptionType,
  RTCDataChannel,
} from 'react-native-webrtc';

// STUN-only config for LAN; no internet usage
const config = {iceServers: [{urls: 'stun:stun.l.google.com:19302'}]};

export class Peer {
  pc: RTCPeerConnection;
  dc?: RTCDataChannel;

  constructor() {
    this.pc = new RTCPeerConnection(config); // standard WebRTC API :contentReference[oaicite:6]{index=6}
    this.pc.onicecandidate = e => {
      /* you’ll encode/send e.candidate via QR or BLE */
    };
  }

  async createOffer(): Promise<RTCSessionDescriptionType> {
    this.dc = this.pc.createDataChannel('file'); // create DataChannel :contentReference[oaicite:7]{index=7}
    await this.pc.setLocalDescription(await this.pc.createOffer());
    return this.pc.localDescription!;
  }

  async receiveOffer(
    offer: RTCSessionDescriptionType,
  ): Promise<RTCSessionDescriptionType> {
    await this.pc.setRemoteDescription(offer);
    this.pc.ondatachannel = ({channel}) => (this.dc = channel);
    await this.pc.setLocalDescription(await this.pc.createAnswer());
    return this.pc.localDescription!;
  }

  async finalize(answer: RTCSessionDescriptionType) {
    await this.pc.setRemoteDescription(answer);
  }
}
