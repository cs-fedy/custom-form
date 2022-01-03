<template>
  <div class="text-input">
    <p>
      {{ section.required ? `${section.title} (required)` : section.title }}
    </p>
    <a-radio-group v-if="section.isRadio">
      <a-radio
        class="block-option"
        :value="option"
        :key="index"
        v-for="(option, index) in section.options"
      >
        {{ option }}
      </a-radio>
    </a-radio-group>

    <a-checkbox-group
      name="checkboxgroup"
      :options="section.options"
      v-if="!section.isRadio"
    />
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

.block-option {
  display: block;
  height: 30px;
  line-height: 30px;
}
</style>
