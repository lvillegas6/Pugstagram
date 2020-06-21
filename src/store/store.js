import { readable, writable } from 'svelte/store'

export const email = readable('theeniig@gmail.com')
export const likeCount = writable(0)