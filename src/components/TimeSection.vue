<template>
  <div class="text-input">
    <a-form-item
      :label="section.required ? `${section.title} (required)` : section.title"
    >
      <a-date-picker @change="onChange" />
    </a-form-item>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      required: true
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>

<style scoped>
.text-input {
  margin: 20px 0;
  padding: 20px 40px;
  border: 1px solid #f1f1f1;
}
</style>
