<template>
  <div class="text-input">
    <a-form-item
      :label="section.required ? `${section.title} (required)` : section.title"
      v-if="!section.isParagraph"
    >
      <a-input placeholder="put your answer here" />
    </a-form-item>
    <a-form-item
      :label="section.required ? `${section.title} (required)` : section.title"
      v-if="section.isParagraph"
    >
      <a-textarea
        placeholder="put your answer here"
        :auto-size="{ minRows: 2, maxRows: 6 }"
      />
    </a-form-item>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      required: true
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
