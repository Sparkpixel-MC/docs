import { defineClientConfig } from 'vuepress/client'
import CraftingTable from './components/CraftingTable.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CraftingTable', CraftingTable)
  },
})
