<template>
  <div class="multi-check">
    <div v-for="(item, index) in items" :key="index" @click="toggleCheck(item)" :class="computedClass(item)">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'multi-check',
  props: {
    items: {
      type: Array
    },
    itemKey: {
      type: String
    },
    value: {
      type: Array
    },
    itemClass: {
      type: String
    }
  },
  data () {
    return {
      checkedKeys: this.value
    }
  },

  created () {
  },

  methods: {
    toggleCheck (item) {
      let value = item
      if (this.itemKey) {
        value = item[this.itemKey]
      }
      let spliced = false
      for (let i = 0; i < this.checkedKeys.length; i++) {
        if (this.checkedKeys[i] === value) {
          this.checkedKeys.splice(i, 1)
          spliced = true
          break
        }
      }
      if (!spliced) {
        this.checkedKeys.push(value)
      }
      this.$emit('input', this.checkedKeys)
    },

    computedClass (item) {
      let value = item
      if (this.itemKey) {
        value = item[this.itemKey]
      }
      const classObject = {}
      if (this.itemClass) {
        classObject[this.itemClass] = true
      }
      if (this.checkedKeys.indexOf(value) > -1) {
        classObject[this.selected || 'selected'] = true
      }
      return classObject
    }
  }
}
</script>
