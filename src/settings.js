import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e115a97c10f9412b8078e336cc3df715";
const token =
  "007eJxTYMhl2HZC3t6HO8TG83LvWtXDM+c8bojXirLceC3cqaIhL0WBIdXQ0DTR0jzZ0CDN0sTQKMnCwNwi1djYLDnZOCXN3NBUf9O75IZARobCp/sZGKEQxGdhyE3MzGNgAADBMR5G"
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";