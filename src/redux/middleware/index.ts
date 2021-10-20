import { amplitudeEvent } from "./amplitude";

export const loggingMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.log("Redux Type ==> ", action.type);
    console.log("Redux Payload ==> ", action.payload);

    amplitudeEvent(action);

    next(action);
  };
