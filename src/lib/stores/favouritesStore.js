import { writable } from "svelte/store"
import { browser } from "$app/env"

// Saving the favourites store inside the localStorage
export let favourites = writable(
  browser && localStorage.favourites ? JSON.parse(localStorage.favourites) ?? [] : []
)

favourites.subscribe(value => {
  if (!browser) return

  localStorage.setItem("favourites", JSON.stringify(value))
})
