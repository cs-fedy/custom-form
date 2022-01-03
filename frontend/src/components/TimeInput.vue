<template>
  <div class="text-input">
    <a-form-item label="Question" :labelCol="{ span: 3 }">
      <a-input
        placeholder="put your question here"
        @change="handleTitleChange($event, section.id)"
      />
    </a-form-item>
    <a-form-item label="Time" :labelCol="{ span: 3 }">
      <a-time-picker @change="onChange" />
    </a-form-item>
    <a-divider />
    <card-toolbar :section="section" />
  </div>
</template>

<script>
import CardToolbar from '@/components/CardToolbar.vue'

export default {
  name: 'TimeInput',
  components: {
    CardToolbar
  },
  props: {
    section: {
      required: true
    },
    handleTitleChange: {
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
