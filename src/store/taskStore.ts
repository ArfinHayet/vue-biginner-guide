// src/store/taskStore.ts
import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  done: boolean
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],  // ✅ Type cast here
  }),
  actions: {
    addTask(title: string) {
      this.tasks.push({ id: Date.now(), title, done: false })
    },
    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  },
  getters: {
    completedTasks: (state): Task[] => state.tasks.filter(t => t.done),
    pendingTasks: (state): Task[] => state.tasks.filter(t => !t.done)
  }
})
