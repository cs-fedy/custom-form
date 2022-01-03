<template>
  <a-row type="flex" justify="end" :gutter="{ xs: 8, sm: 16, md: 24 }">
    <a-col>
      <a-button @click="handleDuplicate()"> duplicate </a-button>
    </a-col>
    <a-col>
      <a-button @click="handleRemove()"> Remove </a-button>
    </a-col>

    <a-col v-if="tag != null && tag == 'text'">
      <a-divider type="vertical" />
    </a-col>
    <a-col v-if="tag != null && tag == 'text'">
      <a-radio @click="toggleParagraph()" :checked="section.isParagraph"
        >Paragraph</a-radio
      >
    </a-col>

    <a-col v-if="tag != null && tag == 'choice'">
      <a-divider type="vertical" />
    </a-col>
    <a-col v-if="tag != null && tag == 'choice'">
      checkbox
      <a-switch default-checked @change="toggleRadio" :checked="section.isRadio" />
      radio
    </a-col>

    <a-col>
      <a-divider type="vertical" />
    </a-col>
    <a-col>
      <a-radio @click="toggleRequire()" :checked="section.required"
        >Required</a-radio
      >
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'CardToolbar',
  props: {
    tag: {
      default: null
    },
    section: {
      required: true
    }
  },
  methods: {
    handleDuplicate() {
      this.$store.commit('duplicateSection', this.section.id)
    },
    handleRemove() {
      this.$store.commit('removeSection', this.section.id)
    },
    toggleParagraph() {
      this.$store.commit('toggleParagraph', this.section.id)
    },
    toggleRequire() {
      this.$store.commit('toggleRequire', this.section.id)
    },
    toggleRadio() {
      this.$store.commit('toggleRadio', this.section.id)
    }
  }
}
</script>
