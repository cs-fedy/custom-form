<template>
  <layout>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Form builder">
        <builder />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Form responses">
        <form-responses />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Form settings">
        Settings section here
      </a-tab-pane>
    </a-tabs>
  </layout>
</template>

<script>
import FormResponses from '@/components/FormResponses.vue'
import Builder from '@/components/Builder.vue'
import Layout from '@/layout/Layout.vue'

export default {
  name: 'FormBuilder',
  components: {
    Builder,
    FormResponses,
    Layout,
  }
}
</script>
