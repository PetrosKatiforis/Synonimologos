import { writable } from "svelte/store"

export let notifications = writable([])

export function notify(title, message) {
  // Creates a new notification object and inserts it into the store

  notifications.update(notifications => [...notifications, {
    title,
    message,
    key: (new Date().getTime()) + title,

    duration: 3000,
  }])
}
