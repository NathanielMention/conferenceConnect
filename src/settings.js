import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e115a97c10f9412b8078e336cc3df715";
const token =
  "007eJxTYHhY3fC5cMnL3w/a9yd7/TON2ZR1SWLWX84JVyauFT/AeTNBgSHV0NA00dI82dAgzdLE0CjJwsDcItXY2Cw52TglzdzQ9ODNd8kNgYwM/h+nsDAyQCCIz8JQklpcwsAAAGfrI1w="
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "test";