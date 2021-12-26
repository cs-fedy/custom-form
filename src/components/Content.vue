<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Form builder">
        <form-builder />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Form preview" force-render>
        <form-preview />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Form responses">
        <form-responses />
      </a-tab-pane>
      <a-tab-pane key="4" tab="Form settings">
        Settings section here
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import FormPreview from '@/components/FormPreview.vue'
import FormResponses from '@/components/FormResponses.vue'
import FormBuilder from '@/components/FormBuilder.vue'

export default {
  name: 'Content',
  components: {
    FormBuilder,
    FormPreview,
    FormResponses
  },
}
</script>
