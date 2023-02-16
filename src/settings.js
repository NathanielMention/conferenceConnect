import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e115a97c10f9412b8078e336cc3df715";
const token =
  "007eJxTYFgwWXX7UcPsinSWnde1t74K0GuS++9VdO3TpdleZd2xi8wVGFINDU0TLc2TDQ3SLE0MjZIsDMwtUo2NzZKTjVPSzA1NTx95m9wQyMjwncuUkZEBAkF8FobcxMw8BgYAfw0gRQ==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";