type CustomEventType = "onToggleSideBar";
export function subscribe(
  eventName: CustomEventType,
  listener: EventListenerOrEventListenerObject
) {
  document.addEventListener(eventName, listener);
}

export function unsubscribe(
  eventName: CustomEventType,
  listener: EventListenerOrEventListenerObject
) {
  document.removeEventListener(eventName, listener);
}

export function publish(eventName: CustomEventType, data?: any) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}
