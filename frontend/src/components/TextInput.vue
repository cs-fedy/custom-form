<template>
  <div class="text-input">
    <a-form-item label="Question" :labelCol="{ span: 3 }">
      <a-input
        placeholder="put your question here"
        @change="handleTitleChange($event, section.id)"
      />
    </a-form-item>
    <a-divider />
    <card-toolbar tag="text" :section="section" />
  </div>
</template>

<script>
import CardToolbar from '@/components/CardToolbar'
export default {
  name: 'TextInput',
  components: {
    CardToolbar
  },
  props: {
    section: {
      required: true
    },
    handleTitleChange: {
      required: true,
      type: Function
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
